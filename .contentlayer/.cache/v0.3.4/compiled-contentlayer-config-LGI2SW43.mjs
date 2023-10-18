// contentlayer.config.js
import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";
import { spawn } from "node:child_process";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// lib/remark-tok-headings.ts
import { visit } from "unist-util-visit";
import slugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import { remark } from "remark";
function remarkTocHeadings() {
  return (tree, file) => {
    const toc = [];
    visit(tree, "heading", (node) => {
      const textContent = toString(node);
      toc.push({
        value: textContent,
        url: "#" + slugger.slug(textContent),
        depth: node.depth
      });
    });
    file.data.toc = toc;
  };
}
async function extractTocHeadings(markdown) {
  const vfile = await remark().use(remarkTocHeadings).process(markdown);
  return vfile.data.toc;
}

// contentlayer.config.js
var SYNC_INTERVAL = 1e3 * 60;
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    lastmod: { type: "date" },
    draft: { type: "boolean" },
    // coverImage: { type: 'string', required: true },
    banner: { type: "string", required: true },
    summary: { type: "string" },
    images: { type: "list", of: { type: "string" } },
    authors: { type: "list", of: { type: "string" } },
    layout: { type: "string" },
    bibliography: { type: "string" },
    canonicalUrl: { type: "string" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.split(".")[0]
    },
    filePath: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFilePath
    },
    toc: { type: "string", resolve: (doc) => extractTocHeadings(doc.body.raw) }
  }
}));
var syncContentFromGit = async ({ contentDir, gitTag }) => {
  const startTime = Date.now();
  console.log(`Syncing content files from git (${gitTag}) to ${contentDir}`);
  console.log("\n");
  console.log(`"gitTag: " ${gitTag}`);
  console.log(`"contentDir:" ${contentDir}`);
  const syncRun = async () => {
    const gitUrl = "https://github.com/ZorbaBuda/blog-v1.git";
    await runBashCommand(`
    
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}"; 
          git pull;
          
        else
          git clone --depth 1 --single-branch ${gitUrl} ${contentDir};
      fi
    `);
  };
  let wasCancelled = false;
  let syncInterval;
  const syncLoop = async () => {
    console.log("Syncing content files from git");
    await syncRun();
    if (wasCancelled)
      return;
    syncInterval = setTimeout(syncLoop, 1e3 * 60);
  };
  await syncLoop();
  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};
var runBashCommand = (command) => new Promise((resolve, reject) => {
  const child = spawn(command, [], { shell: `${process.env.SHELL_GIT_BASH}` });
  const logMessages = [];
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", (data) => {
    logMessages.push(data);
    process.stdout.write(data);
  });
  child.stderr.setEncoding("utf8");
  child.stderr.on("data", (data) => {
    logMessages.push(data);
    process.stderr.write(data);
  });
  child.on("close", function(code) {
    if (code === 0) {
      resolve(void 0);
    } else {
      const logStr = logMessages.join("\n");
      reject(
        new Error(`Command failed with exit code ${code}:

${logStr}`)
      );
    }
  });
});
var contentlayer_config_default = makeSource((sourceKey = "main") => ({
  syncFiles: (contentDir) => syncContentFromGit({ contentDir, gitTag: sourceKey }),
  // contentDirPath: `blog-${sourceKey}`,
  contentDirPath: `blogs`,
  // contentDirInclude: [BLOG_DIRECTORY],
  documentTypes: [Post],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
}));
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LGI2SW43.mjs.map
