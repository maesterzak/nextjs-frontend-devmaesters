import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/react";

import {
    faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin, faYoutube
  } from "@fortawesome/free-brands-svg-icons";
import {useRouter}  from 'next/router';


import Navbar from "../components/navbar/Navbar";



export default function Home() {
  const router = useRouter()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>devmaesters</title>
        <meta name="description" content="Welcome to devmaesters.com we offer programming tips,tutorials, tricks, freelance web development and coding support." />
        <meta name="keywords" content="programming, nextjs, reactjs, coding, websites, python tutorials, prisma, graphql, django, django rest framework" />
        <link rel="icon" href="/images/logo.png" />
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar loc="home"  />
      <div className = {`d-flex justify-content-center align-items-center ${styles.header_container}`}>
        <div className={`card ${styles.header_card} w-75 p-2 w-lg-50  d-flex justify-content-center align-items-center position-absolute`}>
          <h1 >WELCOME TO <br/> DEVMAESTERS</h1>
          <p>We offer free programming tips,tutorials, tricks and coding support.</p>
          <p>Please follow us on our various social media handles to get notified on latest information</p>
          <div className="d-flex justify-content-between flex-wrap gap-1">
                            
                            <button className='btn p-0 m-0' onClick={() => router.push('https://web.facebook.com/devmaesters/')} >
                                <FontAwesomeIcon className={`${styles.fontawesome}`}   size={"3x"}  icon={faFacebookSquare} />
                            </button>
                            <button disabled className='btn p-0 m-0' onClick={() => router.push('/')} >
                                <FontAwesomeIcon className={`${styles.fontawesome}`}  size={"3x"}  icon={faLinkedin} />
                            </button>
                            
                            <button className='btn p-0 m-0' onClick={() => router.push('https://api.whatsapp.com/send?phone=+2348062257480')} >
                                <FontAwesomeIcon className={`${styles.fontawesome}`}  size={"3x"}  icon={faWhatsappSquare} />
                            </button>
                            <button className='btn p-0 m-0' onClick={() => router.push('https://api.whatsapp.com/send?phone=+2348062257480')} >
                                <FontAwesomeIcon className={`${styles.fontawesome}`}  size={"3x"}  icon={faYoutube} />
                            </button>
                            
                        
          </div>
                        <br />
        </div>
        
        
        <div className={`${styles.img_attr}`}>
        <a href="https://lovepik.com/images/png-avatar.html">Avatar Png vectors by Lovepik.com</a>
        </div>

      </div>
      
      

      <div className="mt-5 card m-2 p-4 m-lg-5">
        <div className="row">
        <div className="col-12 col-lg-8 order-2">
        <h2>BLOG</h2>
          <p>Visit DEVMAESTERS blog to read latest programming tutorials, hints and tricks. Also checkout our 
            thread platform within which you can ask programming questions and get answers to programming errors
          </p>
          <div className="d-flex justify-content-center">
            <Link href={'/blog'} passHref><button className="btn button mb-3">Go to Blog</button></Link>
          </div>
        </div>
        <div className={`col-12 col-lg-4 order-1`}>
          <div className={`${styles.img_box} `}>
          
          <Image   
              showSkeleton
              autoResize 
              maxDelay={10000}
              src="/images/home-2.png"
              alt="Default Image"
            />
          <a href="https://lovepik.com/images/png-avatars.html">Avatars Png vectors by Lovepik.com</a>
          </div>

        </div>
        </div>
      </div>
      <div className="mt-2 card m-2 p-4 m-lg-5">
        <div className="row">
        <div className="col-12 col-lg-8 order-2">
          <h2>Mini-Mall</h2>
          <p>Visit DEVMAESTERS Mini-Mall to get access to various programming related products and services.
          </p>
          <div className="d-flex justify-content-center">
          <Link href={'/blog'} passHref><button disabled className="btn button mb-3">Go to Mini-Mall</button></Link>
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
      </div>


          


      <div className="mt-2 card m-2 p-4 m-lg-5">
        <div className="row">
        <div className="col-12 col-lg-8 order-2">
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
      </div>

      <div className="mt-2 m-2 m-lg-5 p-4 card ">
        <h2>Freelance Services</h2>
        <form className="row">
          <div className="col-12 ">
            <div className="row gap-1 d-flex justify-content-center flex-wrap">
              <div className={`col-12 mt-2 col-lg-5 card ${styles.services}`}>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Frontend Developer</label>
              </div>
              </div>
              <div className={`col-12 mt-2 col-lg-5 card ${styles.services}`}>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Backend Developer</label>
              </div>
              </div>
              <div className={`col-12 mt-2 col-lg-5 card ${styles.services}`}>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Fullstack Developer</label>
              </div>
              </div>
              <div className={`col-12 mt-2 col-lg-5 card ${styles.services}`}>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Bootstrap Website upgrades</label>
              </div>
              </div>
              <div className={`col-12 mt-2 col-lg-5 card ${styles.services}`}>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Website Debbugging</label>
              </div>
              </div>
              <div className={`col-12 mt-2 col-lg-5 card ${styles.services}`}>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Website Hosting & deployment</label>
              </div>
              </div>

            </div>
            
            
            


          </div>
          <div className="d-flex justify-content-center mt-3">
              <button type="submit" disabled className="button btn">Contact</button>
            </div>

        </form>


      </div>

      <div className="mt-2 m-2 m-lg-5 p-4 card">
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

      <div className="mt-2 m-2 m-lg-5 p-4 card">
        <div className="row">
          <div className="col-12 col-md-4">
            <h2 className="h3">CONTACT US</h2>
            <p>We at DEVMAESTERS are always open to suggestions and inquiries from our users. Please fill the contact form
              if you wish to talk to us.
            </p>

          </div>
          <form className="col-12 col-md-8">
            <div className="d-flex justify-content-between">
              <div className="w-50">
              <input className="form-control" placeholder="enter full name" />
              </div>
              <div className="w-50 mx-1">
              <input className="form-control" type={'email'} placeholder="enter email" />
              </div>
              
            </div>
            <div>
              <textarea className="mt-2 h-100 form-control md-textarea" placeholder="Enter message">

              </textarea>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" disabled className="button btn">Submit</button>
            </div>

          </form>

        </div>

      </div>



      
      

      <footer className={`text-light text-center ${styles.footer}`}>
        <div> @devmaesters.com</div>
      </footer>
    </div>
  );
}
