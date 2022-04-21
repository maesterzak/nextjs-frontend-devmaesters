import Head from "next/head";

import Footer from "./blog_components/Footer";
import { useEffect, useState } from "react";
import styles from "./blog_home.module.css";
import Navbar from "./blog_components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faComment,
  faPlusCircle,
  faTimes, faAngleDown, faEye
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { API_URL, NEXT_MODE } from "../../config";
import dompurify from "isomorphic-dompurify";
import useSWRInfinite from "swr/infinite";

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/blog/posts/`);
  const res = await fetch(`${API_URL}/blog/threads/`);
  const categorys = await fetch(`${API_URL}/blog/categories/`);

  const categorysdata = await categorys.json();
  const da = await res.json();
  const data = await response.json();

  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }
  return {
    props: { posts: data, threads: da, cate: categorysdata, orig: orig }, revalidate:10
  };
}
const sanitizer = dompurify.sanitize;
const Home1 = ({ posts, threads, cate, orig }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultOverlay, setSearchResultOverlay] = useState(false);
  const ToggleResultOverlay = () => {
    setSearchResultOverlay(false);
    setsearchBoxValue("");
    document.getElementById("searchform").reset();
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

  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  
  const sa = posts.slice().sort((a, b) => b.daily_views - a.daily_views);
  //change n
  const n = 3;
  const trending_posts = sa.slice(0, n);
  
  const [window_width, changeWindow_width] = useState("");
  useEffect(() => {
    changeWindow_width(window.innerWidth);
    window.addEventListener("resize", () => {
      changeWindow_width(window.innerWidth);
    });
  }, []);

  const pcscreen = (
    <>
      {trending_posts.map(function (post, id) {
        return (
          <div
            key={id}
            className={`col-12 col-md-4 p-3 d-flex justify-content-center align-items-center  + ${styles.trending_box}`}
          >
            {post.image ? <>
            <Image
              layout="fill"
              
              className={styles.img}
              src={orig + post.image}
              alt="trending_post"
            /><div className={`${styles.dark_overlay_z}`}></div></>:
              <div className={`d-flex justify-content-center align-items-center ${styles.backup_img}`}>
                

              </div>
            }
            

            <div className={`${styles.trending_box_img_text}`}>
              <h3 className={`text-center ${styles.post_box_heading_2}`}>
                <a className={`${styles.w_link} p-1`} href={"/blog/" + post.id}>
                  {post.title}
                </a>
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
  const mobile_screen = (
    <>
      <div className="testing p-2">
        <div
          id="carouselExampleCaptions"
          className="carousel slide h-100 w-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {trending_posts[0] ? 
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active bg-primary"
              aria-current="true"
              aria-label="Slide 1"
            ></button>:''}
            {trending_posts[1] ? 
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="bg-primary"
            ></button> :''}
            {trending_posts[2] ? 
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="bg-primary"
            ></button> :''}
          </div>
          <div className="carousel-inner h-100 w-100">
            {trending_posts[0] ? 
            <div className="carousel-item active h-100 w-100">
              {trending_posts[0].image ? 
              <Image
                layout="responsive"
                // sizes="50vw"
                width={100}
                height={100}
                src={orig + trending_posts[0].image}
                className="d-block w-100 h-100"
                alt="first_trending_post"
                priority
              />
              :
              <div className={`d-flex justify-content-center align-items-center ${styles.backup_img}`}>
              </div>}
              <div className="carousel-caption">
                <Link href={/blog/ + trending_posts[0].id} passHref>
                  <h5 className="text-primary">{trending_posts[0].title}</h5>
                </Link>
              </div>
            </div>:''}
            {trending_posts[1] ?
            <div className="carousel-item h-100 w-100">
              {trending_posts[1].image ? 
              <Image
                layout="responsive"
                height={100}
                width={100}
                // sizes="50vw"
                src={orig + trending_posts[1].image}
                className="d-block w-100 h-100"
                alt="first_trending_post"
                priority
              />
              :
              <div className={`d-flex justify-content-center align-items-center ${styles.backup_img}`}>
              </div>}
              <div className="carousel-caption ">
                <Link href={/blog/ + trending_posts[1].id} passHref>
                  <h5 className="text-primary">{trending_posts[1].title}</h5>
                </Link>
              </div>
            </div> : ''}
            {trending_posts[2] ?
            <div className="carousel-item h-100 w-100">
              {trending_posts[2].image ? 
              <Image
                layout="responsive"
                height={100}
                width={100}
                // sizes="50vw"
                src={orig + trending_posts[2].image}
                className="d-block w-100 h-100"
                alt="first_trending_post"
                priority
              />
              :
              <div className={`d-flex justify-content-center align-items-center ${styles.backup_img}`}>
              </div>}
              <div className="carousel-caption">
                <Link href={/blog/ + trending_posts[2].id} passHref>
                  <h5 className="text-primary">{trending_posts[2].title}</h5>
                </Link>
              </div>
            </div> :''}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="bg-primary carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="bg-primary carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const size_page = 8;
  //posts

  const {
    data: data1,
    error,

    size,
    setSize: setSize1,
  } = useSWRInfinite(
    (index) => `${API_URL}/blog/posts_paginated?ps=${size_page}&p=${index + 1}`,
    fetcher, {fallbackdata:posts, revalidateOnFocus:false}
  );

  const p_posts = data1 ? [].concat(...data1) : [];

  const isLoadingInitialData = !data1 && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data1 && typeof data1[size - 1] === "undefined");
  const isEmpty = data1?.[0]?.length === 0;
  const isReachingEnd = isEmpty || posts.length <= p_posts.length;

  //threads
  const {
    data: data2,
    error: error2,
    size: size2, 
    setSize: setSize2,
  } = useSWRInfinite(
    (index) =>
      `${API_URL}/blog/paginated_threads/?ps=${size_page}&p=${index + 1}`,
    fetcher, {fallbackdata:threads, revalidateOnFocus:false}
  );

  const p_threads = data2 ? [].concat(...data2) : [];

  const isLoadingInitialData2 = !data2 && !error2;
  const isLoadingMore2 =
    isLoadingInitialData2 ||
    (size2 > 0 && data2 && typeof data2[size2 - 1] === "undefined");
  const isEmpty2 = data2?.[0]?.length === 0;
  const isReachingEnd2 = isEmpty2 || threads.length <= p_threads.length;

  const [scroll_container, setScrollContainer] = useState(false)
  const toggleScrollContainer=()=>{
    setScrollContainer(!scroll_container)
  }

  return (
    <>
      <Head>
        <title>devMaesters| Blog Homepage</title>
        <meta name="keywords" content="Home" />
        <meta
          name="description"
          content="Welcome to devmaesters, I offer free programming tutorials, hints, tricks and also platforms
        for asking questions(threads) and buying web services/sites."
        />
        
      </Head>

      <div className="position-relative">
        <Navbar links="white" icon="white" header_color="white" link='blog' />
        <div
          style={{ top: "2vh", zIndex: "10",marginRight:"4vw" }}
          className="mt-2 position-sticky row"
        >
          <div className="col-12 d-flex justify-content-end">
          <div onClick={toggleScrollContainer} className={`btn p-0 d-flex justify-content-around align-items-center  ${styles.scroll_btn}`}>scroll to <FontAwesomeIcon icon={faAngleDown} /></div>
          </div>

          
          <div className={scroll_container ?`row d-grid justify-content-end position-absolute`: 'd-none'} style={{"top":"110%"}}>
            <div className={`col-12 p-2  ${styles.scroll_container}`}>
              <div  className="w-100 d-flex justify-content-center text-primary">
              <Link href="#main" passHref>Home</Link>
              </div>
              <div className="w-100 d-flex justify-content-center text-primary">
              <Link href="#trending_posts" passHref>Trending posts</Link>
              </div>
              <div className="w-100 d-flex justify-content-center text-primary">
              <Link href="#categories" passHref>Categories</Link>
              </div>
              <div className="w-100 d-flex justify-content-center text-primary">
              <Link href="#post_for_you" passHref>Post for you</Link>
              </div>
              <div className="w-100 d-flex justify-content-center text-primary">
              <Link href="#latestPosts" passHref>Latest posts</Link>
              </div>
              <div className="w-100 d-flex justify-content-center text-primary">
              <Link href="#threads" passHref>Threads</Link>
              </div>
              <div className="w-100 d-flex justify-content-center text-primary">
              <Link href="#services" passHref>Services</Link>
              </div>
              <div className="w-100 d-flex justify-content-center text-primary">
              <Link href="#contact" passHref>Contact</Link>
              </div>
            
            
            </div>
            
          </div>
        </div>

        <div className={`container mt-2 overflow-hidden `}>
          <div id="main" className="main">
            <div className={`row g-2 p-3 + ${styles.row_background}`}>
              <div
                className={`col-12 d-flex justify-content-center align-items-center ${styles.intro_box}`}
              >
                {/* <Image
                  layout="fill"
                  src={"/images/image3.jpg"}
                  alt="home_image"
                  priority
                /> */}
                {/* <div className={`${styles.dark_overlay}`}></div> */}
                <div className={`w-100 ${styles.intro_text}`}>
                  <h1 className={`text-center ${styles.hh_color}`}>BLOG</h1>

                  <div
                    className={`row w-100 g-0 d-flex justify-content-center`}
                  >
                    <div className="col-10 col-md-7">
                      <form
                        id="searchform"
                        className="w-100"
                        onSubmit={searchForm}
                      >
                        <input
                          type="text"
                          name="search_input"
                          defaultValue={searchBoxValue}
                          className={`form-control ${styles.searchbox_form}`}
                        />
                        <div className="d-flex justify-content-center mt-3">
                          <button className={`btn ${styles.search_btn}`}>
                            search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="trending_posts"
              className={`row d-flex justify-content-between g-2 p-3 mt-3 + ${styles.row_background}`}
            >
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h2 className={`text-center + ${styles.header_label_text}`}>
                  Trending Topics
                </h2>
              </div>
              {window_width >= 900 ? pcscreen : mobile_screen}
            </div>
          </div>
          <div
            id="categories"
            className={`row mt-3 p-3 + ${styles.row_background}`}
          >
            <div className="col-12 col-md-4">
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h2 className={`text-center + ${styles.header_label_text}`}>
                  Categories
                </h2>
              </div>
              <div className="d-flex justify-content-around flex-wrap">
                {cate.map(function (category, id) {
                  return (
                    <div className="p-2 blog-link" key={id}>
                      <Link href={"/blog/category/" + category.name}>
                        {category.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div id="post_for_you" className="col-12 col-md-4 offset-md-4">
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h2 className={`text-center + ${styles.header_label_text}`}>
                  Post for you
                </h2>
              </div>
              {/* <h5 className="text-center">Comming soon</h5> */}
              <span className="text-center">
                Get posts tailored to your particular tastes{" "}
              </span>
            </div>
          </div>
          <div className={`row mt-3  p-3 + ${styles.row_background}`}>
            <div
              className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
            >
              <h2 className={`text-center + ${styles.header_label_text}`}>
                Adds
              </h2>
            </div>
            <div className={`col-6 col-md-4 + ${styles.add_box1}`}></div>
            <div className={`col-6 col-md-4 + ${styles.add_box1}`}></div>
            <div className={`col-6 col-md-4 + ${styles.add_box1}`}></div>
            <div className={`col-6 col-md-4 + ${styles.add_box1}`}></div>
            <div
              className={`col-6 col-md-4 d-none d-md-block + ${styles.add_box1}`}
            >
              
            </div>
            <div
              className={`col-6 col-md-4 d-none d-md-block + ${styles.add_box1}`}
            >
              
            </div>
          </div>

          <div className={`row mt-3 p-2 `}>
            <div id="latestPosts" className={`col-12 col-md-12 ${styles.row_background}`}>
              <div
                className={`d-flex justify-content-center mb-2  ${styles.header_label}  ${styles.header_label_color1}`}
              >
                <h2 className={`text-center + ${styles.header_label_text}`}>
                  Latest Posts
                </h2>
              </div>
              <div className={`row mt-3 p-2  `}>
                {p_posts ? (
                  <>
                    {p_posts.map(function (post, id) {
                      return (
                        <div
                          key={id}
                          className={`col-xs-12 col-md-4 col-lg-3 ${styles.post_box}`}
                        >
                          <div className={styles.post_box_img}>
                            {post.image ? <>
                            <Image
                              layout="responsive"
                              width={100}
                              height={100}
                              objectFit="fill"
                              alt="post image"
                              className="post_image"
                              src={orig + post.image}
                            />
                            <span className={styles.post_box_category}>
                              {post.category.name}
                            </span>
                            </>:
                              <div className={`d-flex justify-content-center align-items-center ${styles.backup_img}`}>
                              <div>
                                {post.category.name}
                              </div>
              
                            </div>
                            }
                          </div>
                          <div className={styles.post_box_body}>
                            <h2 className={styles.post_box_heading}>
                              {post.title}
                            </h2>
                            <span
                              className={styles.post_box_body_text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(truncate(post.body)),
                              }}
                            ></span>
                          </div>
                          <div
                            className={`d-flex justify-content-between align-items-center ${styles.post_box_footer}`}
                          >
                            <span className="blog-link">
                              <Link role="button" href={"/blog/" + post.id}>
                                Readmore
                              </Link>
                            </span>
                            <span>
                              <FontAwesomeIcon color="#7b1fa2" size="1x" icon={faEye} />
                              {post.views}
                            </span>
                            <span >By {post.author.name}</span>
                          </div>
                        </div>
                      );
                    })}{" "}
                  </>
                ) : (
                  <>
                    <h6>Loading...</h6>
                  </>
                )}
              </div>
              <div className={`d-flex justify-content-center mb-3 mt-2 `}>
                <button
                  className={`btn ${styles.loadmore_btn} p-0`}
                  disabled={isLoadingMore || isReachingEnd}
                  onClick={() => setSize1(size + 1)}
                >
                  {isLoadingMore
                    ? "loading..."
                    : isReachingEnd
                    ? "No more posts"
                    : "load more"}
                </button>
              </div>
            </div>
            <div id="threads" className={`col-12 col-md-12 mt-4 ${styles.row_background}`}>
              <div
                className={`d-flex justify-content-center align-items-center mt-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h2 className={`text-center + ${styles.header_label_text}`}>
                  Threads
                </h2>
                <button className="btn">
                  <FontAwesomeIcon
                    size="2x"
                    className={styles.faPlusCircle}
                    icon={faPlusCircle}
                  />
                </button>
              </div>
              {/* <div
                className={`d-flex justify-content-end ${styles.add_thread}`}
              >
                <button className="btn">
                  <FontAwesomeIcon
                    size="2x"
                    className={styles.faPlusCircle}
                    icon={faPlusCircle}
                  />
                </button>
              </div> */}
              <div>
                <ul>
                  {p_threads ? (
                    <>
                      {p_threads.map(function (thread, id) {
                        return (
                          <li key={id} className={`mb-3 ${styles.thread_link}`}>
                            <div className="row g-0 w-100">
                              <div className="col-10 col-md-11">
                                <Link href={"/blog/thread/" + thread.id}>
                                  {thread.title}
                                </Link>
                              </div>
                              <div className="col-2 col-md-1">
                                <FontAwesomeIcon
                                  size="1x"
                                  style={{
                                    color: "blue",
                                  }}
                                  icon={faComment}
                                />
                                <sup>
                                  {Object.keys(thread.thread_messages).length}
                                </sup>
                              </div>
                            </div>
                          </li>
                        );
                      })}{" "}
                    </>
                  ) : (
                    <>
                      <h6>Loading Threads...</h6>
                    </>
                  )}
                </ul>
                <div className="d-flex justify-content-center mb-3 mt-2">
                  <button
                    className={`btn ${styles.loadmore_btn} p-0`}
                    disabled={isLoadingMore2 || isReachingEnd2}
                    onClick={() => setSize2(size2 + 1)}
                  >
                    {isLoadingMore2
                      ? "loading..."
                      : isReachingEnd2
                      ? "No more threads"
                      : "load more"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Footer />
        </div>

        {/* <div className={`${styles.index_add_thread_modal_overlay}`}>
            <div>
              <div>

              </div>
            </div>
        </div> */}
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
                    className={`form-control ${styles.searchbox_form}`}
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
                                <span>{item.title}</span>
                              </div>

                              <div
                                className={`w-100 d-flex justify-content-between align-items-center ${styles.index_item_detail_2}`}
                              >
                                <span>By {item.author.name}</span>
                                <Link href={"/blog/" + item.id} passHref>
                                  <button
                                    className={`btn btn-sm ${styles.search_btn}`}
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
                                <span>{item.title}</span>
                              </div>

                              <div
                                className={`w-100 d-flex justify-content-between align-items-center ${styles.index_item_detail_2}`}
                              >
                                <span>
                                  Messages: {item.thread_messages.length}
                                </span>
                                <Link href={"/blog/thread/" + item.id} passHref>
                                  <button
                                    className={`btn btn-sm ${styles.search_btn}`}
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
export default Home1;
