import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Link
      to={post?.type === "offer" && `/cl/produto/${post?.productId}`}
      className="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg relative w-[300px] h-fit"
    >
      <img
        className="w-full h-[150px] object-cover rounded-lg"
        src={post.img}
        alt={post?.title}
      />
      {post.type === "offer" && (
        <div className="p-2 rounded-full rotate-45 top-4 right-0 absolute text-white font-semibold bg-yellow-500">
          33% OFF
        </div>
      )}
      <h1 className="font-semibold text-2xl">{post.title}</h1>
      {post.type === "common" ? (
        <p>{post.body}</p>
      ) : (
        <>
          <div className="flex justify-between">
            <p className="text-gray-500 line-through text-xl">
              {post.oldPrice}
            </p>
            <p className="text-red-500 font-semibold text-2xl">{post.price}</p>
          </div>
          <button className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg">
            Adicionar à Sacola
          </button>
        </>
      )}
    </Link>
  );
}
