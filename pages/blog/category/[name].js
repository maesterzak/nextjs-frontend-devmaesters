import Navbar from "../blog_components/Navbar";
import Head from "next/head";
import styles from "../blog_home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { API_URL, NEXT_MODE } from "../../../config";
import Image from "next/image";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../blog_components/Footer"));
import dompurify from "isomorphic-dompurify";

import useSWR from "swr";
import {useState } from "react";



export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/categories/`);
  const data = await res.json();

  const paths = data.map((category) => {
    return {
      params: { name: category.name.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
  
};
export async function getStaticProps(context) {
  const name = context.params.name;
  
  const url = `${API_URL}/blog/categories-paginated-posts/` + name;
  const response = await fetch(`${url}?l=8`);
  const res = await response.json()
  
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }

  return {
    props: { name: name, orig: orig, url: url, res:res  }, revalidate: 10
  };
}


function Category_list({ name, orig, url, res }) {
 
  const sanitizer = dompurify.sanitize
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const [limit, setLimit] = useState(8);

  const { data, error } = useSWR(`${url}?l=${limit}`, fetcher, {fallback:res});

  const p_posts = data ? [].concat(...data["results"]) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (data && typeof data === "undefined");
  const isEmpty = data?.["count"] === 0;
  const isReachingEnd = isEmpty || p_posts?.length === data?.["count"];

  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  if (error)
    return (
      <>
        <h1>{error}</h1>
      </>
    );

  return (
    <>
      <Head>
        <title>category- {name}</title>
        <meta name="keywords" content={name} />
        <meta name="description" content={name} />
        
      </Head>
      <div>
        <Navbar
          background="black"
          links="white"
          icon="white"
          header_color="white"
        />

        <div className="container ">
          <div className={`${styles.main}`}>
            <div className="row">
              <div className="col-12 col-md-3">
                <div
                  className={`row mt-3 p-3 + ${styles.row_background} + ${styles.adds_container}`}
                >
                  <div
                    className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
                  >
                    <h1 className={`text-center + ${styles.header_label_text}`}>
                      Adds
                    </h1>
                  </div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}></div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}></div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}></div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}></div>
                </div>
              </div>
              <div className="col-12 col-md-9">
                <div className={`row mt-3 p-2 + ${styles.row_background}`}>
                  <div
                    className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
                  >
                    <h1 className={`text-center + ${styles.header_label_text}`}>
                      Posts under {name} category
                    </h1>
                  </div>
                  {data ? (
                    <>
                      {p_posts.map(function (post, id) {
                        return (
                          <div
                            key={id}
                            className={`col-12 col-md-6 + ${styles.post_box}`}
                          >
                            <div className={styles.post_box_img}>
                            {post.image ? <>
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
                            </>:
                              <div className={`d-flex justify-content-center align-items-center ${styles.backup_img}`}>
                              <span>
                                {post.category.name}
                              </span>
              
                            </div>
                            }
                            </div>
                            <div className={styles.post_box_body}>
                              <h1 className={styles.post_box_heading}>
                                {post.title}
                              </h1>
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
                              <span>By {post.author.name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <h1>Loading Posts</h1>
                    </>
                  )}
                </div>
                <div className="d-flex justify-content-center mb-3 mt-2">
                  <button
                    className={`btn ${styles.loadmore_btn} p-1`}
                    disabled={isLoadingMore || isReachingEnd}
                    onClick={() => setLimit(limit + 8)}
                  >
                    {isLoadingMore
                      ? "loading..."
                      : isReachingEnd
                      ? "No more posts"
                      : "load more"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 container g-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Category_list;
