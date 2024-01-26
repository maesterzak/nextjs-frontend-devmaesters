import styles from "./comment.module.css";
import Image from "next/image";
import { API_URL } from "../../../config";
import { mutate } from "swr";
import SuccessAlert from "../alerts/successAlert";
import { useState } from "react";

function CommentForm(props) {
  const data = props;
  const [S_Alert, setS_Alert] = useState(false);
  const [W_Alert, setW_Alert] = useState(false);
  const alertToggler = (e) => {
    
    if(e === 'success' ){
      setS_Alert(true)
      setTimeout(() => {
                setS_Alert(false);
            }, 7000)
    }
  };

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
    
    mutate(props.url);
    alertToggler('success')

  };

  const threadchat_handle = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);

    if(form_values.comment_name == "Admin" | form_values.comment_name == "admin" | form_values.comment_name =="Administrator"){
      

    }
    else{

    const activeitem = {
      name: form_values.comment_name,
      body: form_values.comment_body,
      post: form_values.post_id,
      profile_image_value: form_values.chat_image,
    };

    createComment(activeitem);
  }

    e.target.reset();
    
  };

  

  return (
    <>
      {S_Alert ? 
      <SuccessAlert  type="Comment" /> :''}
      <div className={`col-12 mb-3 card ${styles.thread_comment}`}>
        <div className="card-header header-main mb-3">
          <h5>Comment</h5>
        </div>
        <div className={`card-body`}>
          <form
            onSubmit={threadchat_handle}
            className={`d-flex flex-wrap justify-content-center ${styles.thread_form}`}
          >
            <input
              id="post_id"
              name="post_id"
              className="d-none"
              defaultValue={data.data.id}
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
            <div
              className={`form-group form-group-lg w-100 ${styles.textarea_div}`}
            >
              <textarea
                type="text"
                className={`form-control h-100  ${styles.textarea}`}
                id="comment_body"
                name="comment_body"
                placeholder="Enter message"
              />
            </div>
            <br />
            <input className="btn button mt-2" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
export default CommentForm;
