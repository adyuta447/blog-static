import Link from "next/link";
import "../app/globals.css";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: `K0oceng's Blog`,
  description: "A blog that discusses whatever I want to write about.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-gray-900 p-9 my-6 rounded-lg">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">K0oceng's Blog</h1>
        </Link>
        <p className="text-slate-300 py-2">
          A blog that discusses whatever I want to write about.
        </p>
        <Link href={"/"}>
          <p className=" font-bold text-slate-300 py-2">| Home |</p>
        </Link>
        <br />
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-4 text-center text-slate-400">
        <br />
        <Link href={"https://k0oceng.vercel.app/"}>
          <p>Designed by Adyuta</p>
        </Link>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-200">
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
