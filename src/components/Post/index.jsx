import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Link
      to={post?.type === "offer" && `/cl/produto/${post?.productId}`}
      className="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg relative"
    >
      <img className="rounded-lg" src={post.img} alt={post?.title} />
      {post.type === "offer" && (
        <div className="p-2 rounded-full rotate-45 top-4 right-0 absolute text-white font-semibold bg-yellow-500">
          33% OFF
        </div>
      )}
      <h1 className="font-semibold text-xl">{post.title}</h1>
      {post.type === "common" ? (
        <p>{post.body}</p>
      ) : (
        <div className="flex justify-between">
          <p className="text-gray-500 line-through">{post.oldPrice}</p>
          <p className="text-red-500 font-semibold text-lg">{post.price}</p>
        </div>
      )}
      <button className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg">
        Adicionar à Sacola
      </button>
    </Link>
  );
}
