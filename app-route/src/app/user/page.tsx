import next from "next/types";

export default async function User() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  const Json = res.json();
  const data = JSON.stringify(Json);

  console.log(data);

  return (
    <main>
      <div>hello</div>
    </main>
  );
}
