import React from "react";
import Header from "../../../components/Header";
import posts from "../../../mock/Posts";
import Post from "../../../components/Post";

export default function Home() {
  return (
    <div className="w-full  py-4 px-16 flex flex-col gap-4">
      <Header />
      <div className="flex justify-start flex-wrap gap-2 h-full overflow-scroll scrollbar-hide">
        {posts.map((post) => (
          <Post key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
}
