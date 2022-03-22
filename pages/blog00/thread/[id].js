import styles from "../blog_home.module.css";
import Footer from "../blog_components/Footer";
import Navbar from "../blog_components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Image from "next/image";
import Head from "next/head";
import { API_URL, NEXT_MODE } from "../../../config";
import useSWR, { mutate } from "swr";
import Loader from "../../components/Loader";
import dompurify from "isomorphic-dompurify";
import 'highlight.js/styles/agate.css'
import { useEffect } from "react";


export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/threads/`);
  const data = await res.json();

  const paths = data.map((thread) => {
    return {
      params: { id: thread.id.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
  
};

export async function getStaticProps(context){
  
  const id = context.params.id;

  const res = await fetch(`${API_URL}/blog/thread-detail/` + id + "/");
  const url = `${API_URL}/blog/thread-detail/` + id + "/"

  const thread = await res.json();
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }

  return {
    props: { orig: orig, url:url, thread:thread }, revalidate:60
    
  };
}


const fetcher = (...args)=> fetch(...args).then((response) => response.json())
function Blog_chats({  orig, url, thread }) {
  const hljs = require('highlight.js');
  useEffect(()=>{
    hljs.highlightAll()
  })
  const createTask = async (activeitem) => {
    await fetch(`${API_URL}/blog/message-create/`, {
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
    // alert("Message added");
    mutate(url)
  };

  const threadchat_handle = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    
    const activeitem = {
      name: form_values.thread_name,
      body: form_values.thread_body,
      thread: form_values.thread_id,
      profile_image_value: form_values.chat_image,
    };

    createTask(activeitem);
    e.target.reset();
    ToggleMessagemodal();
  };

  const [MessageModal, SetMessagemodal] = useState(false);
  const ToggleMessagemodal = () => {
    SetMessagemodal(!MessageModal);
  };

  
  
  const {data, error} = useSWR(url, fetcher,{fallbackData:thread})
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  
  if (error) return <>{error}</>
  const sanitizer = dompurify.sanitize
  return (
    <>
      {data ? <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={sanitizer(truncate(data.description))} />
        
      </Head>
      <div>
        <Navbar
          background="white"
          links="white"
          icon="white"
          header_color="white"
        />
        
        <div className="container">
          <div className="sticky-top d-flex  justify-content-end top-2">
            <button
              onClick={ToggleMessagemodal}
              className="btn t-3 d-block d-sm-none"
            >
              <FontAwesomeIcon
                size="2x"
                style={{ color: "royalblue" }}
                icon={faComments}
              />
            </button>
          </div>
          <div className="row position-relative">
            <div
              className={`col-12 col-md-3 p-3 d-grid align-items-between order-last sticky-md-top  ${styles.threads_leftbar}`}
            >
              <div className={`row ${styles.row_background}`}>
                <div className="d-none d-md-block ">
                  <h2>Add a new message</h2>
                  <span>
                    Click on the button below to add a new message to this
                    thread
                  </span>
                  <button
                    onClick={ToggleMessagemodal}
                    className="btn btn-outline-primary d-none d-md-block"
                  >
                    {MessageModal ? 
                    'Close Modal':'Add Message'}
                  </button>
                </div>
              </div>
              <br />
              <div className="col-12 bg-light p-3">
                <div
                  className={`d-flex justify-content-center mb-2 + ${styles.header_label} + ${styles.header_label_color1}`}
                >
                  <h1 className={`text-center + ${styles.header_label_text}`}>
                    Thread detail
                  </h1>
                </div>
                <div className="d-grid w-100">
                  <div>
                    {data.status ? (
                      <span>Satus: Open</span>
                    ) : (
                      <span>Status: Close</span>
                    )}
                  </div>
                  <span>Messages: {data.thread_messages.length}</span>
                  <span>Started: {data.started}</span>
                </div>
              </div>
            </div>
            <div className={`col-12 col-md-6 p-3 ${styles.threads_body}`}>
              <div className={`row d-grid p-3 ${styles.row_background}`}>
                <h1 style={{"fontSize":"medium"}}><b>{data.title}</b></h1>

                <div className="col-12 bg-light">
                  <span dangerouslySetInnerHTML={{
                                  __html: sanitizer(data.description),
                                }}></span>
                </div>

                <br />
                <h3>Messages</h3>

                {data.thread_messages.map(function (message, id) {
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
                        <div dangerouslySetInnerHTML={{
                                  __html: sanitizer(message.body),
                                }}></div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span><b>{message.name}</b></span>
                          <span><b>{message.date_created}</b></span>
                          </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`col-12 col-md-3 p-3 order-first sticky-md-top ${styles.threads_rightbar}`}
            >
              <div
                className={`row mt-3 p-3 sticky-top + ${styles.row_background}`}
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
                <div
                  className={`col-6 col-md-6 d-none d-md-block + ${styles.add_box1}`}
                >
                  k
                </div>
                <div
                  className={`col-6 col-md-6 d-none d-md-block + ${styles.add_box1}`}
                >
                  k
                </div>
              </div>
            </div>

            <div
              className={
                MessageModal
                  ? `d-flex justify-content-center p-3 ${styles.dark_overlay2}`
                  : "d-none"
              }
            >
              <div
                className={`row g-0 align-items-center ${styles.thread_add_message_box}`}
              >
                <div className="col-9 col-md-4 w-100 h-100 p-3 ">
                  <form
                    onSubmit={threadchat_handle}
                    className={`d-flex flex-wrap justify-content-center ${styles.thread_form}`}
                  >
                    <input
                      id="thread_id"
                      name="thread_id"
                      className="d-none"
                      defaultValue={data.id}
                    ></input>
                    <div className="form-group w-100">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="thread_name"
                        name="thread_name"
                        placeholder="Enter name"
                      />
                    </div>
                    <br />
                    <span>Select image</span>
                    <br />
                    <div className="form-group form-check-inline d-flex flex-wrap w-80">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="chat_image"
                          id="thread-form-image1"
                          defaultChecked
                          defaultValue={"chat_image_1"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="thread-form-image1"
                        >
                          <Image
                            alt="thread-image-select-1"
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
                          id="thread-form-image2"
                          defaultValue={"chat_image_2"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="thread-form-image2"
                        >
                          <Image
                            alt="thread-image-select-2"
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
                          id="thread-form-image3"
                          defaultValue={"chat_image_3"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="thread-form-image3"
                        >
                          <Image
                            alt="thread-image-select-3"
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
                          id="thread-form-image4"
                          defaultValue={"chat_image_4"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="thread-form-image4"
                        >
                          <Image
                            alt="thread-image-select-4"
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
                          id="thread-form-image5"
                          defaultValue={"chat_image_5"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="thread-form-image5"
                        >
                          <Image
                            alt="thread-image-select-5"
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
                          id="thread-form-image6"
                          defaultValue={"chat_image_6"}
                        />
                        <label
                          className={`form-check-label ${styles.thread_message_image}`}
                          htmlFor="thread-form-image6"
                        >
                          <Image
                            alt="thread-image-select-6"
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
                        id="thread_body"
                        name="thread_body"
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
}

export default Blog_chats;
