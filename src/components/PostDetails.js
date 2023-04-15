import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import "../styles/PostDetails.css";

function PostDetails() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { posts } = useContext(AppContext);

  useEffect(() => {
    setData(posts.find((post) => post.id === +id));
  }, [id]);

  return (
    <div>
      {data ? (
        <div className="postDetails">
          <div className="left-side">
            <img className="image" src={data.url} alt="random image" />
          </div>
          <div className="right-side">
            <h1>Author: {data.name}</h1>
            <p>About: </p>
            <p>{data.description}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PostDetails;
