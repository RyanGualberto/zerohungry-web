import React from "react";

export default function Post({ post }) {
  return (
    <div className="bg-red-100 p-4 rounded-lg ">
      <img src={post.img} alt={post?.title} />
      <h1>{post.title}</h1>
      {post.type === "common" ? (
        <p>{post.body}</p>
      ) : (
        <>
          <h1>{post.oldPrice}</h1>
          <p>{post.price}</p>
        </>
      )}
    </div>
  );
}
