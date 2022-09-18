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
            <svg xmlns="http://www.w3.org/2000/svg" width="110.161" height="30.977" viewBox="0 0 155.161 77.977">
  <g id="Group_20" data-name="Group 20" transform="translate(0)">
    <path id="Path_1" data-name="Path 1" d="M11.389,0H37.932a11.385,11.385,0,0,1,9.849,5.685l1.013,1.76.009.009v.009c0,.009.01.019.019.037l14.9,25.806a11.4,11.4,0,0,1,0,11.378l-15.938,27.6a11.31,11.31,0,0,1-4.763,4.477.275.275,0,0,0-.056.037.061.061,0,0,0-.027.019h-.01a.028.028,0,0,1-.018.009,11.336,11.336,0,0,1-4.975,1.151H11.773a8.808,8.808,0,0,1-1.474-.11A43.9,43.9,0,0,0,31.111,55.221h.24L38.122,43.5a9.045,9.045,0,0,0,0-9.038L31.351,22.745h-.065A43.929,43.929,0,0,0,10.965.01C11.112,0,11.241,0,11.389,0Z" fill="#fff"/>
    <path id="Path_2" data-name="Path 2" d="M11.388,55.224H31.113A43.9,43.9,0,0,1,10.3,77.87a11.442,11.442,0,0,1-1.392-.249A11.851,11.851,0,0,1,5.62,76.276,11.265,11.265,0,0,1,.028,67.367a11.386,11.386,0,0,1,11.36-12.143Z" fill="#fff"/>
    <path id="Path_3" data-name="Path 3" d="M10.964.01A43.93,43.93,0,0,1,31.288,22.748H11.772A11.653,11.653,0,0,1,.025,12.125,11.366,11.366,0,0,1,1.272,6.14a.009.009,0,0,1,0-.006l.006,0A.071.071,0,0,0,1.29,6.1,11.416,11.416,0,0,1,9.112.235,10.994,10.994,0,0,1,10.964.01Z" fill="#fff"/>
    <g id="Group_1" data-name="Group 1" opacity="0.08">
      <path id="Path_4" data-name="Path 4" d="M22.072,55.224H31.11A43.9,43.9,0,0,1,10.3,77.87a11.442,11.442,0,0,1-1.392-.249A117.616,117.616,0,0,0,22.072,55.224Z" fill="#fff"/>
    </g>
    <g id="Group_2" data-name="Group 2" opacity="0.08">
      <path id="Path_5" data-name="Path 5" d="M10.964.01A43.929,43.929,0,0,1,31.288,22.748H22.112A120.739,120.739,0,0,0,9.112.231,10.993,10.993,0,0,1,10.964.01Z" fill="#fff"/>
    </g>
    <g id="Group_3" data-name="Group 3" opacity="0.4">
      <path id="Path_6" data-name="Path 6" d="M37.894,2.764h.037a8.646,8.646,0,0,1,7.453,4.3L61.323,34.685a8.627,8.627,0,0,1,0,8.614L48.931,64.769l-.046.074-3.5,6.062a8.649,8.649,0,0,1-6.762,4.284A61.524,61.524,0,0,0,50.045,40.058,61.524,61.524,0,0,0,39.286,4.718l-.064-.093-.028-.046C38.772,3.962,38.336,3.363,37.894,2.764Z" fill="#fff"/>
    </g>
    <g id="Group_4" data-name="Group 4" opacity="0.6">
      <path id="Path_7" data-name="Path 7" d="M42.925,76.82c.01-.01.019-.01.037-.019a.061.061,0,0,0-.027.019Z" fill="#fff"/>
    </g>
    <g id="Group_5" data-name="Group 5" opacity="0.25">
      <path id="Path_8" data-name="Path 8" d="M48.821,7.5l14.9,25.806a11.4,11.4,0,0,1,0,11.378l-15.938,27.6a11.31,11.31,0,0,1-4.763,4.477c.129-.073.35-.212.654-.414a12.485,12.485,0,0,0,1.907-1.65,12.08,12.08,0,0,0,2.146-3.206c.7-1.363,1.493-2.9,2.387-4.56,1.75-3.345,3.842-7.214,6.126-11.332,1.152-2.055,2.313-4.192,3.547-6.339.618-1.078,1.235-2.156,1.852-3.243l.931-1.631a11.366,11.366,0,0,0,.764-1.547,10.194,10.194,0,0,0,.415-6.615,12.415,12.415,0,0,0-1.373-3.1c-.589-1.06-1.17-2.1-1.741-3.133-2.285-4.127-4.376-8-6.127-11.332C51.189,12.4,49.072,8.025,48.821,7.5Z" fill="#fff"/>
    </g>
    <g id="Group_6" data-name="Group 6" opacity="0.25">
      <path id="Path_9" data-name="Path 9" d="M10.965.01l1.751.856,1.722.94,1.668,1.023,1.621,1.1,1.567,1.189,1.52,1.253L22.27,7.707l1.391,1.4,1.326,1.465L26.25,12.1l1.188,1.584,1.115,1.64,1.041,1.695.967,1.742.876,1.787L32,21.85l.23.387c1.557,2.616,3.132,5.224,4.662,7.859l2.3,3.971a10.18,10.18,0,0,1,1.29,4.919,10.294,10.294,0,0,1-.332,2.543,11.047,11.047,0,0,1-.4,1.216,10.269,10.269,0,0,1-.544,1.143l-2.312,3.98c-1.53,2.635-3.1,5.242-4.653,7.859l-.3.516h-.166l-.534,1.2-.9,1.788-.995,1.741-1.069,1.695-1.151,1.64L25.909,65.9l-1.29,1.52-1.364,1.456-1.419,1.391L20.344,71.6,18.787,72.84l-1.594,1.18-1.658,1.087-1.7,1.013-1.751.922-1.787.829,1.686-1.023,1.621-1.087,1.585-1.152L16.723,73.4,18.2,72.131,19.616,70.8l1.355-1.391,1.3-1.428L23.5,66.493l1.161-1.548,1.106-1.576,1.022-1.63.958-1.668.885-1.714.811-1.741.571-1.391h1.336l6.771-11.719a9.046,9.046,0,0,0,0-9.038L31.355,22.749H30.2l-.562-1.4-.783-1.732-.848-1.7-.93-1.668-1-1.621L25.006,13.04l-1.133-1.551L22.673,10,21.4,8.559,20.073,7.168,18.691,5.823l-1.447-1.28L15.752,3.317,14.2,2.156l-1.6-1.1Z" fill="#fff"/>
    </g>
    <g id="Group_7" data-name="Group 7" opacity="0.4">
      <path id="Path_10" data-name="Path 10" d="M39.285,4.718l1.281,1.768,1.29,1.972q1.243,2.017,2.34,4.1,1.092,2.1,1.99,4.293c.608,1.456,1.151,2.939,1.64,4.441A56.469,56.469,0,0,1,50.037,30.5c.249,1.566.424,3.142.543,4.727.129,1.612.176,3.141.166,4.744,0,1.585-.073,3.17-.193,4.754l-.24,2.368-.331,2.349-.433,2.341-.516,2.321L48.425,56.4l-.71,2.276-.792,2.239-.885,2.2-.967,2.174-1.05,2.128L42.872,69.5l-1.225,2.036-1.3,1.981-.793,1.115a8.575,8.575,0,0,0,5.289-3.335c.368-.525.681-1.069,1.032-1.622l1-1.64,2.008-3.187-3.5,6.062a8.649,8.649,0,0,1-6.762,4.284A61.524,61.524,0,0,0,50.042,40.058,61.524,61.524,0,0,0,39.284,4.718Z" fill="#fff"/>
    </g>
    <g id="Group_8" data-name="Group 8" opacity="0.5">
      <path id="Path_11" data-name="Path 11" d="M11.388,55.224H20.2s-2.4.313-6.007.525c-.894.065-1.88.12-2.9.166a12.29,12.29,0,0,0-2.967.58,11.107,11.107,0,0,0-5.224,3.723,11.408,11.408,0,0,0-1.6,2.865,12.672,12.672,0,0,0-.682,3.086c0,.286-.009.562-.009.839l-.009.368.028.378a9.319,9.319,0,0,0,.193,1.465,11.344,11.344,0,0,0,.894,2.6A12.275,12.275,0,0,0,4.4,75.209c.378.36.682.636.9.811.166.129.276.221.322.258A11.265,11.265,0,0,1,.03,67.369,11.386,11.386,0,0,1,11.388,55.224Z" fill="#fff"/>
    </g>
    <g id="Group_9" data-name="Group 9" opacity="0.5">
      <path id="Path_12" data-name="Path 12" d="M1.272,6.14c-.037.111-.166.516-.323,1.161A13.4,13.4,0,0,0,.572,10.44,11.719,11.719,0,0,0,.765,12.5a8.08,8.08,0,0,0,.249,1.087c.055.175.1.359.156.543s.139.369.2.553a12.948,12.948,0,0,0,1.106,2.128A11.416,11.416,0,0,0,4.07,18.7,11.13,11.13,0,0,0,6,20.243,12.605,12.605,0,0,0,8.169,21.33a9.61,9.61,0,0,0,1.1.368,8,8,0,0,0,1.069.258,9.629,9.629,0,0,0,1.087.166l.267.028c.037.009.11.018.11.018l.129.009c.175.019.351.028.516.047,2.709.221,4.506.525,4.506.525H11.772A11.653,11.653,0,0,1,.025,12.126,11.366,11.366,0,0,1,1.272,6.14Z" fill="#fff"/>
    </g>
    <path id="Path_13" data-name="Path 13" d="M112.99,17.971V39.4L91.11,70.581l-.01.01-3.41,4.86V54.011Z" fill="#fff"/>
    <path id="Path_14" data-name="Path 14" d="M154.7,17.641v59.42H129.4V53.681Z" fill="#fff"/>
    <path id="Path_15" data-name="Path 15" d="M113.68,17l-3.29,2.88-.01.01a.46.46,0,0,0-.09.08h-.01L47.07,75.361h-.009c-.03.029-.05.049-.06.049v.011a.3.3,0,0,0-.04.03L45,77.171,50.041,70c.02-.04.05-.07.07-.11L87.241,17Z" fill="#fff"/>
    <path id="Path_16" data-name="Path 16" d="M113.68,17l-.69.97-25.3,36.04L71.44,77.171H45l2.06-1.81h.01l63.21-55.39,2.71-2.37Z" fill="#fff"/>
    <path id="Path_17" data-name="Path 17" d="M155.161,17l-.46.4-4.08,3.581-.01.01-.04.029c-.01.021-.02.021-.03.031s-.01.01-.02.01v.01l-.08.06a.7.7,0,0,0-.1.08L129.4,39.562l-16.41,14.38L89.851,74.2l-.08.08a.691.691,0,0,1-.09.08l-1.99,1.74-1.21,1.07,1.21-1.72,3.41-4.86.01-.01L112.991,39.4,128.721,17Z" fill="#fff"/>
    <path id="Path_18" data-name="Path 18" d="M155.161,17l-.46.64-25.3,36.04-16.409,23.38-.07.11H86.48l1.21-1.07,2.16-1.9,23.14-20.26L129.4,39.561l20.94-18.35.1-.08.01-.01.07-.05v-.01c.01,0,.01-.01.02-.01L154.7,17.4Z" fill="#fff"/>
    <g id="Group_10" data-name="Group 10" opacity="0.24">
      <path id="Path_19" data-name="Path 19" d="M112.99,17.971v19.05l-25.3,19.06v-2.07Z" fill="#fff"/>
    </g>
    <g id="Group_11" data-name="Group 11" opacity="0.24">
      <path id="Path_20" data-name="Path 20" d="M154.7,17.641v18.83l-.15.11L129.4,55.531v-1.85Z" fill="#fff"/>
    </g>
    <g id="Group_12" data-name="Group 12">
      <path id="Path_21" data-name="Path 21" d="M110.28,19.971,47.07,75.361c-.01.01-.01,0-.01,0,.28-.28,1.16-1.12,2.52-2.41,1.69-1.57,4.07-3.86,6.99-6.52s6.31-5.8,9.99-9.09c3.68-3.311,7.63-6.79,11.59-10.28,1.98-1.73,3.97-3.46,5.93-5.161s3.9-3.359,5.77-4.969c3.75-3.22,7.31-6.151,10.33-8.71s5.6-4.6,7.38-6.071Z" fill="#fff"/>
    </g>
    <g id="Group_13" data-name="Group 13">
      <path id="Path_22" data-name="Path 22" d="M147.9,23.15c1.19-.95,2.03-1.62,2.44-1.939L129.4,39.561l-16.41,14.38L89.85,74.2c.33-.32,1.15-1.1,2.35-2.251,1.62-1.509,3.9-3.709,6.71-6.269s6.05-5.57,9.59-8.74,7.33-6.52,11.12-9.87c1.91-1.671,3.82-3.33,5.7-4.96s3.75-3.23,5.55-4.77c3.6-3.09,7.03-5.91,9.93-8.36S146.19,24.561,147.9,23.15Z" fill="#fff"/>
    </g>
    <g id="Group_14" data-name="Group 14" opacity="0.4">
      <path id="Path_23" data-name="Path 23" d="M150.54,21.051c0,.01-.01.01-.02.02l-.08.06a.545.545,0,0,1,.08-.07C150.53,21.061,150.53,21.051,150.54,21.051Z" fill="#fff"/>
    </g>
    <g id="Group_15" data-name="Group 15" opacity="0.25">
      <path id="Path_24" data-name="Path 24" d="M113.68,17c-.23.36-.46.71-.69,1.06-1.44,2.219-2.9,4.42-4.35,6.63-1.68,2.56-3.4,5.1-5.12,7.64q-5.13,7.618-10.35,15.18l-5.25,7.55-.23.33v-1.38L71.44,77.171H45c4.4-.19,8.81-.271,13.22-.41l12.87-.22c1.66-2.45,3.35-4.881,5.02-7.32l5.24-7.54,5.28-7.531,5.31-7.5q5.325-7.485,10.77-14.9c1.8-2.471,3.6-4.95,5.44-7.4S111.81,19.434,113.68,17Z" fill="#fff"/>
    </g>
    <g id="Group_16" data-name="Group 16" opacity="0.25">
      <path id="Path_25" data-name="Path 25" d="M155.161,17c-.15.24-.3.48-.46.71-1.5,2.34-3.05,4.66-4.58,6.98-1.67,2.56-3.4,5.1-5.11,7.64q-5.129,7.618-10.36,15.18l-5.25,7.55v-1.38l-16.409,23.38-.07.11H86.48c4.41-.19,8.81-.271,13.22-.41l12.88-.22c1.65-2.45,3.34-4.881,5.01-7.32l5.25-7.54,5.27-7.531,5.311-7.5q5.325-7.485,10.769-14.9c1.8-2.471,3.6-4.95,5.45-7.4C151.47,21.891,153.29,19.434,155.161,17Z" fill="#fff"/>
    </g>
    <g id="Group_17" data-name="Group 17" opacity="0.25">
      <path id="Path_26" data-name="Path 26" d="M154.7,33.871v43.19H129.4c2.11-.13,4.22-.21,6.33-.3s4.21-.15,6.32-.22c3.97-.11,7.93-.17,11.9-.22-.03-3.351-.05-6.7-.04-10.06.01-3.6.03-7.2.09-10.8s.12-7.191.24-10.79c.04-1.8.12-3.6.2-5.4.03-.9.07-1.789.11-2.689S154.64,34.77,154.7,33.871Z" fill="#fff"/>
    </g>
    <g id="Group_18" data-name="Group 18">
      <path id="Path_27" data-name="Path 27" d="M147.361,17c-3.11.159-6.22.23-9.32.35-3.01.1-6.01.14-9.01.21-1.47,2.19-2.93,4.38-4.43,6.54l-4.65,6.74-4.69,6.71-4.72,6.69-4.78,6.65-4.83,6.6c-1.62,2.2-3.22,4.409-4.87,6.58s-3.27,4.36-4.95,6.51L112.991,39.4,128.721,17Z" fill="#fff"/>
    </g>
    <g id="Group_19" data-name="Group 19">
      <path id="Path_28" data-name="Path 28" d="M109.361,17c-3.69.18-7.38.26-11.06.4l-10.72.221c-1.45,2.149-2.93,4.279-4.39,6.43L78.581,30.7l-4.65,6.631-4.68,6.6-4.72,6.57-4.78,6.529c-1.6,2.181-3.18,4.361-4.82,6.511-1.62,2.159-3.24,4.32-4.89,6.46.02-.04.05-.07.07-.11L87.241,17Z" fill="#fff"/>
    </g>
  </g>
</svg>


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
                size={"1x"}
                color="white"
                icon={navbar ? faTimes : faBars}
              />
            </button>
            
            <div className="collapse navbar-collapse navbarBackground" id="navbarNavAltMarkup">
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
