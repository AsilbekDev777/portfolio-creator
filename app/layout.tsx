import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {Link} from "@heroui/link";
import clsx from "clsx";

import {Providers} from "./providers";

import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Navbar} from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "white"},
    {media: "(prefers-color-scheme: dark)", color: "black"},

  ],
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
    <head/>
    <body>
    <div className="flex flex-col h-screen">
      <Navbar/>
      <main className="w-full m-auto">
        {children}
      </main>
      <footer className="w-full bg-black text-white pt-24 pb-12">
        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Ready to make something kickass? <br/>
            <span className="text-blue-500">Let's get on a call.</span>
          </h2>
        </div>

        {/* Footer Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold">Portfolio Creator.</h3>
            <p className="mt-2 text-neutral-400">
              4353 Delaware Avenue, San Francisco, USA
            </p>

            <div className="flex items-center gap-2 mt-4 text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v12H4z"/>
                <path d="m22 4-10 7L2 4"/>
              </svg>
              <span>hi@thefolio.com</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <p className="font-medium">About</p>
            <p className="font-medium">Contact</p>
            <p className="font-medium">Dribbble</p>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <p className="font-medium">Services</p>
            <p className="font-medium">Blog</p>
            <p className="font-medium">Instagram</p>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <p className="font-medium">Experience</p>
            <p className="font-medium">Projects</p>
            <p className="font-medium">Twitter</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto px-6 mt-20 text-sm text-neutral-500">
          <p>
            © All rights reserved. Sumit Hegde. · Powered by Webflow · Image
            License Info · Instructions · Changelog · Style Guide
          </p>
        </div>
      </footer>
    </div>
    </body>
    </html>
  );
}
