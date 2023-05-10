import Link from "next/link";
import { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Hello World",
};

export default function Home() {
  return (
    <main className={`${inter.className} grid place-content-center mt-10`}>
      <Link
        className="text-l text-white
      "
        href="/about"
      >
        Check About Page
      </Link>
      <br />
      <Link
        className="text-l text-white
      "
        href="/users"
      >
        Check User Page
      </Link>
    </main>
  );
}
