import Navbar from "../../components/navbar/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {
  Text,
  Grid,
  Spacer,
  Card,
  Col,
  Input,
  Container,
  Loading,
  StyledLoadingContainer,
  Textarea,
} from "@nextui-org/react";
import { MyStyledButton } from "../../components/uiComponents/buttons/myStyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faCopy, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function PortfolioContacts() {
  // const [mini_nav, setMini_nav] = useState(false);
  // const ToggleMiniNav = () => {
  //   setMini_nav(!mini_nav);
  // };

  const [tooltip1, setTooltip1] = useState(false);
  const [tooltip2, setTooltip2] = useState(false);
  const [tooltip3, setTooltip3] = useState(false);
  const [tooltip4, setTooltip4] = useState(false);

  const [submitDet, setSubmitDet] = useState({
    type: undefined,
  });
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
  const SendMessage = (params) => {
    const templateParams = {
      to_name: "Abubakar Zakari",
      notes: "Message from Portfolio",
      from_name: params.name,
      message: params.message,
      email: params.email,
      name: params.name,
      organistaion: params.organistaion,
    };

    emailjs
      .send(
        "service_dpjmqsh",
        "template_ps49c1n",
        templateParams,
        "jeBPuKHuxwkms83n1"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitDet({
            type: "success",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          setSubmitDet({
            type: "error",
          });
        }
      );
  };
  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    SendMessage(form_values);
    e.target.reset();
  };

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
        <meta property="og:title" content="Abubakar Zakari" />
        <meta
          property="og:image"
          content="/images/owner_images/abubakar02.jpeg"
        />
        <meta
          property="og:description"
          content="This is my portfolio page within which you can access links to all my projects"
        />
      </Head>
      <Navbar loc="portfolio" />

      <div className="container mt-3">
        <div>
          <div className=" row g-0 shadow-lg p-3 d-flex justify-content-center mt-3 mb-5">
            <div className="col-11 col-md-7 d-flex justify-content-between">
              <Link href={"/portfolio"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>Home</button>
              </Link>
              <Link href={"/portfolio/projects"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>
                  Projects
                </button>
              </Link>
              <Link href={"/portfolio/skills"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>
                  Skills
                </button>
              </Link>
              <Link href={"/portfolio/contact"} passHref>
                <button className={`btn active-btn ${styles.nav_btn}`}>
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="shadow-lg mt-3">
          {/* <div className="card-header">Contacts</div> */}
          <div className="">
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <Grid className="p-3" direction="column">
                  <h4>DROP LINE</h4>

                  <form onSubmit={submitHandler} className="row">
                    <div className="col-12 mt-1 mb-1">
                      {/* <label>Name</label> */}
                      <Input
                        name="name"
                        required
                        css={{ width: "100%" }}
                        type={"text"}
                        placeholder="Name"
                      />
                    </div>

                    <div className="col-12 mt-1 mb-1">
                      {/* <label>Email</label> */}
                      <Input
                        name="email"
                        required
                        css={{ width: "100%" }}
                        type={"email"}
                        placeholder="Email"
                      />
                    </div>

                    <div className="col-12 mt-1 mb-1">
                      {/* <label>Phone Number</label> */}
                      <Input
                        name="organistaion"
                        required
                        css={{ width: "100%" }}
                        type={"text"}
                        placeholder="Your Organistaion "
                      />
                    </div>

                    <div className="col-12 mt-1 mb-1 d-grid">
                      {/* <label>Message</label> */}
                      <Textarea required name="message"></Textarea>
                      <Spacer />
                      <MyStyledButton
                        type={"submit"}
                        // disabled= {params.disabled ?? false}
                        auto
                        css={{
                          height: "30px",
                          width: "100%",
                          fontSize: "auto",
                        }}
                        className="button"
                        size="mysize"
                        // color="#ff8c00"
                      >
                        SEND
                      </MyStyledButton>
                    </div>
                  </form>
                  {submitDet.type == "error" && (
                    <p className="text-danger">Something went wrong</p>
                  )}
                  {submitDet.type == "success" && (
                    <p className="text-success">Message Added</p>
                  )}
                </Grid>
              </div>
              <div className="col-12 col-md-6">
                <div className="p-3">
                  <h4>CONTACT INFORMATION</h4>
                  <p>Thank you for checking out my portfolio.</p>
                  <div className="d-flex gap-2 mt-3 align-items-center">
                    <FontAwesomeIcon size={"2x"} icon={faLinkedin} />
                    <Link
                      href={
                        "https://linkedin.com/in/abubakar-zakari-05711822a/"
                      }
                    >
                      linkedin.com/in/abubakar-zakari-05711822a/
                    </Link>
                  </div>
                  <div className="d-flex gap-2 mt-3 align-items-center">
                    <FontAwesomeIcon size={"2x"} icon={faPhone} />
                    +2348062257480
                  </div>
                  <div className="d-flex gap-2 mt-3 align-items-center">
                    <FontAwesomeIcon size={"2x"} icon={faWhatsapp} />
                    +2348062257480
                  </div>
                  <div className="d-flex gap-2 mt-3 align-items-center">
                    <FontAwesomeIcon size={"2x"} icon={faEnvelope} />
                    abubakarzakari1703@gmail.com
                  </div>
                  <div className="d-flex gap-2 mt-3 align-items-center">
                    <FontAwesomeIcon size={"2x"} icon={faTwitter} />
                    <Link href={"https://twitter.com/maesterzak01"}>
                      @maesterzak01
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card-body">
            <div className="row d-flex justify-content-center flex-wrap">
              <div className="col-12 col-md-8">
                <div className="row">
                  <div className={`col-12 col-md-5  mb-3 body-color`}>
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
                  <div className={`col-12 col-md-5 mb-3 body-color`}>
                    <div className="d-flex justify-content-center mt-3">
                      <FontAwesomeIcon size={"1x"} icon={faEnvelope} />
                    </div>
                    <div className="text-center mt-2 mb-2">
                      abubakarzakari1703@gmail.com
                    </div>
                  </div>
                  <div className={`col-12 col-md-5 offset-md-2 body-color`}>
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
          </div> */}
        </div>
      </div>
    </>
  );
}
export default PortfolioContacts;
