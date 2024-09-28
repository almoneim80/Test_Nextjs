import Link from "next/link";
import React from "react";

export default async function postDetails({ postId }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 90,
      },
    }
  );
  const post = await response.json();

  return (
    <div>
      <div>
        <h3>
          Post Number : <span>{postId}</span>
        </h3>
        <hr style={{ marginBottom: "30px" }} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Post Title :</h3>
        <span>{post.title}</span>
      </div>

      <div>
        <h3>Post body :</h3>
        <span>{post.body}</span>
      </div>

      <Link href={"/posts"}>
        <button
          style={{
            width: "5rem",
            height: "2.5rem",
            marginTop: "20px",
            backgroundColor: "salmon",
          }}
        >
          Back
        </button>
      </Link>
    </div>
  );
}
