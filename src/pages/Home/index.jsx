import React from "react";
import Header from "../../components/Header";
import posts from "../../mock/Posts";
import Post from "../../components/Post";

export default function Home() {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <Header />
      <div className="grid grid-cols-2 gap-4 h-full overflow-scroll scrollbar-hide">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}
