import "./comments.scss";
import Profile from "./../../assets/pictures/Profile.jpg";
import Profile2 from "./../../assets/pictures/people.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  // TEMPORARY
  const comments = [
    {
      id: 1,
      name: "Marcio Arakaki",
      userId: 1,
      profilePic: Profile,
      desc: "First comment testing posting making commnet long to testing for long commnets writing to stuff to write stuff to make this commnet super long",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic: Profile2,
      desc: "Second comment testing posting ",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a commnet..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <Link
              to={`/me-so-social/profile/${comment.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{comment.name}</span>
            </Link>
            <p>{comment.desc}</p>
          </div>
          <span className="time">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
