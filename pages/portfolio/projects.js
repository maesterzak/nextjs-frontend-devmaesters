import Navbar from "../Blog/blog_components/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faVideo,
  faAngleDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PortfolioProject() {
  const [mini_nav, setMini_nav] = useState(false);
  const ToggleMiniNav = () => {
    setMini_nav(!mini_nav);
  };
  return (
    <>
      <div className={`${styles.main}`}>
        <div className="d-none d-lg-block">
          <Image
            className={`${styles.background}`}
            alt="background-2"
            width={"100%"}
            height={"80%"}
            layout="responsive"
            src="/svg/portfolio-background-wave.svg"
          />
        </div>
        <div
          className="d-lg-none d-grid align-items-end"
          style={{ height: "110%" }}
        >
          <Image
            alt="background-1"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src="/svg/portfolio-background-wave.svg"
          />
        </div>
        <div style={{ position: "absolute", top: "0vh", width: "100vw" }}>
          <Navbar
            background="black"
            links="white"
            icon="white"
            header_color="white"
          />

          <div className="d-md-none container position-relative d-flex justify-content-end mt-2">
            <button
              onClick={ToggleMiniNav}
              className={`p-1 btn d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
            >
              <span>Projects</span> <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {mini_nav ? (
              <>
                <div
                  className={`d-flex justify-content-center flex-wrap position-absolute ${styles.mini_nav_dropdown}`}
                >
                  <div className="p-2 w-100 d-flex justify-content-end">
                    <div onClick={ToggleMiniNav} className="p-2 btn">
                      <FontAwesomeIcon
                        style={{ color: "#7b1fa2" }}
                        size={"2x"}
                        icon={faTimes}
                      />
                    </div>
                  </div>

                  <Link href={"/portfolio"} passHref>
                    <button
                      className={`p-1 mb-3 mt-3 btn d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
                    >
                      Home
                    </button>
                  </Link>
                  <Link href={"/portfolio/skills"} passHref>
                    <button
                      className={`p-1 btn mb-3 d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
                    >
                      Skills
                    </button>
                  </Link>
                  <Link href={"/portfolio/contact"} passHref>
                    <button
                      className={`p-1 btn mb-3 d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
                    >
                      Contact
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="d-none d-md-block">
            <div className=" row d-flex justify-content-center mt-3">
              <div className="col-7 d-flex justify-content-between">
                <Link href={"/portfolio"} passHref>
                  <button className={`btn ${styles.portfolio_button} `}>
                    HOME
                  </button>
                </Link>
                <Link href={"/portfolio/projects"} passHref>
                  <button
                    className={`btn ${styles.portfolio_button} ${styles.active}`}
                  >
                    PROJECTS
                  </button>
                </Link>
                <Link href={"/portfolio/skills"} passHref>
                  <button className={`btn ${styles.portfolio_button}`}>
                    SKILLS
                  </button>
                </Link>
                <Link href={"/portfolio/contact"} passHref>
                  <button className={`btn ${styles.portfolio_button} `}>
                    CONTACT
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`d-flex justify-content-center flex-wrap mt-4 ${styles.project_container}`}
          >
            <div
              className={`row mb-3 flex-wrap ${styles.project_sub_container} d-flex justify-content-center`}
            >
              <div className={`col-12 col-md-6  ${styles.project_info}`}>
                <div className={`d-flex justify-content-center mb-2`}>
                  <h5
                    className={`mt-2 text-center w-50 ${styles.project_header}`}
                  >
                    project title
                  </h5>
                </div>
                <span className={`mb-2 ${styles.project_subheader}`}>
                  Stack
                </span>
                <div className={`text-center ${styles.project_stack}`}>
                  This project was created using Django framework. It uses css,
                  html, javascript, bootstrap and ckeditor. It was deployed and
                  tested successfully on Heroku and vercel.
                </div>
                <span className={`mb-2 ${styles.project_subheader}`}>
                  Description
                </span>
                <div className={`text-center mb-2 ${styles.project_stack}`}>
                  This is a Django blog that shows crud(create, read , update
                  and delete) functionalities. It has three pages; Homepage
                  where the blog posts can be viewed Post_detatil page where
                  more info about blog posts can be viewed Dashboard page where
                  users can see all the current posts on the site, delete any
                  post they want, add new posts on the same page via a add post
                  modal, edit post on the same page via an edit post modal. More
                  info about the project can be gotten from the project video.
                </div>
                <div className={`d-flex justify-content-end mb-2`}>
                  <button
                    className={`btn ${styles.repo_button} d-flex justify-content-between`}
                  >
                    repo <FontAwesomeIcon size={"1x"} icon={faGithub} />
                  </button>
                </div>
              </div>
              <div
                className={`col-12 flex-wrap col-md-6 ${styles.project_video} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon size={"3x"} color="white" icon={faVideo} />
              </div>
            </div>

            <div
              className={`row mb-3 ${styles.project_sub_container} d-flex justify-content-center`}
            >
              <div className={`col-12 col-md-6  ${styles.project_info}`}>
                <div className={`d-flex justify-content-center mb-2`}>
                  <h5
                    className={`mt-2 text-center w-50 ${styles.project_header}`}
                  >
                    project title
                  </h5>
                </div>
                <span className={`mb-2 ${styles.project_subheader}`}>
                  Stack
                </span>
                <div className={`text-center ${styles.project_stack}`}>
                  This project was created using Django framework. It uses css,
                  html, javascript, bootstrap and ckeditor. It was deployed and
                  tested successfully on Heroku and vercel.
                </div>
                <span className={`mb-2 ${styles.project_subheader}`}>
                  Description
                </span>
                <div className={`text-center mb-3 ${styles.project_stack}`}>
                  This is a Django blog that shows crud(create, read , update
                  and delete) functionalities. It has three pages; Homepage
                  where the blog posts can be viewed Post_detatil page where
                  more info about blog posts can be viewed Dashboard page where
                  users can see all the current posts on the site, delete any
                  post they want, add new posts on the same page via a add post
                  modal, edit post on the same page via an edit post modal. More
                  info about the project can be gotten from the project video.
                </div>
              </div>
              <div
                className={`col-12 col-md-6 ${styles.project_video} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon size={"3x"} color="white" icon={faVideo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PortfolioProject;
