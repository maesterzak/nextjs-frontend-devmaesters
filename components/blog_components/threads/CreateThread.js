import styles from "./thread.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CreateThread() {
  return (
    <>
      <div className="card mb-3">
        <h5 className="card-header ">Thread Create</h5>

        <div className="card-body d-flex justify-content-center flex-wrap">
          <span className="w-100 text-center">
            Click the button below to start a new thread for your question
          </span>

          <button
            className="btn button mt-3"
            data-bs-toggle="modal"
            data-bs-target="#createThread"
          >
            Ask A Question
          </button>
        </div>
      </div>

      {/* create thread modal*/}

      <div
        className="modal fade "
        id="createThread"
        tabIndex="-1"
        aria-labelledby="createThreadLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content card">
            <div className="modal-header">
              <h5 className="modal-title" id="createThreadLabel">
                Create Thread
              </h5>
              <button
                type="button"
                className="comment-button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon
                  className="faComments"
                  size={"2x"}
                  icon={faTimes}
                />
              </button>
            </div>
            <div className="modal-body">
              <form
                className={`d-flex flex-wrap justify-content-center ${styles.thread_form}`}
              >
                <div className="form-group w-100">
                  <input
                    type="text"
                    className={`form-control w-100 ${styles.input}`}
                    id="thread_name"
                    name="thread_name"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group w-100">
                  <input
                    type="email"
                    className={`form-control w-100 ${styles.input}`}
                    id="thread_email"
                    name="thread_email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group w-100">
                  <input
                    type="text"
                    className={`form-control w-100 ${styles.input}`}
                    id="thread_title"
                    name="thread_title"
                    placeholder="Enter question title"
                  />
                </div>
                <div className="form-group form-group-lg w-100 h-50">
                  <textarea
                    type="text"
                    className={`form-control h-100 ${styles.input}`}
                    id="thread_description"
                    name="thread_description"
                    placeholder="Enter question description"
                  />
                </div>

                <input className="btn button mt-1" type="submit" value="Submit" />
              </form>
            </div>
            <div className="modal-footer">
              <span>This feauture is still being worked on</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateThread;
