import Navbar from "../../components/navbar/Navbar";

import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  
} from "@fortawesome/free-solid-svg-icons";

import { API_URL, NEXT_MODE } from "../../config";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";


if (`${NEXT_MODE}` == "DEV") {
  var orig = `${API_URL}`;
} else if (`${NEXT_MODE}` == "PROD") {
  var orig = "";
}
function PortfolioIndex() {
  
  
  return (
    <>
      <Head>
        <title>Abubakar Zakari</title>
        <meta name="keywords" content="Abubakar Zakari" />
        <meta
          name="description"
          content="Hello, my name is Abubakar Zakari. I am a budding fullstack 
          developer from Nigeria who loves developing softwares and learning new frameworks and langauges."
        />
        
      </Head>
      <Navbar
            
            loc='portfolio'
          />

      <div className="container mt-3">

      <div>
            <div className=" row d-flex justify-content-center mt-3 mb-3">
              <div className="col-11 col-md-7 d-flex justify-content-between">
                <Link href={"/portfolio"} passHref>
                  <button
                    className={`btn active-btn ${styles.nav_btn}`}
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
                  <button className={`btn button ${styles.nav_btn}`}>
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


        <div className="row">
        <main className="col-12 col-md-9">
          <div className="card mb-3 p-3">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-10 col-md-3">
              <div
                className={`d-grid align-content-center  `}
              >
                <Image
                  width="100"
                  height="100"
                  
                  layout="responsive"
                  priority
                  src={"/images/owner_images/abu_02.png"}
                  alt="owner_image"
                />
              </div>

              </div>
            </div>

            <div>
                <div className={`text-center ${styles.name}`}>
                  <b>ABUBAKAR A. ZAKARI</b>
                </div>
                <div className={`text-center ${styles.name}`}>
                  <b>Software Developer</b>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-1">
              <Link href={"https://mega.nz/file/muhgHBQb#zzqgD8Pr063T2fskV4iNYwF0KH0PxOFM7Nz2pzHB6Ak"} passHref>
                <button className={`btn button`}>
                  Download cv{" "}
                  <FontAwesomeIcon size={"1x"} icon={faFileDownload} />
                </button>
              </Link>
              <Link href={"https://github.com/maesterzak"} passHref>
                <button className={`btn button`}>
                  My Github <FontAwesomeIcon size={"1x"} icon={faGithub} />
                </button>
              </Link>
            </div>

            <div className="row d-flex justify-content-center mt-2 ">
            <div
              className={`col-10 col-md-6 d-flex justify-content-center align-items-center body-color ${styles.short_info}`}
            >
              <div className="text-center p-4">
                Hi, my name is Abubakar Zakari. I am budding fullstack developer
                from Nigeria who loves developing softwares and learning new
                frameworks and langauges.
              </div>
            </div>
          </div>


          

            
          
          </div>

        </main>
        
        
        <div className="col-12 col-md-3">
          <div className="card mb-3">
            <div className="card-header header-main">
              <h5>Education</h5>

            </div>
            <div className="card-title text-center">
                University
              </div>
            <div className="card-body">
              Name : Federal University Of Technology Minna <br />
              <span>Course :  Mechanical Engineering </span>
            </div>

            <div className="card-title text-center">
                High School
              </div>
            <div className="card-body">
              Salem Oxford International Academy 
              
            </div>

          </div>

          

          

        </div>
        </div>

      </div>
      


      
    </>
  );
}
export default PortfolioIndex;
