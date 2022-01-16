import Head from "next/head";

import Footer from "./blog_components/Footer";

import styles from "./blog.module.css";
import Navbar from "./blog_components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faComment } from "@fortawesome/free-solid-svg-icons";
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

const Home = ({ posts, threads, cate }) => {
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  const ja = posts.filter((posts) => posts.views >= 10);
  const sa = posts.slice().sort((a, b) => b.daily_views - a.daily_views);
  const n = 3;
  const trending_posts = sa.slice(0, n);

  
  return (
    <>
      <Head>
        <title>SimpleLIFE | Blog Homepage</title>
        <meta name="keywords" content="Home" />
      </Head>
      

      <div>
        <Navbar />

        <section className={styles.section}>
          <div className={styles.trending}>
            <div className="header_decor">
              <h6>Trending Posts</h6>
            </div>

            <div className={styles.trending_list}>
              {trending_posts.map(function (post, id) {
                return (
                  <div className={styles.trending_topics} key={id}>
                    <Image layout="fill"  objectFit="fill"
                      className='trending_image'
                      alt="trending image"
                      src={post.image}
                    />
                    <a
                      href={"/Blog/" + post.id}
                      className={styles.trending_topics_text}
                    >
                      {post.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.main_body}>
            <div id="Categories" className={styles.categories}>
              <div className="categories">
                <div className="header_decor">
                  <h6>Categories</h6>
                </div>
                <div className={styles.category_links}>
                  {cate.map(function (category, id) {
                    return (
                      <div key={id}>
                        <Link href={"Blog/category/" + category.name}>
                          {category.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <ul className="list_text"></ul>
              </div>
            </div>
            <div className={styles.post_for_you}>
              <div className="header_decor">
                <h6>Post for you</h6>
              </div>
              <span>This part is still being updated</span>
            </div>
            <div className={styles.adds}>
              <div className="header_decor">
                <h6>Adds</h6>
              </div>

              <span>Adds</span>
            </div>
            <div className={styles.posts}>
              <div className="header_decor">
                <h6>Latest Posts</h6>
              </div>
              <div className={styles.post_list} id="Latest_posts">
                {posts.map(function (post, id) {
                  return (
                    <div className={styles.post_body} key={id}>
                      <div className={styles.post_image}>
                        <Image layout="fill"  objectFit="fill"
                          alt="post image"
                          className="post_image"
                          src={post.image}
                        />
                        <span className={styles.post_image_text}>
                          {post.category.name}
                        </span>
                      </div>
                      <div className={styles.post_text}>
                        <h5>{post.title}</h5>
                        <span dangerouslySetInnerHTML={{__html:truncate(post.body)}} />
                      </div>
                      <div className={styles.post_footer}>
                        <span>
                          <Link role="button" href={"/Blog/" + post.id}>
                            Readmore
                          </Link>
                        </span>
                        <span>
                          {post.handshakes}{" "}
                          <FontAwesomeIcon icon={faHandshake} />
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div className={styles.post_body1}>
                  <div className={styles.post_tex1t}>
                    <h5>
                      How This seven lines of code turned into a $36 billion
                      empire
                    </h5>
                    <span>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the
                    </span>
                  </div>

                  <div className={styles.post_footer1}>
                    <span>Footer</span>
                  </div>
                </div>

                <div className={styles.post_body1}>
                  <div className={styles.post_text}>
                    <h5>
                      How This seven lines of code turned into a $36 billion
                      empire
                    </h5>
                    <span>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the
                    </span>
                  </div>

                  <div className={styles.post_footer}>
                    <span>Footer</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="Open_threads" className={styles.open_threads}>
              <div>
                <div className="header_decor">
                  <h6>Threads</h6>
                </div>
                <ul>
                  {threads.map(function (thread, id) {
                    return (
                      <li key={id}>
                        <Link href={"Blog/thread/" + thread.id}>
                          {thread.title}
                        </Link>{" "}
                        <FontAwesomeIcon
                          className={styles.font_color_red}
                          icon={faComment}
                        />
                        {Object.keys(thread.thread_messages).length}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Home;
