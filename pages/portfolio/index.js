import Navbar from "../../components/navbar/Navbar";

import styles from "./portfolio.module.css";
import Link from "next/link";
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import { API_URL, NEXT_MODE, CV_URL } from "../../config";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Image } from "@nextui-org/react";
import HeadComponent from "../../components/HeadComponent";

if (`${NEXT_MODE}` == "DEV") {
  var orig = `${API_URL}`;
} else if (`${NEXT_MODE}` == "PROD") {
  var orig = "";
}
function PortfolioIndex() {
  return (
    <>

      <HeadComponent title="Abubakar Zakari" MainImage="/images/owner_images/abubakar02.jpeg" description="Hello, my name is Abubakar Zakari. I am a budding fullstack 
          developer from Nigeria who loves developing softwares and learning new frameworks and langauges." />
      <Navbar loc="portfolio" />

      <div className="container mt-3">
        <div>
          <div className=" row d-flex justify-content-center mt-3 mb-3">
            <div className="col-11 shadow-lg p-3 col-md-7 d-flex justify-content-between">
              <Link href={"/portfolio"} passHref>
                <button className={`btn active-btn ${styles.nav_btn}`}>
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
          <main className={`col-12 mb-3 mt-2 ${styles.main}`}>
            <div className="mb-3 p-3">
              <div className="d-flex justify-content-center  mt-3">
                <div className={styles.portfolioImgWrapper}>
                  <Image
                    showSkeleton
                    autoResize
                    maxDelay={10000}
                    src="/images/owner_images/abubakar02.jpeg"
                    alt="Default Image"
                    width={700}
                    height={700}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
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

              <div className="d-flex justify-content-center mt-1 gap-2">
                <a
                  href={`https://drive.google.com/file/d/1kvqY_KrmSBvS70gExasNUvmzS8u_8M4-/view?usp=share_link`}
                  passHref
                >
                  <button className={`btn button`}>
                    Download cv{" "}
                    <FontAwesomeIcon size={"1x"} icon={faFileDownload} />
                  </button>
                </a>
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
                    Hi, my name is Abubakar Zakari. I am budding fullstack
                    developer from Nigeria who loves developing softwares and
                    learning new frameworks and langauges.
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="col-12 mb-4">
            <div className="shadow-lg mb-3 m-lg-5 card">
              <div className="card-header header-main text-light">
                <h5>Education</h5>
              </div>
              <div
                style={{ fontSize: "large", fontWeight: "bolder" }}
                className="card-title p-3"
              >
                University
              </div>
              <div className="card-body p-3">
                Name : Federal University Of Technology Minna <br />
                <span>Course : Mechanical Engineering </span>
              </div>

              <div
                style={{ fontSize: "large", fontWeight: "bolder" }}
                className="card-title p-3"
              >
                High School
              </div>
              <div className="card-body P-3">
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
