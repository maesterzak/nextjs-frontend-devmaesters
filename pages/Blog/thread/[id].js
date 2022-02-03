import styles from "../blog_home.module.css";
import Footer from "../blog_components/Footer";
import Navbar from "../blog_components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faComment,
  faCommentAlt,
  faCommentDots,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { API_URL } from "../../../config";

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
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`${API_URL}/blog/thread-detail/` + id + "/");

  const data = await res.json();

  return {
    props: { thread: data },
  };
};
const orig = `${API_URL}`;

const createTask = async (activeitem) => {
  await fetch(`${API_URL}/blog/message-create/`, {
    method: "POST",

    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(activeitem),
  })
    .then((res) => res.json)
    .then((result) => SVGMetadataElement(result.rows))
    .catch((err) => console.log(err));
  alert("Message added");
};

function Blog_chats({ thread }) {
  const threadchat_handle = (event) => {
    event.preventDefault();
    const activeitem = {
      name: event.target.name.value,
      body: event.target.body.value,
      thread: event.target.thread.value,
    };
    createTask(activeitem);
    refreshData();
    event.target.reset();
  };

  const [MessageModal, SetMessagemodal] = useState(false);
  const ToggleMessagemodal = () => {
    SetMessagemodal(!MessageModal);
  };

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <>
      <Head>
        <title>SimpleLIFE | Thread- {thread.title}</title>
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
        <div className="container">
          <div className="sticky-top d-flex  justify-content-end top-3">
            <button onClick={ToggleMessagemodal} className="btn t-3">
              <FontAwesomeIcon
                width={"2em"}
                height={"2em"}
                style={{ color: "royalblue" }}
                icon={faComments}
              />
            </button>
          </div>
          <div className="row position-relative">
            <div
              className={`col-12 col-md-3 p-3 d-grid align-items-between order-last sticky-md-top  ${styles.threads_leftbar}`}
            >
              <div className="row">
                <div className="d-none d-md-block ">
                  <h1>Add a new message</h1>
                  <span>
                    Click on the button below to add a new message to this
                    thread
                  </span>
                  <button
                    onClick={ToggleMessagemodal}
                    className="btn btn-outline-primary d-none d-md-block"
                  >
                    Add Message
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
                    {thread.status ? (
                      <span>Satus: Open</span>
                    ) : (
                      <span>Status: Close</span>
                    )}
                  </div>
                  <span>Messages: 50</span>
                  <span>Started: {thread.started}</span>
                </div>
              </div>
            </div>
            <div className={`col-12 col-md-6 p-3 ${styles.threads_body}`}>
              <div className="row d-grid p-3">
                <h1 className="text-light">{thread.title}</h1>

                <div className="col-12 bg-light">
                  <span>{thread.description}</span>
                </div>

                <br />
                <h3>Messages</h3>

                {thread.thread_messages.map(function (message, id) {
                  return (
                    <div className="row mb-3" key={id}>
                      <div className="col-2" style={{ height: "40px" }}>
                        <div className={`${styles.thread_message_image}`}>
                          <Image
                            layout="responsive"
                            width={70}
                            height={70}
                            src={orig + message.profile_image}
                            alt="message profile"
                          />
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
                className={`row d-flex justify-content-center align-items-center ${styles.thread_add_message_box}`}
              >
                <div className="col-9 col-md-4 w-100 h-80">
                  <form className="d-grid justify-content-center">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-80"
                        id="thread_username"
                        placeholder="Enter name"
                      />
                    </div>
                    <br />
                    <span>Select image</span>
                    <div className="form-group form-check-inline d-flex">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className={`form-check-label ${styles.thread_message_image}`} htmlFor="flexRadioDefault1">
                          <Image alt="thread-image-select" layout="responsive" width={'40px'} height={'40px'} src={'/images/image2.jpg'} />
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label className={`form-check-label ${styles.thread_message_image}`} htmlFor="flexRadioDefault1">
                          <Image alt="thread-image-select1" layout="responsive" width={'40px'} height={'40px'} src={'/images/image2.jpg'} />
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                          checked
                        />
                        <label className={`form-check-label ${styles.thread_message_image}`} htmlFor="flexRadioDefault1">
                          <Image alt="thread-image-select2" layout="responsive" width={'40px'} height={'40px'} src={'/images/image2.jpg'} />
                        </label>
                      </div>
                    </div>
                    <br />
                    <div className="form-group form-group-lg">
                      <textarea
                        type="text"
                        className="form-control form-lg"
                        id="formGroupExampleInput2"
                        placeholder="Enter message"
                      />
                    </div>
                    <br />
                    <input className="btn btn-outline-primary" type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog_chats;
