import React from "react";

export async function generateStaticParams() {
  const post = ["satu", "dua"];

  return post.map((post) => {
    return {
      postId: post,
    };
  });
}

export default function page() {
  return <div>page</div>;
}
