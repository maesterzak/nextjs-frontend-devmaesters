import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faBars,
  faTimes,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { logout } from "../../actions/auth";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./navbar.module.css";
import useSWR from "swr";


const Navbar = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(logout());
    }
  };
  const authlink = (
    <>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <a href="#" onClick={logoutHandler}>
          Logout
        </a>
      </div>
    </>
  );
  const guest = (
    <>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <button className="btn" disabled>
          <Link href="/login">Login</Link>
        </button>
        <FontAwesomeIcon size="1x" className="faHardHat" icon={faHardHat} />
      </div>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <button disabled className="btn">
          <Link href="/register">Register</Link>
        </button>
        <FontAwesomeIcon size="1x" className="faHardHat" icon={faHardHat} />
      </div>
    </>
  );

  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const {data:data, error:error} = useSWR('/api/blog/postlist', fetcher,{revalidateOnFocus:false})
  
  const posts = data ? data.data: []

  const {data:data1, error:error1} = useSWR('/api/blog/threadlist', fetcher,{revalidateOnFocus:false})
  
  const threads = data1 ? data1.data: []

  const [searchResult, setSearchResult] = useState([]);
  const [searchResultOverlay, setSearchResultOverlay] = useState(false);
  const ToggleResultOverlay = () => {
    setSearchResultOverlay(false);
    setsearchBoxValue("");
    // document.getElementById("searchform").reset();
  };
  const [searchBoxValue, setsearchBoxValue] = useState("");

  const searchForm = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    var m = form_values.search_input;
    var x = form_values.search_input;
    var x = x.toLowerCase();
    var x = x.split(" ");

    var o = x.length;
    var searchResult = [];

    var y = posts.length;

    //searching through posts
    for (let p = 0; p < y; p++) {
      var a = posts[p].title;
      var a = a.toLowerCase();
      var searchR = [];
      for (let i = 0; i < o; i++) {
        if (a.includes(x[i])) {
          searchR.push(posts[p]);
        }
      }
      var j = searchR.length;
      var k = (j / o) * 100;
      // console.log(`${a}`, k)
      if (k > 45) {
        searchR[0].match = k;

        var searchResult = searchResult.concat(searchR[0]);
      }
    }

    //searching through threads
    var t = threads.length;
    for (let p = 0; p < t; p++) {
      var a = threads[p].title;
      var a = a.toLowerCase();
      var searchR = [];
      for (let i = 0; i < o; i++) {
        if (a.includes(x[i])) {
          searchR.push(threads[p]);
        }
      }
      var j = searchR.length;
      var k = (j / o) * 100;
      // console.log(`${a}`, k)
      if (k > 45) {
        searchR[0].match = k;

        var searchResult = searchResult.concat(searchR[0]);
      }
    }

    var searchResult = searchResult.sort(function (a, b) {
      return b.match - a.match;
    });

    setSearchResult(searchResult);
    setSearchResultOverlay(true);
    setsearchBoxValue(m);
  };

  const [navbar, setNavbar] = useState(false);
  const ToggleNavbar = () => {
    setNavbar(!navbar);
  };


  
  
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              DM.
            </a>
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
                  <a className="nav-link" aria-current="page">
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
            </div>

            <form className="d-flex" onSubmit={searchForm}>
              <input
                id="searchform"
                name="search_input"
                className={`form-control me-2 ${styles.input}`}
                defaultValue={setsearchBoxValue}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn button" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      <div>
        {searchResultOverlay ? (
          <div className={`${styles.index_search_modal_overlay}`}>
            <div className="row d-flex justify-content-center align-items-center w-100 h-100 g-0">
              <div
                className={`col-10 col-md-8 d-flex flex-wrap justify-content-center p-1  ${styles.index_search_modal_box}`}
              >
                <div className="w-100 d-flex justify-content-end">
                  <div onClick={ToggleResultOverlay} className=" btn">
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      size={"2x"}
                      icon={faTimes}
                    />
                  </div>
                </div>
                <form className="w-75" onSubmit={searchForm}>
                  <input
                    type="text"
                    name="search_input"

                    defaultValue={searchBoxValue}
                    className={`form-control ${styles.input}`}
                  />
                  <div className="d-flex justify-content-center mt-1">
                    <button className={`btn ${styles.search_btn}`}>
                      search
                    </button>
                  </div>
                </form>
                <div className="mt-2 w-100 d-flex flex-wrap justify-content-center  text-light">
                  <h4 className="w-100 text-center">
                    Search results found: {searchResult.length}
                  </h4>
                  <span>Searching Posts and Threads</span>
                </div>
                <div
                  className={`mt-4 w-100 d-flex flex-wrap justify-content-center ${styles.search_box_result}`}
                >
                  {searchResult.map(function (item, id) {
                    return (
                      <div
                        key={id}
                        className={`row ${styles.search_item_container}`}
                      >
                        {item.category ? (
                          <>
                            <div
                              className={`col-3 col-lg-1 d-flex flex-wrap align-items-center ${styles.index_item_info}`}
                            >
                              <div className="w-100 d-flex justify-content-start">
                                <span>Post</span>
                              </div>
                              <br />
                              <div className={`${styles.index_item_info_1}`}>
                                <span>0{id}</span>
                              </div>
                            </div>
                            <div
                              className={`col-9 col-lg-11 h-100 d-flex flex-wrap align-items-between ${styles.index_item_detail}`}
                            >
                              <div className={` ${styles.index_item_detail_1}`}>
                                <span className="card-title">{item.title}</span>
                              </div>

                              <div
                                className={`w-100 d-flex justify-content-between align-items-center ${styles.index_item_detail_2}`}
                              >
                                <span className="card-body">
                                  {item.updated_date}
                                </span>
                                <Link href={"/blog/" + item.id} passHref>
                                  <button
                                    className={`btn button btn-sm`}
                                  >
                                    Read
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className={`col-3 col-lg-1 d-flex flex-wrap align-items-center ${styles.index_item_info}`}
                            >
                              <div className="w-100 d-flex justify-content-start">
                                <span>Thread</span>
                              </div>
                              <br />
                              <div className={`${styles.index_item_info_1}`}>
                                <span>0{id}</span>
                              </div>
                            </div>
                            <div
                              className={`col-9 col-lg-11 h-100 d-flex flex-wrap align-items-between ${styles.index_item_detail}`}
                            >
                              <div className={` ${styles.index_item_detail_1}`}>
                                <span className="card-title">{item.title}</span>
                              </div>

                              <div
                                className={`w-100 d-flex justify-content-between align-items-center ${styles.index_item_detail_2}`}
                              >
                                <span className="card-body">
                                  Messages: {item.thread_messages.length}
                                </span>
                                <Link href={"/blog/thread/" + item.id} passHref>
                                  <button
                                    className={`btn button btn-sm`}
                                  >
                                    open
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Navbar;
