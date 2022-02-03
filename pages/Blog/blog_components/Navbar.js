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

const Navbar = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () =>{
    if (dispatch && dispatch !== null && dispatch!==undefined){
      dispatch(logout())
      
  }
  }
  const authlink = (
    <>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <a href="#" onClick={logoutHandler}>Logout</a>
      </div>
    </>
  );
  const guest = (
    <>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <Link href="/login">Login</Link>
      </div>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <Link href="/register">Register</Link>
      </div>
    </>
  );

  const [Navbar1, setNavbar1] = useState(false);
  const ToggleNav1 = () => {
    setNavbar1(!Navbar1);
    
  };
  

  return (
    <div>
      <nav className={`position-sticky`} style={{"backgroundColor":`${props.background}`}}>
        <div className="row w-100">
          <div className="col-8 col-md-2 d-flex align-items-center">
          
          

          <div className="nav-header" style={{"color":`${props.header_color}`}}>
            <span>devMAESTERS</span>
          </div>
        
          </div>
          <div className="col-6 col-md-7 d-none d-md-block ">
            <div className="d-flex justify-content-between align-items-center h-100">
            <div><Link href={'/'}>Home</Link></div>
            <div><Link href={'/Blog'}>Blog</Link></div>
            <div><Link href={'/'}>Portfolio</Link></div>
            <div><Link href={'/mini-mall'}>Mini-Mall</Link></div>
            <div><Link href={'/aboutus'}>About</Link></div>
            <div><Link href={'/contactus'}>Contact</Link></div>
            </div>
            
            
            
          </div>
          <div className="col-4 col-md-3 ">
          <div className="d-flex ">
          <div className="d-flex w-100 align-items-center justify-content-around">
            <FontAwesomeIcon style={{"height":"1em","color":`${props.icon}`}} icon={faUser} />
            
            <button className="btn btn-outline-primary d-none d-md-block">Become an Author</button>
          </div>
          <div className="d-block d-sm-none" onClick={ToggleNav1}>
            <FontAwesomeIcon
              className="togg1"
              style={{"font-size":"2em","color":`${props.icon}`}}
              icon={Navbar1 ? faTimes : faBars}
            />
          </div>
        </div>
          </div>

        </div>


        

        
      </nav>
      <div className={Navbar1 ? "nav-toggle-links1 d-flex  justify-content-center flex-wrap vh-80" : "d-none"}>
        <div className="nav-toggle-link-link d-flex align-items-center  justify-content-center">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>

        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
          <Link href="/Blog">Blog</Link>
        </div>
        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center ">
          <Link href="/mini-mall">Mini-Mall </Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
          <Link href="/">Repository</Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
          <Link href="/aboutus">About us</Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
          <Link href="/contactus">Contact us</Link>
          <FontAwesomeIcon className="faHardHat" icon={faHardHat} />
        </div>
        {isAuthenticated ? authlink : guest}
        <div className="d-flex justify-content-center">
        <button className="btn btn-outline-light d-block d-sm-none link-btn">Become an Author</button>
        </div>
      </div>
      
    </div>
  );
};
export default Navbar;
