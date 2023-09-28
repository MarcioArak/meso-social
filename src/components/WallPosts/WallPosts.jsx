import React from "react";
import "./wallPosts.scss";
import Post from "../Post/Post";
import Profile from "./../../assets/pictures/Profile.jpg";
import Profile2 from "./../../assets/pictures/people.jpg";

function WallPost() {
  // TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Marcio Arakaki",
      userId: 1,
      profilePic: Profile,
      desc: "First Post testing posting ",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic: Profile2,
      desc: "Second Post testing posting ",
      img: "https://images.hdqwalls.com/wallpapers/horizontal-plane-panaromic-sky-nature-ml.jpg",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default WallPost;
