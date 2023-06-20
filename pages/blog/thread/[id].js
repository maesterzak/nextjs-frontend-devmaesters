import styles from "./mainthread.module.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Image from "next/image";
import Head from "next/head";
import { API_URL, NEXT_MODE } from "../../../config";
import useSWR, { mutate } from "swr";
import Loader from "../../../components/Loader";
import dompurify from "isomorphic-dompurify";
import "highlight.js/styles/agate.css";
import { useEffect } from "react";
import Categories from "../../../components/blog_components/categories/Categories";
import CreateThread from "../../../components/blog_components/threads/CreateThread";
import SuccessAlert from "../../../components/blog_components/alerts/successAlert";
import SimilarContent from "../../../components/blog_components/similar_content";

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/all-threads/`);

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

export async function getStaticProps(context) {
  const id = context.params.id;

  const res = await fetch(`${API_URL}/blog/thread-detail/` + id + "/");
  const url = `${API_URL}/blog/thread-detail/` + id + "/";

  const thread = await res.json();
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }

  return {
    props: { orig: orig, url: url, thread: thread },
    revalidate: 60,
  };
}

const fetcher = (...args) => fetch(...args).then((response) => response.json());
function Blog_chats({ orig, url, thread }) {
  const hljs = require("highlight.js");
  useEffect(() => {
    hljs.highlightAll();
    hljs.configure({ ignoreUnescapedHTML: true });
  });

  const [S_Alert, setS_Alert] = useState(false);
  const [W_Alert, setW_Alert] = useState(false);
  const alertToggler = (e) => {

    if (e === 'success') {
      setS_Alert(true)
      setTimeout(() => {
        setS_Alert(false);
      }, 7000)
    }
  };
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
    mutate(url);
    alertToggler('success')
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

  };



  const { data, error } = useSWR(url, fetcher, {
    fallbackData: thread,
    revalidateOnFocus: false,
  });
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };

  if (error) return <>{error}</>;
  const sanitizer = dompurify.sanitize;
  return (
    <>
      {data.threads ? (
        <>
          <Head>
            <title>{data.threads.title}</title>
            <meta
              name="description"
              content={sanitizer(truncate(data.threads.description))}
            />
            <meta property='og:title' content='DEVMAESTERS THREAD' />
            <meta property='og:image' content='/images/devmaesters-link-image.png' />
            <meta property='og:description' content={sanitizer(truncate(data.threads.description))} />

          </Head>
          <div>
            <Navbar loc="blog" />

            <div className="container mt-3 position-relative">

              {S_Alert ?
                <SuccessAlert type="Message" /> : ''}

              <div className={`sticky-top d-flex  justify-content-end top-2 ${styles.thread_comment}`}>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal"

                  className="comment-button mt-3 d-block d-sm-none"
                >
                  <FontAwesomeIcon
                    size="2x"
                    className="faComments"
                    icon={faComments}
                  />
                </button>
              </div>

              <div className="row">
                <div className="col-12 col-md-9">
                  <main>
                    <div className="card mb-3">
                      <div className="card-header">
                        <div className="card-title">
                          <h1 className="h3">{data.threads.title}</h1>
                        </div>
                        <div
                          className={`card-description`}
                          dangerouslySetInnerHTML={{
                            __html: sanitizer(data.threads.description),
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* thread messages */}
                    {data.threads.thread_messages.map(function (message, id) {
                      return (
                        <div className="card mb-3" key={id}>
                          <div className="row g-0">
                            <div className="col-2 p-1 col-md-1">
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
                            <div className="col-10 p-1 col-md-11">
                              <div className="h6">
                                <b>{message.name}</b>
                              </div>
                              <div className="text-muted">
                                {message.date_created}
                              </div>
                            </div>
                            <div
                              className="col-12 card-body"
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(message.body),
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}

                    {/* end of thread mesages */}

                    {/* message modal */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Add a new message
                            </h5>

                            <button
                              type="button"
                              className="comment-button"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              <FontAwesomeIcon className="faComments" size={"2x"} icon={faTimes} />
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="h-100 ">
                              <form
                                onSubmit={threadchat_handle}
                                className={`d-flex flex-wrap justify-content-center ${styles.thread_form}`}
                              >
                                <input
                                  id="thread_id"
                                  name="thread_id"
                                  className="d-none"
                                  defaultValue={data.threads.id}
                                ></input>
                                <div className="form-group w-100">
                                  <input
                                    type="text"
                                    className={`form-control w-100 ${styles.input}`}
                                    id="thread_name"
                                    name="thread_name"
                                    placeholder="Enter name"
                                  />
                                </div>
                                <br />
                                <span className={`text-light`}>Select image</span>
                                <br />
                                <div className="form-group form-check-inline d-flex flex-wrap w-80">
                                  <div className="form-check">
                                    <input
                                      className={`form-check-input ${styles.input}`}
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
                                      className={`form-check-input ${styles.input}`}
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
                                      className={`form-check-input ${styles.input}`}
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
                                      className={`form-check-input ${styles.input}`}
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
                                      className={`form-check-input ${styles.input}`}
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
                                      className={`form-check-input ${styles.input}`}
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
                                    className={`form-control h-100 ${styles.input}`}
                                    id="thread_body"
                                    name="thread_body"
                                    placeholder="Enter message"
                                  />
                                </div>
                                <br />
                                <input
                                  className="btn button mt-3 mb-3"
                                  type="submit"
                                  value="Submit"
                                  data-bs-dismiss="modal"
                                  aria-label="Submit"
                                />
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer text-muted">
                            <span>Thanks for contributing</span>

                          </div>
                        </div>
                      </div>
                    </div>
                    {data.similar_content.length === 0 ? '' :
                      <SimilarContent data={data.similar_content} />}

                    {/* end of message modal */}
                  </main>
                </div>

                <div className="col-12 col-md-3">
                  <div className="card mb-3 d-none d-md-block">
                    <div className="card-header">
                      <h4>Add Message</h4>
                    </div>
                    <div className="card-body">
                      <span>
                        Click on the button below to add a new message to this
                        thread
                      </span>
                      <button

                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        className="btn button d-none d-md-block"
                      >
                        Add Message
                      </button>
                    </div>
                  </div>

                  <div className="card mb-3">
                    <div className="card-header">
                      <h4>Tags</h4>
                    </div>
                    {data.tags ?
                      <div className="card-body">
                        <div className="d-grid w-100">
                          <div>
                            <>
                              {data.tags?.map(function (tag, id) {
                                return (

                                  <span key={id}> <a href="#">#</a>{tag.name}</span>

                                );
                              })}
                            </>
                          </div>

                        </div>
                      </div> : <div className="text-center">No Tags</div>}
                  </div>


                  <div className="card mb-3">
                    <div className="card-header">
                      <h4>Thread detail</h4>
                    </div>
                    <div className="card-body">
                      <div className="d-grid w-100">
                        <div>
                          {data.threads.status ? (
                            <span>Satus: Open</span>
                          ) : (
                            <span>Status: Close</span>
                          )}
                        </div>
                        <span>Messages: {data.threads.thread_messages.length}</span>
                        <span>Started: {data.threads.started}</span>
                      </div>
                    </div>
                  </div>
                  {/* <CreateThread /> */}

                  {/* <Categories /> */}
                </div>
              </div>
            </div>


            <div className="mt-3">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}

export default Blog_chats;
