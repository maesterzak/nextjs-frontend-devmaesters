import Head from "next/head";

import Footer from "./blog_components/Footer";
import { useEffect, useState } from "react";
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
  const [window_width, changeWindow_width] = useState('')
  useEffect(()=> {
    changeWindow_width(window.innerWidth)
    window.addEventListener('resize', ()=> {
        
        changeWindow_width(window.innerWidth)
    })
 }, [])
 
 const mobile_screen_adds = (
  <>
    
    <div className='d-flex justify-content-center h-50 gap-1'>
    <div className={styles.add_box}>

    </div>
    <div className={styles.add_box}>

    </div>
    </div>
    <br />
    <div className='d-flex justify-content-center h-50 gap-1'>
    <div className={styles.add_box}>

    </div>
    <div className={styles.add_box}>

    </div>
    </div>
  </>
 )
 const pc_screen_adds = (
  <>
    <div className='w-100 d-flex justify-content-center gap-1'>
                        <div className={styles.home_add_box}>

                        </div>
                        <div className={styles.home_add_box}>

                        </div>
                        <div className={styles.home_add_box}>

                        </div>
                        <div className={styles.home_add_box}>

                        </div>
                        <div className={styles.home_add_box}>

                        </div>
                        <div className={styles.home_add_box}>

                        </div>
                    </div> 
  </>
 )

 const pcscreen = (
   <>
    {trending_posts.map(function (post, id) {
                return (
                  <div className={styles.trending_topics} key={id}>
                    <Image layout="fill"  objectFit="fill"
                      className='trending_image'
                      alt="trending image"
                      src={post.image}
                    />
                    <div className="dark_overlay">

                    </div>
                    <a
                      href={"/Blog/" + post.id}
                      className={styles.trending_topics_text}
                    >
                      {post.title}
                    </a>
                  </div>
                );
              })}
   </>
 )
 const mobile_screen = (
   <>
      <div className="testing">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner trending_post_container">
      
        <div className="carousel-item active h-100">
            <Image layout="fill" className="d-block w-100 h-100" src={trending_posts[0].image} alt="First slide" />
            <div className="dark_overlay">

            </div>
            <div className="carousel-caption text-light">
            <h5><a
                      href={"/Blog/" + trending_posts[0].id}
                      className={styles.mobile_trending_text}
                    >
                      {trending_posts[0].title}
                    </a></h5>
                
            </div>
        </div>
        <div className="carousel-item h-100">
            <Image layout="fill" className="d-block w-100 h-100" src={trending_posts[1].image} alt="Second slide" />
            <div className="dark_overlay">
                
            </div>
            <div className="carousel-caption text-light">
            <h5><a
                      href={"/Blog/" + trending_posts[1].id}
                      className={styles.mobile_trending_text}
                    >
                      {trending_posts[1].title}
                    </a></h5>
                
            </div>
        </div>
        <div className="carousel-item h-100">
            <Image layout="fill" className="d-block w-100 h-100" src={trending_posts[2].image} alt="Third slide" />
            <div className="dark_overlay">
                
            </div>
            <div className="carousel-caption text-light">
            <h5><a
                      href={"/Blog/" + trending_posts[2].id}
                      className={styles.mobile_trending_text}
                    >
                      {trending_posts[2].title}
                    </a></h5>
                
            </div>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
    </a>
</div>
</div>
   </>
 )

  return (
    <>
      <Head>
        <title>SimpleLIFE | Blog Homepage</title>
        <meta name="keywords" content="Home" />

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
<link rel="icon" href="/favicon1.ico" />
      </Head>
      

      <div>
        <Navbar />

        <section >

          
        <div className={styles.category_main}>
          <div className={styles.trending}>
            <div className="header_decor">
              <h6>Trending Posts</h6>
            </div>
            
            <div className={styles.trending_list}>
              {window_width >=900 ? pcscreen:mobile_screen}
              
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
              
              <div className="w-100 mt-1 "> 
              {window_width >=900 ? pc_screen_adds:mobile_screen_adds}
              
                         
                </div>
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
                        <h5><b>{post.title}</b></h5>
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
                      <li key={id} className="thread_link">
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
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Home;
