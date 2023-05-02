import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is about page",
};

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">Go to Home Page</Link>
    </>
  );
}
