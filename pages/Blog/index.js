import Head from "next/head";

import Footer from "./blog_components/Footer";
import { useEffect, useState } from "react";
import styles from "./blog_home.module.css";
import Navbar from "./blog_components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faComment,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "../../config";

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}/blog/posts/`);
  const res = await fetch(`${API_URL}/blog/threads/`);
  const categorys = await fetch(`${API_URL}/blog/categories/`);

  const categorysdata = await categorys.json();
  const da = await res.json();
  const data = await response.json();

  return {
    props: { posts: data, threads: da, cate: categorysdata },
  };
};

export const orig = `${API_URL}`;

const Home1 = ({ posts, threads, cate }) => {
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  const ja = posts.filter((posts) => posts.views >= 10);
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
      {posts.map(function (post, id) {
        return (
          <div
            key={id}
            className={`col-12 col-md-4 p-3 d-flex justify-content-center align-items-center  + ${styles.trending_box}`}
          >
            <Image
              layout="fill"
              className={styles.img}
              src={orig + post.image}
              alt="trending_post"
            />
            <div className={`${styles.dark_overlay}`}></div>

            <div className={`${styles.trending_box_img_text}`}>
              <h3 className={`text-center ${styles.post_box_heading}`}>
                <a className={`${styles.w_link}`} href={"/"}>
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
      <div className="testing">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner trending_post_container">
            <div className="carousel-item active h-100">
              <Image
                layout="fill"
                className="d-block w-100 h-100"
                src={orig + trending_posts[0].image}
                alt="First slide"
              />
              <div className="dark_overlay"></div>
              <div className="carousel-caption text-light">
                <h5>
                  <a
                    href={"/Blog/" + trending_posts[0].id}
                    className={styles.mobile_trending_text}
                  >
                    {trending_posts[0].title}
                  </a>
                </h5>
              </div>
            </div>
            <div className="carousel-item h-100">
              <Image
                layout="fill"
                className="d-block w-100 h-100"
                src={orig + trending_posts[1].image}
                alt="Second slide"
              />
              <div className="dark_overlay"></div>
              <div className="carousel-caption text-light">
                <h5>
                  <a
                    href={"/Blog/" + trending_posts[1].id}
                    className={styles.mobile_trending_text}
                  >
                    {trending_posts[1].title}
                  </a>
                </h5>
              </div>
            </div>
            <div className="carousel-item h-100">
              <Image
                layout="fill"
                className="d-block w-100 h-100"
                src={orig + trending_posts[2].image}
                alt="Third slide"
              />
              <div className="dark_overlay"></div>
              <div className="carousel-caption text-light">
                <h5>
                  <a
                    href={"/Blog/" + trending_posts[2].id}
                    className={styles.mobile_trending_text}
                  >
                    {trending_posts[2].title}
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Head>
        <title>SimpleLIFE | Blog Homepage</title>
        <meta name="keywords" content="Home" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <div>
        <Navbar
          background="white"
          links="purple"
          icon="blue"
          header_color="black"
        />
        <br />
        <div className={`container mt-5 overflow-hidden `}>
          <div className="main">
            <div className={`row g-2 p-3 + ${styles.row_background}`}>
              <div
                className={`col-12 d-flex justify-content-center align-items-center ${styles.intro_box}`}
              >
                <Image layout="fill" src={"/images/image3.jpg"}  alt="home_image"/>
                <div className={`${styles.dark_overlay}`}></div>
                <div className={`${styles.intro_text}`}>
                  <h1 className="text-light text-center">BLOG</h1>
                  <span className="text-light text-center">Subscribe to get loads of programming <br /> tips and tricks 
                  just for you</span>
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest naira)"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">search</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`row g-2 p-3 mt-3 + ${styles.row_background}`}>
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h1 className={`text-center + ${styles.header_label_text}`}>
                  Trending Topics
                </h1>
              </div>
              {window_width >= 900 ? pcscreen : mobile_screen}
            </div>
          </div>
          <div className={`row mt-3 p-3 + ${styles.row_background}`}>
            <div className="col-12 col-md-4">
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h1 className={`text-center + ${styles.header_label_text}`}>
                  Categories
                </h1>
              </div>
              <div className="d-flex justify-content-around flex-wrap">
                {cate.map(function (category, id) {
                  return (
                    <div className="p-2" key={id}>
                      <Link href={"Blog/category/" + category.name}>
                        {category.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-12 col-md-4 offset-md-4">
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h1 className={`text-center + ${styles.header_label_text}`}>
                  Post for you
                </h1>
              </div>
              <h5 className="text-center">Comming soon</h5>
              <span className="text-center">
                Get posts tailored to your particular tastes{" "}
              </span>
            </div>
          </div>
          <div className={`row mt-3 p-3 + ${styles.row_background}`}>
            <div
              className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
            >
              <h1 className={`text-center + ${styles.header_label_text}`}>
                Adds
              </h1>
            </div>
            <div className={`col-6 col-md-2 + ${styles.add_box1}`}>h</div>
            <div className={`col-6 col-md-2 + ${styles.add_box1}`}>i</div>
            <div className={`col-6 col-md-2 + ${styles.add_box1}`}>k</div>
            <div className={`col-6 col-md-2 + ${styles.add_box1}`}>k</div>
            <div className={`col-6 col-md-2 d-none d-md-block + ${styles.add_box1}`}>k</div>
            <div className={`col-6 col-md-2 d-none d-md-block + ${styles.add_box1}`}>k</div>
          </div>

          <div className={`row mt-3 p-2 + ${styles.row_background}`}>
            <div className="col-12 col-md-9">
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h1 className={`text-center + ${styles.header_label_text}`}>
                  Latest Posts
                </h1>
              </div>
              <div className={`row mt-3 p-2 + ${styles.row_background}`}>
                {posts.map(function (post, id) {
                  return (
                    <div
                      key={id}
                      className={`col-12 col-md-4 + ${styles.post_box}`}
                    >
                      <div className={styles.post_box_img}>
                        <Image
                          layout="fill"
                          objectFit="fill"
                          alt="post image"
                          className="post_image"
                          src={orig + post.image}
                        />
                        <span className={styles.post_box_category}>
                          {post.category.name}
                        </span>
                      </div>
                      <div className={styles.post_box_body}>
                        <h1 className={styles.post_box_heading}>
                          {post.title}
                        </h1>
                        <span
                          className={styles.post_box_body_text}
                          dangerouslySetInnerHTML={{
                            __html: truncate(post.body),
                          }}
                        />
                      </div>
                      <div
                        className={`d-flex justify-content-between align-items-center ${styles.post_box_footer}`}
                      >
                        <span>
                          <Link role="button" href={"/Blog/" + post.id}>
                            Readmore
                          </Link>
                        </span>
                        <span>
                        
                          <FontAwesomeIcon
                            width={20}
                            height={20}
                            icon={faHandshake}
                          />
                          {post.handshakes}
                        </span>
                        <span>By {post.author.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div
                className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
              >
                <h1 className={`text-center + ${styles.header_label_text}`}>
                  Threads
                </h1>
              </div>
              <div className="d-flex p-3">
                <ul>
                  {threads.map(function (thread, id) {
                    return (
                      <li
                        key={id}
                        className={`d-flex justify-content-between ${styles.thread_link}`}
                      >
                        <Link href={"Blog/thread/" + thread.id}>
                          {thread.title}
                        </Link>
                        <div>
                          <FontAwesomeIcon
                            style={{
                              height: "1em",
                              color: "blue",
                              marginLeft: "10px",
                            }}
                            icon={faComment}
                          />
                          {Object.keys(thread.thread_messages).length}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
        <Footer />
        </div>
      </div>
    </>
  );
};
export default Home1;
