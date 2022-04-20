import Navbar from "../blog/blog_components/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import { faAngleDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faCss3,
  faHtml5,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { API_URL, NEXT_MODE } from "../../config";

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}/blog/portfolio-skill/`);

  const data = await response.json();

  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }
  return {
    props: { skills: data, orig: orig },
    revalidate: 10,
  };
};

function PortfolioSkills({ skills, orig }) {
  // const [mini_nav, setMini_nav] = useState(false);
  // const ToggleMiniNav = () => {
  //   setMini_nav(!mini_nav);
  // };
  return (
    <>
      <Head>
        <title>Abubakar Zakari | Skills</title>
        <meta name="keywords" content="Abubakar Zakari" />
        <meta
          name="description"
          content="Hello, my name is Abubakar Zakari. I am a budding fullstack 
          developer from Nigeria with skills in html, css, javascript, next.js, django, drf, bootstrap..."
        />
      </Head>
      <div className={`${styles.main}`}>
        <div className="d-none d-lg-block">
          <Image
            className={`${styles.background}`}
            alt="background-2"
            width={"100%"}
            height={"80%"}
            layout="responsive"
            src="/svg/portfolio-background-wave.svg"
            priority
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
            priority
          />
        </div>
        <div
          className={`${styles.main_sub}`}
          
        >
          <Navbar
            background="black"
            links="white"
            icon="white"
            header_color="white"
            link="portfolio"
          />
          {/* <div className="d-md-none container position-relative d-flex justify-content-end mt-2">
            <button
              onClick={ToggleMiniNav}
              className={`p-1 btn d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
            >
              <span>Skills</span> <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {mini_nav ? (
              <>
                <div
                  className={`d-grid justify-content-center position-absolute ${styles.mini_nav_dropdown}`}
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
          </div> */}
          <div>
            <div className=" row d-flex justify-content-center mt-3">
              <div className="col-11 col-md-7 d-flex justify-content-between">
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

          <div className={`row mt-3 flex-wrap d-flex justify-content-center`}>
            <div className={`col-10 col-lg-8 `}>
              <div className="row flex-wrap d-flex justify-content-between">
                <div
                  className={`col-3 m-2 col-lg-2 ${styles.skills_container}`}
                >
                  {/* <div
                    className={`p-3 d-flex justify-content-center align-items-center ${styles.skills_sub_container1}`}
                  >
                    <FontAwesomeIcon
                      style={{ color: "#ffff" }}
                      size={"4x"}
                      icon={faBootstrap}
                    />
                  </div> */}
                  <div
                    className={`d-grid justify-content-center align-items-center ${styles.skills_sub_container2}`}
                  >
                    <FontAwesomeIcon size={"4x"} icon={faBootstrap} />
                    <span className="w-100 text-center">
                      <b>Bootstrap</b>
                    </span>
                  </div>
                </div>

                <div
                  className={`col-3 m-2 col-lg-2 ${styles.skills_container}`}
                >
                  {/* <div
                    className={`p-3 d-flex justify-content-center align-items-center ${styles.skills_sub_container1}`}
                  >
                    <FontAwesomeIcon
                      style={{ color: "#ffff" }}
                      size={"4x"}
                      icon={faPython}
                    />
                  </div> */}
                  <div
                    className={`d-flex flex-wrap justify-content-center align-items-center ${styles.skills_sub_container2}`}
                  >
                    <FontAwesomeIcon
                      style={{ color: "#5a36ec" }}
                      size={"4x"}
                      icon={faPython}
                    />
                    <span className="w-100 text-center">
                      <b>Python</b>
                    </span>
                  </div>
                </div>

                <div
                  className={`col-3 m-2 col-lg-2 ${styles.skills_container}`}
                >
                  {/* <div
                    className={`p-3 d-flex justify-content-center align-items-center ${styles.skills_sub_container1}`}
                  >
                    <FontAwesomeIcon
                      style={{ color: "#ffff" }}
                      size={"4x"}
                      icon={faCss3}
                    />
                  </div> */}
                  <div
                    className={`d-flex flex-wrap justify-content-center align-items-center ${styles.skills_sub_container2}`}
                  >
                    <FontAwesomeIcon
                      style={{ color: "blue" }}
                      size={"4x"}
                      icon={faCss3}
                    />
                    <span className="w-100 text-center">
                      <b>Css</b>
                    </span>
                  </div>
                </div>
                <div
                  className={`col-3 m-2 col-lg-2 ${styles.skills_container}`}
                >
                  <div
                    className={`d-flex flex-wrap justify-content-center align-items-center ${styles.skills_sub_container2}`}
                  >
                    <FontAwesomeIcon
                      style={{ color: "orange" }}
                      size={"4x"}
                      icon={faHtml5}
                    />
                    <span className="w-100 text-center">
                      <b>Html</b>
                    </span>
                  </div>
                </div>

                {skills.map(function (skill, id) {
                  return (
                    <div
                      key={id}
                      className={`col-3 m-2 col-lg-2 ${styles.skills_container}`}
                    >
                      {/* <div
                        className={`p-3 d-flex justify-content-center align-items-center ${styles.skills_sub_container1}`}
                      >
                        <Image
                          alt="skill_image"
                          width={"100%"}
                          height={"100%"}
                          className={`${styles.skills_image}`}
                          layout="fixed"
                          src={`${orig + skill.svg_image}`}
                        />
                      </div> */}
                      <div
                        className={`d-flex flex-wrap justify-content-center align-items-center ${styles.skills_sub_container2}`}
                      >
                        <Image
                          alt="skill_image"
                          width={"100%"}
                          height={"100%"}
                          className={`${styles.skills_image}`}
                          layout="fixed"
                          src={`${orig + skill.svg_image}`}
                        />
                        <span>
                          <b>{skill.name}</b>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PortfolioSkills;
