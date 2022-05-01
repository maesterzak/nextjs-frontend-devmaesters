import styles from "./thread.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTimes } from "@fortawesome/free-solid-svg-icons";

function CreateThread() {
  return (
    <>
      <div className="card">
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
        class="modal fade "
        id="createThread"
        tabindex="-1"
        aria-labelledby="createThreadLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content card">
            <div class="modal-header">
              <h5 class="modal-title" id="createThreadLabel">
                Create Thread
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
            <div class="modal-body">
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
              </form>
            </div>
            <div class="modal-footer">
              <span>This feauture is still being worked on</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateThread;
