import Header from "@/components/header/Header";
import "./globals.scss";
import "@mdxeditor/editor/style.css";
import { Inter } from "next/font/google";
import { ThemeProviders } from "./theme-providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="inter" lang="en" suppressHydrationWarning>
      <body className="dark:bg-black dark:text-white text-black bg-white">
        <ThemeProviders>
          <div className="mx-auto ">
            <div className=" ">
              <Header />
              <main className="px-10">{children}</main>
            </div>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
