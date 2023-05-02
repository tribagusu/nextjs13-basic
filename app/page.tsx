import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Hello World",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HELLO WORLD</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  );
}
