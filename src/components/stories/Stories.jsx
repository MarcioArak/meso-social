import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // TEMPORARY DATA
  const stories = [
    {
      id: 1,
      name: "Marcio Arakaki",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 2,
      name: "Marcio Arakaki",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 5,
      name: "John Doe",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 6,
      name: "John Doe",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 7,
      name: "John Doe",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 8,
      name: "John Doe",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
    {
      id: 9,
      name: "John Doe",
      img: "https://legacy.reactjs.org/logo-og.png",
    },
  ];

  return (
    <div className="stories">
      <div className="userStory">
        <img src={currentUser.profilePic} />
        <span>Add Story</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
