import Navbar from "../../components/navbar/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import {
  Grid,
  Spacer,
  Input,
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
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import HeadComponent from "../../components/HeadComponent";

function PortfolioContacts() {

  const [submitDet, setSubmitDet] = useState({
    type: undefined,
  });

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

      <HeadComponent title="Abubakar Zakari" MainImage="/images/owner_images/abubakar02.jpeg" description="Hello, my name is Abubakar Zakari. I am a budding fullstack 
          developer from Nigeria who loves developing softwares and learning new frameworks and langauges." />
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
                    zakariabubakar1703@gmail.com
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
        </div>
      </div>
    </>
  );
}
export default PortfolioContacts;
