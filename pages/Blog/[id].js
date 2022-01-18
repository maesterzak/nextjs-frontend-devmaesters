import styles from "./blog.module.css";
import Head from 'next/head';
import Footer from "./blog_components/Footer";
import Navbar from "./blog_components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faShareSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { API_URL } from "../../config/index";

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/posts/`);
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  
  const res = await fetch(`${API_URL}/blog/post-detail/` + id +'/');

  const data = await res.json();
  
  return {
    props: { post: data },
    
  };
};
const orig = `${API_URL}`;
  
const post_detail = ({ post }) => {
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };  
  
  return (
    <>
    <Head>
        <title>SimpleLIFE | Post- {post.title}</title>
        <meta name="keywords" content="Home" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
    <div>
      <Navbar />
      <div className="post_detail">
        <div className={styles.main}>
          <h5><b>{post.title}</b></h5>
          <br />

          <span dangerouslySetInnerHTML={{__html:post.body}} />

          <span className={styles.blog_post_share}>
            <span>
              If you have enjoyed what you read give this author a shake to
              encourage more good posts, also you can share this post with your
              friends on social media, just click on the share button below.
            </span>
            <br />
            <span className={styles.post_detail_shake_share}>
              <span >
                <FontAwesomeIcon className="" icon={faHandshake} />
              </span>
              <span>Shake and Share</span>
              <button>
                Share <FontAwesomeIcon className="" icon={faShareSquare} />
              </button>
            </span>
          </span>
        </div>
        <div className={styles.author}>
          <h5>Author</h5>
          <br />
          <div className="aurthor_image">
            <Image alt="author_image"
              layout="fill" objectFit="fill"
              src={post.author.profile_image}
            />
          </div>
          <br />
          <span>{post.author.name}</span>
          <span className={styles.blog_about_author} dangerouslySetInnerHTML={{__html:truncate(post.author.about_me)}} />
        </div>
        <div className={styles.blog_post_sidebar1}>
          <div className={styles.add}>
            <h6>Adds</h6>
          </div>

          <div className={styles.blog_post_status}>
            <h6>Status</h6>
            <span>Published: {post.published_date}</span>
            <span>Views: {post.views}</span>
            <span>Handshakes: {post.handshakes}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};
export default post_detail;
