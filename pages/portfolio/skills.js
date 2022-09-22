import Navbar from "../../components/navbar/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";


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
        <meta property='og:title' content='Abubakar Zakari'/>
        <meta property='og:image' content='/images/owner_images/abubakar02.jpeg'/>
        <meta property='og:description' content='This is my portfolio page within which you can access links to all my projects'/>
      </Head>

      <Navbar loc="portfolio" />

      <div className="container mt-3">

      <div>
            <div className=" row d-flex justify-content-center mt-3 mb-3">
              <div className="col-11 col-md-7 d-flex justify-content-between">
                <Link href={"/portfolio"} passHref>
                  <button
                    className={`btn button ${styles.nav_btn}`}
                  >
                    Home
                  </button>
                </Link>
                <Link href={"/portfolio/projects"} passHref>
                  <button className={`btn button ${styles.nav_btn}`}>
                    Projects
                  </button>
                </Link>
                <Link href={"/portfolio/skills"} passHref>
                  <button className={`btn active-btn ${styles.nav_btn}`}>
                    Skills
                  </button>
                </Link>
                <Link href={"/portfolio/contact"} passHref>
                  <button className={`btn button ${styles.nav_btn}`}>
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        <main className="card mb-3">
          <div className="card-header">
            <h4>Skills</h4>
          </div>
          <div className="card-body">
            <div className="row">
              {/* <div className="col-5 col-md-2">
                <div className="card mb-3">
                  <div className={`card-header body-color`}>
                    Python
                  </div>
                  <div className={`card-body d-flex justify-content-center body-color`}>
                  <FontAwesomeIcon
                      style={{ color: "#5a36ec" }}
                      size={"4x"}
                      icon={faPython}
                    />
                  </div>
                </div>
              </div> */}

              <div className="col-5 col-md-2">
                <div className="card mb-3">
                  <div className={`card-header body-color`}>
                    Css
                  </div>
                  <div className={`card-body d-flex justify-content-center body-color`}>
                  <FontAwesomeIcon
                      style={{ color: "blue" }}
                      size={"4x"}
                      icon={faCss3}
                    />
                  </div>
                </div>
              </div>

              
              <div className="col-5 col-md-2">
                <div className="card mb-3">
                  <div className={`card-header body-color`}>
                    Bootstrap
                  </div>
                  <div className={`card-body d-flex justify-content-center body-color`}>
                  <FontAwesomeIcon
                      
                      size={"4x"}
                      icon={faBootstrap}
                    />
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-2">
                <div className="card mb-3">
                  <div className={`card-header body-color`}>
                    Html
                  </div>
                  <div className={`card-body d-flex justify-content-center body-color`}>
                  <FontAwesomeIcon
                      color="orange"
                      size={"4x"}
                      icon={faHtml5}
                    />
                  </div>
                </div>
              </div>

              
              {skills.map(function(skill, id){
                return(
                  <div className="col-5 col-md-2 " key={id}>
                <div className="card mb-3">
                  <div className={`card-header body-color`}>
                    {skill.name}
                  </div>
                  <div className={`card-body d-flex justify-content-center body-color`}>
                  <Image
                          alt="skill_image"
                          width={"100%"}
                          height={"100%"}
                          
                          layout="fixed"
                          src={`${orig + skill.svg_image}`}
                        />
                  </div>
                </div>
              </div>

                )
              })}
            </div>

          </div>


        </main>

      </div>
      
    </>
  );
}
export default PortfolioSkills;
