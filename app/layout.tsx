import Header from "@/components/header/Header";
import "./globals.css";
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
      <body className="bg-black text-white">
        <ThemeProviders>
          <div className="mx-auto px-4 sm:px-6  xl:px-0">
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
