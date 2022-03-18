import Navbar from "../Blog/blog_components/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faCopy,
  faEnvelope,
  faAngleDown,
  faMapMarkerAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PortfolioContacts() {
  const [mini_nav, setMini_nav] = useState(false);
  const ToggleMiniNav = () => {
    setMini_nav(!mini_nav);
  };

  const [tooltip1, setTooltip1] = useState(false);
  const [tooltip2, setTooltip2] = useState(false);
  const [tooltip3, setTooltip3] = useState(false);
  const [tooltip4, setTooltip4] = useState(false);

  function copyText(entryText, id) {
    navigator.clipboard.writeText(entryText);

    if (id == 1) {
      const c = setTooltip1;
      c(true);
      setTimeout(() => {
        c(false);
      }, 3000);
    } else if (id == 2) {
      const c = setTooltip2;
      c(true);
      setTimeout(() => {
        c(false);
      }, 3000);
    } else if (id == 3) {
      const c = setTooltip3;
      c(true);
      setTimeout(() => {
        c(false);
      }, 3000);
    } else if (id == 4) {
      const c = setTooltip4;
      c(true);
      setTimeout(() => {
        c(false);
      }, 3000);
    }
  }
  return (
    <>
      <Head>
        <title>Abubakar Zakari | Contact</title>
        <meta name="keywords" content="Abubakar Zakari" />
        <meta
          name="description"
          content="Hello, my name is Abubakar Zakari. I am a budding fullstack 
          developer from Nigeria who loves developing softwares and learning new frameworks and langauges. Check out my portfolio site to see my skills, projects
          and contact information."
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
              <span>Contact</span> <FontAwesomeIcon icon={faAngleDown} />
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
                  <Link href={"/portfolio/skills"} passHref>
                    <button
                      className={`p-1 btn mb-3 d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
                    >
                      Skills
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
                  <button className={`btn ${styles.portfolio_button}`}>
                    SKILLS
                  </button>
                </Link>
                <Link href={"/portfolio/contact"} passHref>
                  <button
                    className={`btn ${styles.portfolio_button} ${styles.active}`}
                  >
                    CONTACT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className={`row mt-3 d-flex justify-content-center`}>
            <div className={`col-10 col-lg-7 `}>
              <div className="row d-flex justify-content-between">
                <div
                  className={`col-12 col-lg-5 mb-3 ${styles.contacts_container}`}
                >
                  <div className="row h-100">
                    <div
                      className={`col-3 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container1}`}
                    >
                      <FontAwesomeIcon size={"1x"} icon={faPhone} />
                    </div>
                    <div
                      className={` col-9 col-lg-12 d-flex flex-wrap justify-content-center align-items-center ${styles.contacts_sub_container2}`}
                    >
                      <div className="position-relative w-100  d-flex justify-content-center align-items-center">
                        PHONE 1: +2348062257480
                        <FontAwesomeIcon
                          id="1"
                          size={"1x"}
                          className={` ${styles.contact_links_icon}`}
                          onClick={() => copyText("+2348062257480", 1)}
                          icon={faCopy}
                        />
                        {tooltip1 ? (
                          <>
                            <div
                              className={`position-absolute ${styles.tooltip}`}
                            >
                              Copied
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="position-relative w-100  d-flex justify-content-center align-items-center">
                        PHONE 2: +2348055030991
                        <FontAwesomeIcon
                          size={"1x"}
                          id="1"
                          className={` ${styles.contact_links_icon}`}
                          onClick={() => copyText("+2348055030991", 2)}
                          icon={faCopy}
                        />
                        {tooltip2 ? (
                          <>
                            <div
                              className={`position-absolute ${styles.tooltip}`}
                            >
                              Copied
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className=" position-relative w-100  d-flex justify-content-center align-items-center">
                        PHONE 3: +2348088098110
                        <FontAwesomeIcon
                          size={"1x"}
                          id="1"
                          className={` ${styles.contact_links_icon}`}
                          onClick={() => copyText("+2348088098110", 3)}
                          icon={faCopy}
                        />
                        {tooltip3 ? (
                          <>
                            <div
                              className={`position-absolute ${styles.tooltip}`}
                            >
                              Copied
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-12 col-lg-5 mb-3 ${styles.contacts_container}`}
                >
                  <div className="row h-100">
                    <div
                      className={`col-3 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container1}`}
                    >
                      <FontAwesomeIcon size={"1x"} icon={faWhatsapp} />
                    </div>
                    <div
                      className={`col-8 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container2}`}
                    >
                      <div className="position-relative w-100 d-flex justify-content-center align-items-center">
                        {" "}
                        +2348062257480
                        <FontAwesomeIcon
                          size={"1x"}
                          className={` ${styles.contact_links_icon}`}
                          onClick={() => copyText("+2348062257480", 4)}
                          icon={faCopy}
                        />
                        {tooltip4 ? (
                          <>
                            <div
                              className={`position-absolute ${styles.tooltip}`}
                            >
                              Copied
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-12 col-lg-5 mb-3 ${styles.contacts_container}`}
                >
                  <div className="row h-100">
                    <div
                      className={`col-3 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container1}`}
                    >
                      <FontAwesomeIcon size={"1x"} icon={faMapMarkerAlt} />
                    </div>
                    <div
                      className={`col-8 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container2}`}
                    >
                      200 UNITS HOUSING ESTATE LOKOJA, KOGI STATE
                    </div>
                  </div>
                </div>

                <div
                  className={`col-12 col-lg-5 mb-3 ${styles.contacts_container}`}
                >
                  <div className="row h-100">
                    <div
                      className={`col-3 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container1}`}
                    >
                      <FontAwesomeIcon size={"1x"} icon={faEnvelope} />
                    </div>
                    <div
                      className={`col-8 d-flex justify-content-center align-items-center col-lg-12 ${styles.contacts_sub_container2}`}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        Angelzak1703@gmail.com
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-12 col-lg-5 mb-3 ${styles.contacts_container}`}
                >
                  <div className="row h-100">
                    <div
                      className={`col-3 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container1}`}
                    >
                      <FontAwesomeIcon size={"1x"} icon={faLinkedin} />
                    </div>
                    <div
                      className={`col-8 d-flex justify-content-center align-items-center col-lg-12 ${styles.contacts_sub_container2}`}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        Empty
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-12 col-lg-5 mb-3 ${styles.contacts_container}`}
                >
                  <div className="row h-100">
                    <div
                      className={`col-3 col-lg-12 d-flex justify-content-center align-items-center ${styles.contacts_sub_container1}`}
                    >
                      <FontAwesomeIcon size={"1x"} icon={faFacebook} />
                    </div>
                    <div
                      className={`col-8 d-flex justify-content-center align-items-center col-lg-12 ${styles.contacts_sub_container2}`}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        Empty
                      </div>
                    </div>
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
export default PortfolioContacts;