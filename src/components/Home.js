import React, { useContext } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import "../styles/Home.css";

function Home() {
  const { posts } = useContext(AppContext);
  return (
    <div className="home">
      <h1>All posts</h1>
      {posts.length === 0 ? (
        <p className="message">
          There is no posts. Click "Add post" button to add post.
        </p>
      ) : (
        <div className="posts-grid">
          {posts.map(({ url, name, description, location, id }, i) => {
            return (
              <Post
                key={i}
                url={url}
                author={name}
                description={description}
                location={location}
                id={id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
