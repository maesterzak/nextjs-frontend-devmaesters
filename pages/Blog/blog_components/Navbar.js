import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faBars,
  faTimes,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { logout } from "../../../actions/auth";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () =>{
    if (dispatch && dispatch !== null && dispatch!==undefined){
      dispatch(logout())
      
  }
  }
  const authlink = (
    <>
      <div className="nav-toggle-link-link">
        <a href="#" onClick={logoutHandler}>Logout</a>
      </div>
    </>
  );
  const guest = (
    <>
      <div className="nav-toggle-link-link">
        <Link href="/login">Login</Link>
      </div>
      <div className="nav-toggle-link-link">
        <Link href="/register">Register</Link>
      </div>
    </>
  );

  const [Navbar1, setNavbar1] = useState(false);
  const ToggleNav1 = () => {
    setNavbar1(!Navbar1);
    setNavbar2(false);
  };
  const [Navbar2, setNavbar2] = useState(false);
  const ToggleNav2 = () => {
    setNavbar2(!Navbar2);
    setNavbar1(false);
  };

  return (
    <div>
      <nav>
        <div className="d-flex">
          <div onClick={ToggleNav2}>
            <FontAwesomeIcon
              className="togg2"
              icon={Navbar2 ? faTimes : faBars}
            />
          </div>

          <div className="nav-header">
            <span>SimpleLIFE</span>
          </div>
        </div>

        <div className="d-flex">
          <div className="nav-button d-none">
            <FontAwesomeIcon className="nav-icon" icon={faUser} />
            <FontAwesomeIcon className="nav-icon2" icon={faSearch} />
            <button className="author_btn">Become an Author</button>
          </div>
          <div onClick={ToggleNav1}>
            <FontAwesomeIcon
              className="togg1"
              icon={Navbar1 ? faTimes : faBars}
            />
          </div>
        </div>
      </nav>
      <div className={Navbar1 ? "nav-toggle-links1" : "d-none"}>
        <div className="nav-toggle-link-link">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>

        <div className="nav-toggle-link-link">
          <Link href="/Blog">Blog</Link>
        </div>
        <div className="nav-toggle-link-link">
          <Link href="/mini-mall">Mini-Mall </Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        <div className="nav-toggle-link-link">
          <Link href="/">Repository</Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        <div className="nav-toggle-link-link">
          <Link href="/aboutus">About us</Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        <div className="nav-toggle-link-link">
          <Link href="/contactus">Contact us</Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        {isAuthenticated ? authlink : guest}
      </div>
      <div className={Navbar2 ? "nav-toggle-links2" : "d-none"}>
        <div className="nav-toggle-link-link">
          <Link href="#Categories">Categories</Link>
        </div>
        <div className="nav-toggle-link-link">
          <Link href="#Post_for_you">Post for you</Link>
        </div>
        <div className="nav-toggle-link-link">
          <Link href="#Open_threads">Open Threads</Link>
        </div>
        <div className="nav-toggle-link-link">
          <Link href="#Latest_posts">Latest Posts</Link>
        </div>
        <button className="author_btn">Become an author</button>
      </div>
    </div>
  );
};
export default Navbar;
