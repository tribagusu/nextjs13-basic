export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("cannot fetch the data from web");
  return res.json();
}
