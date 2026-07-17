import React from "react";
import PostCard from "./PostCard";

function LatestPost({ articles }) {
  console.log(articles);

  return (
    <div className="align-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles &&
          articles.slice(0, 3).map((article, i) => {
            return <PostCard key={i} article={article} />;
          })}
      </div>
    </div>
  );
}

export default LatestPost;
