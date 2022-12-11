import logo from "../assets/Spotify_Logo_RGB_White.png";
import heart from "../assets/purple-heart.png";
import { BsSearch } from "react-icons/bs";
import { BiHome } from "react-icons/bi";


const HomeSidebar = () => {
  return (
    <div>
      <div id="logo" className="flex-align-center mb-4">
        <img className="img-fluid" src={logo} alt="logo_in_white" />
      </div>
      <div id="home" className="sidebar-align-left grow d-none d-md-block ml-0">
        <BiHome className="mr-3 text-light" />
        <span className="sidebar-text text-light">Home</span>
      </div>
      <a
        className="search-anchor"
        data-toggle="collapse"
        href="#collapseExample"
      >
        <div id="search" className="sidebar-align-left">
          <BsSearch className="mr-3 text-light" />
          <span className="sidebar-text text-light">Search</span>
        </div>
      </a>

    
     
        <div id="likedSongs" className="sidebar-align-left grow d-none d-md-block ml-0">
          <img className="img-fluid img-small mr-3" src={heart} alt="white heart on purple background" />
          <span className="sidebar-text text-light">Liked Songs</span>
        </div>
      

     

      
    </div>
  );
};
export default HomeSidebar;
