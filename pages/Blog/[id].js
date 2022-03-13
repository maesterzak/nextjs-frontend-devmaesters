import styles from "./blog_home.module.css";
import Head from "next/head";
import Footer from "./blog_components/Footer";
import Navbar from "./blog_components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faHandshake,
  faShare,
  
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { API_URL, NEXT_MODE } from "../../config/index";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import Loader from "../components/Loader";

// export const getStaticPaths = async () => {
//   const res = await fetch(`${API_URL}/blog/posts/`);
//   const data = await res.json();

//   const paths = data.map((post) => {
//     return {
//       params: { id: post.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export async function getServerSideProps(context){
  const id = context.params.id;
  const url = `${API_URL}/blog/post-detail/` + id + "/"

  // const res = await fetch(`${API_URL}/blog/post-detail/` + id + "/");

  
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }

  return {
    props: { orig: orig, url:url },
  };
};


const fetcher = (...args)=> fetch(...args).then((response) => response.json())
function Post_detail({ url, orig }) {

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
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };

  const threadchat_handle = (e) => {
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
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const {data, error} = useSWR(url, fetcher)
  
  if (error) return <>{error}</>
  return (
    <>
      {data ? <>
      <Head>
        <title>SimpleLIFE | Post- {data.title}</title>
        <meta name="keywords" content={data.tags} />
        <meta name="description" content={<span
                          className={styles.post_box_body_text}
                          dangerouslySetInnerHTML={{
                            __html: truncate(data.body),
                          }}
                        ></span>} />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <div>
        <Navbar links="white" icon="white" header_color="white" />
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-md-9 p-4">
              <div
                className={`row  ${styles.row_background} + ${styles.post_detail_page}`}
              >
                <h1>{data.title}</h1>
                <br />
                <span className="mt-3"  dangerouslySetInnerHTML={{ __html: data.body }}></span>
                <br />
                <hr />
                <div className={`row g-0 p-2`}>
                  <span>
                    If you have enjoyed what you read give this author a
                    handshake to encourage more good posts, also you can share
                    this post with your friends on social media, just click on
                    the share button below.
                  </span>
                </div>
                <hr />
                <div className="row">
                  <div className="col-2 d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      size="2x"
                      icon={faHandshake}
                    />
                  </div>
                  <div className="col-8 d-flex align-items-center justify-content-center">
                    <span>Thanks for reading</span>
                  </div>
                  <div
                    
                    className={`col-2 d-flex align-items-center justify-content-center btn ${styles.sharebutton}`}
                  >
                    <FontAwesomeIcon size="1x" icon={faShare} />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 p-3  d-flex justify-content-center ">
              <div className={`row p-3 g-0 w-100 ${styles.row_background}`}>
              <div
                  className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
                >
                  <h1 className={`text-center + ${styles.header_label_text}`}>
                    Author
                  </h1>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                  <div className={`${styles.author_profile_pic}`}>
                    <Image
                      alt="author-image"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      src={orig + data.author.profile_image}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-8 ">
                  <div className="row d-flex justify-content-center">
                    <div className="col-10 col-md-10">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data.author.about_me,
                        }}
                      ></span>

                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <span><span><FontAwesomeIcon size="2x" style={{"marginRight":"10px"}} icon={faTwitterSquare} />
                        <FontAwesomeIcon size="2x" style={{"marginRight":"10px"}} icon={faFacebookSquare} />
                        <FontAwesomeIcon size="2x" style={{"marginRight":"10px"}} icon={faWhatsappSquare} />
                        <FontAwesomeIcon size="2x" style={{"marginRight":"10px"}} icon={faLinkedin} />
                        <FontAwesomeIcon size="2x" icon={faInstagramSquare} />
                        </span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className={`row p-3 ${styles.row_background}`} >
            <div
                  className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
                >
                  <h1 className={`text-center + ${styles.header_label_text}`}>
                    Comments
                  </h1>
                </div>
              <div style={{"minHeight":"75vh"}}>
                <form
                    onSubmit={threadchat_handle}
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
                        className="form-control w-100"
                        id="comment_name"
                        name="comment_name"
                        placeholder="Enter name"
                      />
                    </div>
                    <br />
                    <span className="w-100 text-center">Select image</span>
                    <br />
                    <div className="form-group form-check-inline d-flex flex-wrap w-80">
                      <div className="form-check">
                        <input
                          className="form-check-input"
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
                          className="form-check-input "
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
                          className="form-check-input"
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
                          className="form-check-input "
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
                          className="form-check-input "
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
                          className="form-check-input "
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
                    <div className="form-group form-group-lg w-100 h-50">
                      <textarea
                        type="text"
                        className="form-control h-100"
                        id="comment_body"
                        name="comment_body"
                        placeholder="Enter message"
                      />
                    </div>
                    <br />
                    <input
                      className="btn btn-outline-primary"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                  </div>

                  
            </div>

            <br />
            <div className={`row ${styles.row_background}`}>
              <div className="col-12 p-3">
              <div
                  className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
                >
                  <h1 className={`text-center + ${styles.header_label_text}`}>
                    Comment Message
                  </h1>
                </div>
               {data.posts_comments.map(function (message, id) {
                  return (
                    <div className="row mb-3" key={id}>
                      <div className="col-2" style={{ height: "40px" }}>
                        <div className={`${styles.thread_message_image}`}>
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
                      </div>

                      <div className={`col-10 ${styles.thread_message}`}>
                        {message.body}
                      </div>
                    </div>
                  );
                })} 

              </div>

            </div>

            </div>

            <div className="col-12 col-md-3 g-0 order-first order-md-0 p-2 ">
              <div
                className={`p-3 ${styles.row_background} + ${styles.adds_container}`}
              >
                <div
                  className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
                >
                  <h1 className={`text-center + ${styles.header_label_text}`}>
                    Adds
                  </h1>
                </div>
                <div className="row g-0">
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>h</div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>i</div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>k</div>
                  <div className={`col-6 col-md-6 + ${styles.add_box1}`}>k</div>
                </div>
                <div className="row mt-3">
                  <h6>Status</h6>
                  <span>Published: {data.published_date}</span>
                  <span>Views: {data.views}</span>
                  <span>Handshakes: {data.handshakes}</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="mt-3 container g-0">
          <Footer />
        </div>
      </div>
      </> : <><Loader /></>}
    </>
  );
};
export default Post_detail;
