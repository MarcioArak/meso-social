import "./profile.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import WallPost from "../../components/WallPosts/WallPosts";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.hdqwalls.com/wallpapers/horizontal-plane-panaromic-sky-nature-ml.jpg"
          alt=""
          className="cover"
        />
        <img src={currentUser.profilePic} alt="" className="profilePic" />
      </div>

      <div className="profileContainer">
        <div className="profileInfo">
          <div className="left">
            <a href="http://facebook.com" style={{ color: "inherit" }}>
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="http://twitter.com" style={{ color: "inherit" }}>
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://instagram.com" style={{ color: "inherit" }}>
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com" style={{ color: "inherit" }}>
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com" style={{ color: "inherit" }}>
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <LocationOnIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>marcio.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <MailOutlineIcon />
            <MoreVertIcon />
          </div>
        </div>
        <WallPost />
      </div>
    </div>
  );
};

export default Profile;
