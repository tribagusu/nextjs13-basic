import { Suspense } from "react";
import getUser from "@/lib/getUser";
import getAllUsers from "@/lib/getAllUsers";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: { userId: string };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  // fetch same data where it's used. It's okay because Next.js will automatically dedupe requests in a tree
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.name,
    description: `This is the page page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // fetch data in parallel to minimize waterfalls and reduce loading times
  const [user, userPosts] = await Promise.all([userData, userPostsData]);

  if (!user) {
    notFound();
  }

  // user loading UI, streaming, and suspense to progressively render a page and show a result to the user while the rest of the content loads --> see the "UserPosts"
  return (
    <>
      <h2>{user?.name}</h2>
      <br />

      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promisePosts={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
}
