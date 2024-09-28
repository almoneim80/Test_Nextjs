import React from "react";
import Link from "next/link";

export default function Articles() {
  return (
    <div>
      <h1>Articles Page</h1>
      <Link href="/posts">
        <button>Take mt to the posts page</button>
      </Link>
    </div>
  );
}
