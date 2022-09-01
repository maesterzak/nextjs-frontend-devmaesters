import Navbar from "../../components/navbar/Navbar";
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
  
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function PortfolioContacts() {
  // const [mini_nav, setMini_nav] = useState(false);
  // const ToggleMiniNav = () => {
  //   setMini_nav(!mini_nav);
  // };
  

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
          developer from Nigeria who loves developing softwares and learning new frameworks and langauges. Click link to see my contact information."
        />
        <meta property='og:title' content='Abubakar Zakari'/>
        <meta property='og:image' content='//media.example.com/ 1234567.jpg'/>
        
        
      </Head>
      <Navbar loc="portfolio" />

      <div className="container mt-3">
        <div>
          <div className=" row d-flex justify-content-center mt-3 mb-3">
            <div className="col-11 col-md-7 d-flex justify-content-between">
              <Link href={"/portfolio"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>Home</button>
              </Link>
              <Link href={"/portfolio/projects"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>Projects</button>
              </Link>
              <Link href={"/portfolio/skills"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>Skills</button>
              </Link>
              <Link href={"/portfolio/contact"} passHref>
                <button className={`btn active-btn ${styles.nav_btn}`}>Contact</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-header">Contacts</div>
          <div className="card-body">
            <div className="row d-flex justify-content-center flex-wrap">
              <div className="col-12 col-md-8">
                <div className="row">
                  <div
                    className={`col-12 col-md-5  mb-3 body-color`}
                  >
                    <div className="d-flex justify-content-center mt-3">
                      <FontAwesomeIcon size={"1x"} icon={faPhone} />
                    </div>
                    <div className="card-body">
                      <div
                        className={` col-12 col-lg-12 d-flex flex-wrap justify-content-center align-items-center ${styles.contacts_sub_container2}`}
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
                    className={`col-12 col-md-5 offset-md-2 mb-3 body-color`}
                  >
                    <div className="d-flex justify-content-center mt-3">
                      <FontAwesomeIcon size={"1x"} icon={faWhatsapp} />
                    </div>
                    <div className="card-body d-flex justify-content-center ">
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
                  <div
                    className={`col-12 col-md-5 mb-3 body-color`}
                  >
                    <div className="d-flex justify-content-center mt-3">
                      <FontAwesomeIcon size={"1x"} icon={faEnvelope} />
                    </div>
                    <div className="text-center mt-2 mb-2">
                      abubakarzakari1703@gmail.com
                    </div>
                  </div>
                  <div
                    className={`col-12 col-md-5 offset-md-2 body-color`}
                  >
                    <div className="d-flex justify-content-center mt-2">
                      <FontAwesomeIcon size={"1x"} icon={faFacebook} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <Link href={"https://web.facebook.com/devmaesters/"}>
                        devMaesters
                      </Link>
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
