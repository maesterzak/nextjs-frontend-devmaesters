import { fas, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  
  faBars,
  faTimes,
  
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { logout } from "../../actions/auth";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./navbar.module.css";
import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { ThemeContext } from "../Layout";
// import { Mail } from "./Mail";
// import { Password } from "./Password";



const Navbar = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  const [visible, setVisible] = useState(false);
  const [Regvisible, setRegvisible] = useState(false)
  const handler = () => setVisible(true);
  const Registerhandler = () => setRegvisible(true);
  const closeHandler = () => {
    setVisible(false);
    
  };
  const regcloseHandler = () => {
    setRegvisible(false);
    
  };

  const switchHandler =() =>{
    setRegvisible(!Regvisible)
    setVisible(!visible)
  }

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(logout());
    }
  };

  
  const value = React.useContext(ThemeContext);  
  const {theme, setTheme} = value
  
  // const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    const Storedtheme = JSON.parse(localStorage.getItem('theme')) ?? 'true'
    setTheme(Storedtheme)
  }) 
  
  const themeHandler=()=>{
    setTheme(!theme)
    localStorage.setItem('theme', JSON.stringify(!theme))

    
    
  }

  
  
  const authlink = (
    <>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center ">
        <a href="#" onClick={logoutHandler}>
          Logout
        </a>
      </div>
    </>
  );
  const guest = (
    <div className="d-flex gap-2">
    <Button auto color="warning" onClick={handler}>
        Login
      </Button>
      <Button auto color="warning" onClick={Registerhandler}>
        Register
      </Button>
      {/* <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <button className="btn" >
          <Link href="/login">Login</Link>
        </button>
        <FontAwesomeIcon size="1x" className="faHardHat" icon={faHardHat} />
      </div>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <button className="btn">
          <Link href="/register">Register</Link>
        </button>
        <FontAwesomeIcon size="1x" className="faHardHat" icon={faHardHat} />
      </div> */}
    </div>
  );

  const [searchResult, setSearchResult] = useState([]);
  
  const [searchBoxValue, setsearchBoxValue] = useState("");

  const searchForm =async(e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    const body = JSON.stringify(form_values.search_input)
   
    await fetch('api/blog/search', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'content-type': 'application/json',
      },
      body: body    
    })
    .then(response => response.json())
    .then(data => {setSearchResult(data)
      console.log(searchResult)
    });
    
    
    
  };

  const [navbar, setNavbar] = useState(false);
  const ToggleNavbar = () => {
    setNavbar(!navbar);
  };
  
  

  
  
  return (
    <>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              DM.
            </a>
           
            <FontAwesomeIcon onClick={themeHandler} className={theme ? 'faSun':'faMoon' } size={'1x'} icon={theme  ? faSun:faMoon} />
            
            <button
              onClick={ToggleNavbar}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <FontAwesomeIcon
                size={"2x"}
                color="white"
                icon={navbar ? faTimes : faBars}
              />
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link href={"/"}>
                  <a className={props.loc ==="home" ? "nav-link active":"nav-link"} aria-current="page">
                    Home
                  </a>
                </Link>
                <Link href="/blog">
                  <a className={props.loc ==="blog" ? "nav-link active":"nav-link"}>Blog</a>
                </Link>
                <Link href="/mini-mall">
                  <a className={props.loc ==="mini-mall" ? "nav-link active":"nav-link"}>Mini-Mall</a>
                </Link>
                <Link href="/online-solver">
                  <a className={props.loc ==="online-solver" ? "nav-link active":"nav-link"}>Online-Solver</a>
                </Link>
                <Link href="/portfolio">
                  <a className={props.loc ==="portfolio" ? "nav-link active":"nav-link"}>Portfolio</a>
                </Link>
                <Link href="/about">
                  <a className={props.loc ==="about" ? "nav-link active":"nav-link"}>About</a>
                </Link>
              </div>
              <div >
              {isAuthenticated ? 
              
                authlink 
                :
              
                guest 
              
            }
            </div>
            </div>
            
            {/* <form method="post" className="d-flex" onSubmit={searchForm}>
              <input
                id="searchform"
                name="search_input"
                className={`form-control me-2 body-color ${styles.input}`}
                defaultValue={setsearchBoxValue}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg" onClick={()=>setSearchResultOverlay(true)} className="btn button" type="submit">
                Search
              </button>
            </form> */}
            
          </div>
          
            



        </nav>
      </div>

      <div>
      

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Login to 
            <Text className="text-warning mx-2" b size={18}>
              DEVMAESTERS
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            // contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          <Row justify="space-between">
            
              <Text size={14}>New member?</Text>
            
            <Text size={14} onClick={switchHandler} className="active">SignUp</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="button btn" auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>

      {/* register */}
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={Regvisible}
        onClose={regcloseHandler}
      >
        <Modal.Header>
          <Text id="reg-modal-title" size={18}>
            SignUP to 
            <Text className="text-warning mx-2" b size={18}>
              DEVMAESTERS
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            // contentLeft={<Password fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Re-type password"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Row justify="space-between">
            
              <Text size={14}>Already a member?</Text>
            
            <Text size={14} onClick={switchHandler} className="active">Login</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="button btn" auto onClick={regcloseHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};
export default Navbar;
