import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/react";
import {
  Grid,
  Spacer,
  Input,
  Textarea,
} from "@nextui-org/react";
import {
  faWhatsapp,
  faLinkedin,

  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MyStyledButton } from "../components/uiComponents/buttons/myStyledButton";

import {
  faFacebookSquare, faWhatsappSquare, faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';


import Navbar from "../components/navbar/Navbar";



export default function Home() {
  const router = useRouter()

  const freelanceJobs = [
    "Frontend Developer", "Backend Developer", "Fullstack Developer", "Website Error Debugging", "Bootstrap Website Upgrades", "Website Hosting and Deployment",
    "UI/UX Designer",
  ]
  const freelanceJobs2 = [
    "Web3 Developer", "Web3 Dapp Creator", "Tailwind Setup", "Electron JS Desktop App Developer", "React Native Mobile Developer"
  ]

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
    <div className={styles.container}>
      <Head>
        <title>DEVMAESTERS</title>
        <meta name="description" content="Welcome to devmaesters.com we offer programming tips,tutorials, tricks, freelance web development and coding support." />
        <meta name="keywords" content="programming, nextjs, reactjs, coding, websites, python tutorials, prisma, graphql, django, django rest framework" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar loc="home" />
      <div className={`d-flex justify-content-center align-items-center ${styles.header_container}`}>

        <div className={styles.overlay}>

        </div>


        <div className={`card ${styles.header_card} w-75 p-2 w-lg-50  d-flex justify-content-center align-items-center position-absolute`}>
          <h1 >WELCOME TO <br /> DEVMAESTERS</h1>
          <p>We offer free programming tips,tutorials, tricks and coding support.</p>
          <p>Please follow us on our various social media handles to get notified on latest information</p>
          <div className="d-flex justify-content-between flex-wrap gap-1">

            <button className='btn p-0 m-0' onClick={() => router.push('https://web.facebook.com/devmaesters/')} >
              <FontAwesomeIcon className={`${styles.fontawesome}`} size={"3x"} icon={faFacebookSquare} />
            </button>
            <button disabled className='btn p-0 m-0' onClick={() => router.push('/')} >
              <FontAwesomeIcon className={`${styles.fontawesome}`} size={"3x"} icon={faLinkedin} />
            </button>

            <button className='btn p-0 m-0' onClick={() => router.push('https://api.whatsapp.com/send?phone=+2348062257480')} >
              <FontAwesomeIcon className={`${styles.fontawesome}`} size={"3x"} icon={faWhatsappSquare} />
            </button>
            <button className='btn p-0 m-0' onClick={() => router.push('https://api.whatsapp.com/send?phone=+2348062257480')} >
              <FontAwesomeIcon className={`${styles.fontawesome}`} size={"3x"} icon={faYoutube} />
            </button>


          </div>
          <br />
        </div>


        <div className={`${styles.img_attr}`}>
          <a href="https://lovepik.com/images/png-avatar.html">Avatar Png vectors by Lovepik.com</a>
        </div>

      </div>




      <div className="container">

        <div className="mt-5 card   m-lg-5 shadow-lg ">
          <div className="row">
            <div className="col-12 col-lg-8 order-2 p-4 d-flex justify-content-center align-items-center">
              <div>
                <h2 className="text-center">Blog</h2>
                <p className="text-center">Visit Devmaesters blog to read latest programming tutorials, hints and tricks. Also checkout our
                  thread platform within which you can ask programming questions and get answers to programming errors.
                </p>
                <div className="d-flex justify-content-center">
                  <Link href={'/blog'} passHref><button className="btn button mb-3">Go to Blog</button></Link>
                </div>
              </div>
            </div>
            <div className={`col-12 col-lg-4 order-1`}>
              <div className={`${styles.img_box} relative`}>

                <Image
                  showSkeleton
                  autoResize
                  maxDelay={10000}
                  src="/images/new/devmaesters-blog.gif"
                  alt="Default Image"
                />

              </div>

            </div>
          </div>
        </div>

        {/* <div className="mt-2 card   m-lg-5">
          <div className="row">
            <div className="col-12 col-lg-8 order-2 d-flex justify-content-center align-items-center">
              <div>
                <h2 className="text-center">Mini-Mall</h2>
                <p>Visit DEVMAESTERS Mini-Mall to get access to various programming related products and services.
                </p>
                <div className="d-flex justify-content-center">
                  <Link href={'/blog'} passHref><button disabled className="btn button mb-3">Go to Mini-Mall</button></Link>
                </div>

              </div>
            </div>
            <div className={`col-12 col-lg-4 order-1`}>
              <div className={`bg-light ${styles.img_box} `}>

                <Image
                  showSkeleton
                  autoResize
                  maxDelay={10000}
                  src="/images/home_images/store.png"
                  alt="Default Image"
                />


                <a href="https://lovepik.com/images/png-card.html">Card Png vectors by Lovepik.com</a>
              </div>

            </div>
          </div>
        </div> */}

        {/* <div className="mt-2 card  m-lg-5">
          <div className="row">
            <div className="col-12 col-lg-8 order-2 text-center">
              <h2>Tutorial HUB</h2>
              <p>Visit DEVMAESTERS Tutorial HUB to learn how to code in various programming languages like python, html, css, javascript. Also get
                tutorials on various trending programming frameworks and libraries.
              </p>
              <div className="d-flex justify-content-center">
                <Link href={'/blog'} passHref><button disabled className="btn button mb-3">Comming Soon</button></Link>
              </div>
            </div>
            <div className={`col-12 col-lg-4 order-1`}>
              <div className={`${styles.img_box} `}>
                <Image
                  showSkeleton
                  autoResize
                  maxDelay={10000}
                  src="/images/home_images/tutorial.png"
                  alt="Default Image"
                />

                <a href="https://lovepik.com/images/png-avatars.html">Avatars Png vectors by Lovepik.com</a>
              </div>

            </div>
          </div>
        </div> */}

        <div className="mt-2 m-lg-5 p-4 card shadow-lg mt-3 ">
          <h2>Freelance Services</h2>
          <div className="row g-0">
            <ul className="col-12 col-md-6 d-grid justify-content-center gap-3">
              {freelanceJobs.map((e, index) => {
                return (
                  <li>{e}</li>
                )
              })}


            </ul>
            <ul className="col-12 col-md-6 d-grid justify-content-center gap-3">
              {freelanceJobs2.map((e, index) => {
                return (
                  <li>{e}</li>
                )
              })}


            </ul>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link href={"/portfolio/contact"}><button type="submit" className="button btn">Contact</button></Link>
          </div>



        </div>

        <div className="mt-2  m-lg-5 p-4 card shadow-lg mt-3">
          <div className="row">
            <h2 className="h3">YouTube Channel</h2>
            <p>Please like and subscribe to our youtube channel to keep upto date with our latest programming videos</p>
            <div className="mt-3 mb-2">
              <div className="row g-0 d-flex justify-content-center">

                <div className="col-12 col-md-10">
                  <iframe className="post-video "
                    src='https://www.youtube.com/embed/channel/UCTtHtIyFzxyQtF5P8fBpaew/featured'>
                  </iframe>
                </div>
              </div>
            </div>

          </div>

        </div>




        <div className="shadow-lg m-lg-5 card mt-3">
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
                    <Link href={"https://twitter.com/devmaesters"}>
                      @devmaesters
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>






      <footer className={`text-light text-center ${styles.footer}`}>
        <div> @devmaesters.com</div>
      </footer>
    </div>
  );
}
