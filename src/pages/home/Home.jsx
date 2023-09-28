import WallPosts from "../../components/WallPosts/WallPosts";
import Stories from "../../components/stories/Stories";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <WallPosts />
    </div>
  );
};

export default Home;
