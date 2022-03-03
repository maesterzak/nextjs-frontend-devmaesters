import Navbar from "../blog_components/Navbar";
import Head from "next/head";

import styles from "../blog_home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import Footer from "../blog_components/Footer";
import { API_URL, ENVIRONMENT } from "../../../config";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/posts/`);
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { name: post.category.name.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const name = context.params.name;
  const res = await fetch(`${API_URL}/blog/categories-posts/` + name + "/");

  const data = await res.json();

  return {
    props: { category_posts: data, name: name },
  };
};

var orig = "" 
if (ENVIRONMENT === "DEVLOPMENT"){
  var orig = `${API_URL}`;
}
else if (ENVIRONMENT === "PRODUCTION"){
  var orig = '';
}

function category_list({ category_posts, name }) {
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };

  return (
    <>
      <Head>
        <title>SimpleLIFE | category- {name}</title>
        <meta name="keywords" content="Home" />
      </Head>
      <div>
        <Navbar
          background="white"
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
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>h</div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>i</div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>k</div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>k</div>
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
                  {category_posts.map(function (post, id) {
                    return (
                      <div
                        key={id}
                        className={`col-12 col-md-6 + ${styles.post_box}`}
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
                          ></span>
                        </div>
                        <div
                          className={`d-flex justify-content-between align-items-center ${styles.post_box_footer}`}
                        >
                          <span className="blog-link">
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
                            10
                          </span>
                          <span>By {post.author.name}</span>
                        </div>
                      </div>
                    );
                  })}
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
export default category_list;
