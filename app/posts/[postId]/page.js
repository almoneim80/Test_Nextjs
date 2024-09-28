import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default function postDetailsPage({ params }) {
  const postId = params.postId;
  const loadingJSX = (
    <div>
      <h1>Loading ...</h1>
    </div>
  );

  return (
    <div className="post">
      <h4 style={{ marginLeft: "25%", marginBottom: "50px" }}>
        -------------------------------------------------------Posts
        Details-------------------------------------------------------
      </h4>

      <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
