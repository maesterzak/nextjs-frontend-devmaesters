
import Head from "next/head";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { API_URL, NEXT_MODE } from "../../config";
import useSWR, {mutate} from "swr";
import Loader from "../../components/Loader";
import dompurify from 'isomorphic-dompurify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import 'highlight.js/styles/agate.css'
import Categories from "../../components/blog_components/categories/Categories";
import styles from './blog.module.css'
import TrendingPosts from "../../components/blog_components/trending_posts/TrendingPosts";
import Image from "next/image";
import "highlight.js/styles/agate.css";
import { useEffect } from "react";
import CreateThread from "../../components/blog_components/threads/CreateThread";



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
    fallback: "blocking",
  };
};


export async function getStaticProps(context){
  const id = context.params.id;
  const url = `${API_URL}/blog/post-detail/` + id + "/"

  const response = await fetch(`${API_URL}/blog/post-detail/` + id + "/");
  const res = await response.json()
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }

  return {
    props: { orig: orig, url:url, res:res },
  };
};


const fetcher = (...args)=> fetch(...args).then((response) => response.json())
function Post_detail({ url, orig, res }) {
  const hljs = require("highlight.js");
  useEffect(() => {
    hljs.highlightAll();
    hljs.configure({ ignoreUnescapedHTML: true });
  });
  
  
  const createComment = async (activeitem) => {
    await fetch(`${API_URL}/blog/comment-create/`, {
      method: "POST",
  
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(activeitem),
    })
      .then((res) => res.json)
      .then((result) => SVGMetadataElement(result.rows))
      .catch((err) => console.log(err));
    // alert("Comment added");
    mutate(url)
  };
  
  const comment_handle = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    
    const activeitem = {
      name: form_values.comment_name,
      body: form_values.comment_body,
      post: form_values.post_id,
      profile_image_value: form_values.chat_image,
    };

    createComment(activeitem);
    
    
    e.target.reset();
    //ToggleMessagemodal();
  };
  
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };

  
  const {data, error} = useSWR(url, fetcher, {fallbackData:res, revalidateOnFocus:false})
  
  const sanitizer = dompurify.sanitize
    
  if (error) return <>{error}</>
  return (
    <>
      {data? <> 
      <Head>
        <title>{data.title}</title>
        
        <meta name="description" content={sanitizer(truncate(data.body))} />
      </Head>
      <div>
        <Navbar loc="blog" />

        <main className="container mt-3">
          <div className="row">
          <main className="col-12 col-md-9">
            
          <div className={`row g-0 `} >
          <div className="card p-2">
              <h1 className="h2 text-light mb-3">
                {data.title}
              </h1>
              <article className="card-body p-0" dangerouslySetInnerHTML={{ __html: sanitizer(data.body) }}>

              </article>

            </div>
            
            <div className="col-12 card mb-3 mt-3">
                  <h5 className="card-header header-main">Author</h5>
                <div className="d-flex flex-wrap justify-content-center card-body">
                    <div className={` ${styles.img_card}`}>
                    <Image
                      alt="author-image"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      src={orig + data.author.profile_image}
                    />

                    </div>
                    <span dangerouslySetInnerHTML={{
                          __html: sanitizer(data.author.about_me),
                        }}></span>
                        <div className="col-12 d-flex align-items-end">
                        <div className="row g-0 w-100 d-flex justify-content-end align-self-end">
                          <div className="col-12 d-flex align-items-center justify-content-center ">
                            {data.author.twitter ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.twitter}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faTwitterSquare} />
                            </button>:''}
                            {data.author.facebook ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.facebook}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faFacebookSquare} />
                            </button>:''}
                            {data.author.whatsapp ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`https://api.whatsapp.com/send?phone=${data.data.author.whatsapp}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faWhatsappSquare} />
                            </button>:''}
                            {data.author.linkdn ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.linkdn}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faLinkedin} />
                            </button>:''}
                            {data.author.instagram ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.instagram}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faInstagramSquare} />
                            </button>:''}
                          </div>
                        </div>
                    </div>
            
                </div>
            </div>
            
            {/* comment form */}

            <div className={`col-12 mb-3 card ${styles.thread_comment}`}>
            <div className="card-header header-main mb-3">
                <h5>Comment</h5>
                </div>
                <div className={`card-body`}>
                <form
                    onSubmit={comment_handle}
                    className={`d-flex flex-wrap justify-content-center ${styles.thread_form}`}
                  >
                    <input
                      id="post_id"
                      name="post_id"
                      className="d-none"
                      defaultValue={data.id}
                    ></input>
                    <div className="form-group w-100">
                      <input
                        type="text"
                        className={`form-control w-100 ${styles.input}`}
                        id="comment_name"
                        name="comment_name"
                        placeholder="Enter name"
                      />
                    </div>
                    <br />
                    <span className="w-100 mt-2 mb-2 text-center">Select image</span>
                    <br />
                    <div className="form-group form-check-inline d-flex flex-wrap w-80">
                      <div className="form-check">
                        <input
                          className={`form-check-input ${styles.input}`}
                          type="radio"
                          name="chat_image"
                          id="comment-form-image1"
                          defaultChecked
                          defaultValue={"chat_image_1"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="comment-form-image1"
                        >
                          <Image
                            alt="comment-image-select-1"
                            layout="responsive"
                            width={"40px"}
                            height={"40px"}
                            src={"/images/chat_images/chat_image_1.jpg"}
                          />
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className={`form-check-input ${styles.input}`}
                          type="radio"
                          name="chat_image"
                          id="comment-form-image2"
                          defaultValue={"chat_image_2"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="comment-form-image2"
                        >
                          <Image
                            alt="comment-image-select-2"
                            layout="responsive"
                            width={"40px"}
                            height={"40px"}
                            src={"/images/chat_images/chat_image_2.jpg"}
                          />
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className={`form-check-input ${styles.input}`}
                          type="radio"
                          name="chat_image"
                          id="comment-form-image3"
                          defaultValue={"chat_image_3"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="comment-form-image3"
                        >
                          <Image
                            alt="comment-image-select-3"
                            layout="responsive"
                            width={"40px"}
                            height={"40px"}
                            src={"/images/chat_images/chat_image_3.jpg"}
                          />
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className={`form-check-input ${styles.input}`}
                          type="radio"
                          name="chat_image"
                          id="comment-form-image4"
                          defaultValue={"chat_image_4"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="comment-form-image4"
                        >
                          <Image
                            alt="comment-image-select-4"
                            layout="responsive"
                            width={"40px"}
                            height={"40px"}
                            src={"/images/chat_images/chat_image_4.jpg"}
                          />
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className={`form-check-input ${styles.input}`}
                          type="radio"
                          name="chat_image"
                          id="comment-form-image5"
                          defaultValue={"chat_image_5"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="comment-form-image5"
                        >
                          <Image
                            alt="comment-image-select-5"
                            layout="responsive"
                            width={"40px"}
                            height={"40px"}
                            src={"/images/chat_images/chat_image_5.jpg"}
                          />
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className={`form-check-input ${styles.input}`}
                          type="radio"
                          name="chat_image"
                          id="comment-form-image6"
                          defaultValue={"chat_image_6"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="comment-form-image6"
                        >
                          <Image
                            alt="comment-image-select-6"
                            layout="responsive"
                            width={"40px"}
                            height={"40px"}
                            src={"/images/chat_images/chat_image_6.jpg"}
                          />
                        </label>
                      </div>
                    </div>

                    <br />
                    <div className={`form-group form-group-lg w-100 ${styles.textarea_div}`}>
                      <textarea
                        type="text"
                        className={`form-control h-100  ${styles.textarea}`}
                        id="comment_body"
                        name="comment_body"
                        placeholder="Enter message"
                      />
                    </div>
                    <br />
                    <input
                      className="btn button mt-2"
                      type="submit"
                      value="Submit"
                    />
                  </form>

                </div>

            </div>


                              {/* comment list */}
                              <div className="col-12 card mb-3">
            <div className="card-header header-main mb-3">
                <h5>Comments</h5>
                </div>
            {data.posts_comments.length !=0 ? '':<div className="d-flex justify-content-center">No comment yet</div>}
               {data.posts_comments.map(function (message, id) {
                  return (
                    <div className="row mb-3" key={id}>
                      <div className="col-3 col-md-1">
                      {message.profile_image ? (
                            <>
                              <Image
                                layout="responsive"
                                width={70}
                                height={70}
                                src={orig + message.profile_image}
                                alt="message profile"
                              />
                            </>
                          ) : (
                            <>
                              <Image
                                layout="responsive"
                                width={70}
                                height={70}
                                src={`/images/chat_images/${message.profile_image_value}.jpg`}
                                alt="message profile"
                              />
                            </>
                          )}
                        

                      </div>
                      <div className="col-8 col-md-11">
                        <div className="h6"><b>{message.name}</b></div>
                        <div className="text-muted">{message.date_created}</div>
                        

                      </div>
                      <div className="col-12 card-body" dangerouslySetInnerHTML={{
                                  __html: sanitizer(message.body),
                                }}>

                      </div>

                    </div>
                    
                    
                  );
                })} 

            </div>
              

                
          </div>

          </main>
          <div className="col-12 col-md-3">
          <div className="card mb-3">
            <h5 className="card-header">
              Tags
            </h5>
            <div className="card-body ">
              {data.tags?.map(function(tag, id){
                return(
                  <div key={id}>
                    <a  href="#"> {tag}</a>
                  </div>
                )
              })}

            </div>

          </div>

          
            
            
              <Categories />
              <TrendingPosts />
              <CreateThread />

            

            

          </div>
          </div>

        </main>
        
        <div className="mt-3">
          <Footer />
        </div>
      </div>
      </> : <><Loader /></>}
    </>
  );
};
export default Post_detail;
