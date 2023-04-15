import React from "react";
import "../styles/Post.css";
import { useNavigate } from "react-router-dom";

function Post({ url, author, description, id, location }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}?id=${id}`);
  };
  return (
    <div className="post" onClick={handleClick}>
      <div className="img">
        <img src={url} alt="random image" />
      </div>
      <h3>{author}</h3>
      <p title={description}>
        {description.length > 25
          ? description.slice(0, 30).concat("...")
          : description}
      </p>
    </div>
  );
}

export default Post;
