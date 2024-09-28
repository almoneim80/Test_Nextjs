import Link from "next/link";
import Todo from "../components/todo";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 90,
    },
  });
  const posts = await response.json();
  const postJSX = posts.map((post) => {
    return (
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/posts/${post.id}`}>
          <button
            style={{
              width: "5rem",
              height: "2.5rem",
              marginTop: "20px",
              backgroundColor: "salmon",
            }}
          >
            read post
          </button>
        </Link>
      </div>
    );
  });
  console.log(posts);

  return (
    <div>
      <h1>Posts Page</h1>

      <div>{postJSX}</div>
    </div>
  );
}
