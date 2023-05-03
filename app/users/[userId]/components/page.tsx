type Props = {
  promisePosts: Promise<Post[]>;
};

export default async function UserPosts({ promisePosts }: Props) {
  const posts = await promisePosts;

  return (
    <>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
          </article>
        );
      })}
    </>
  );
}
