import Navbar from "../Blog/blog_components/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJava,
  faPython,
  faAngleDown,
  faTimes,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PortfolioSkills() {
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
              <span>Skills</span> <FontAwesomeIcon icon={faAngleDown} />
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
                  <Link href={"/portfolio/projects"} passHref>
                    <button
                      className={`p-1 btn mb-3 d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
                    >
                      Projects
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
                  <button className={`btn ${styles.portfolio_button}`}>
                    PROJECTS
                  </button>
                </Link>
                <Link href={"/portfolio/skills"} passHref>
                  <button
                    className={`btn ${styles.portfolio_button} ${styles.active}`}
                  >
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

          <div className={`row mt-3 d-flex justify-content-center`}>
            <div className={`col-10 col-lg-8 `}>
              <div className="row d-flex justify-content-between">
                <div
                  className={`btn col-3 col-lg-2 ${styles.skills_container}`}
                >
                  <div
                    className={`d-grid justify-content-center align-items-between ${styles.skills_sub_container2}`}
                  >
                    <span>Django blog</span>
                    <button className={`btn ${styles.skills_button}`}>
                      Projects
                    </button>
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center ${styles.skills_sub_container1}`}
                  >
                    <FontAwesomeIcon
                      size={"5x"}
                      className={`${styles.skills_fontawesome}`}
                      icon={faHtml5}
                    />
                  </div>
                </div>

                <div className={`col-3 col-lg-2 ${styles.skills_container}`}>
                  <div
                    className={`d-flex justify-content-center align-items-center ${styles.skills_sub_container1}`}
                  >
                    <FontAwesomeIcon
                      size={"5x"}
                      className={`${styles.skills_fontawesome}`}
                      icon={faJava}
                    />
                  </div>
                  <div
                    className={`d-grid justify-content-center align-items-between ${styles.skills_sub_container2}`}
                  >
                    <span>Django blog</span>
                    <button className={`btn ${styles.skills_button}`}>
                      Projects
                    </button>
                  </div>
                </div>
                <div className={`col-3 col-lg-2 ${styles.skills_container}`}>
                  <div
                    className={`d-flex justify-content-center align-items-center ${styles.skills_sub_container1}`}
                  >
                    <FontAwesomeIcon
                      size={"5x"}
                      className={`${styles.skills_fontawesome}`}
                      icon={faPython}
                    />
                  </div>
                  <div
                    className={`d-grid justify-content-center align-items-between ${styles.skills_sub_container2}`}
                  >
                    <span>Django blog</span>
                    <button className={`btn ${styles.skills_button}`}>
                      Projects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PortfolioSkills;
