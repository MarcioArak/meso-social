import "./comments.scss";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");

  const { isPending, data } = useQuery({
    queryKey: ["comments" + postId],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => {
        return res.data;
      }),
  });

  const queryClient = useQueryClient();

  // Mutations
  // Copied and updated from the website the tanstack mutation
  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments" + postId] });
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img
          src={process.env.PUBLIC_URL + "/upload/" + currentUser.profilePic}
          alt=""
        />
        <input
          type="text"
          placeholder="Write a comment..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isPending
        ? "loading"
        : data.map((comment) => (
            <div className="comment" key={comment.id}>
              <img
                src={process.env.PUBLIC_URL + "/upload/" + comment.profilePic}
                alt=""
              />
              <div className="info">
                <a
                  href={`/meso-social/profile/${comment.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>{comment.name}</span>
                </a>
                <p>{comment.desc}</p>
              </div>
              <span className="time">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
