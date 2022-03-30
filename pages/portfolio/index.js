import Navbar from "../blog/blog_components/Navbar";
import head from "next/head";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  faAngleDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { API_URL, NEXT_MODE } from "../../config";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import Router , {useRouter}  from 'next/router';

if (`${NEXT_MODE}` == "DEV") {
  var orig = `${API_URL}`;
} else if (`${NEXT_MODE}` == "PROD") {
  var orig = "";
}
function PortfolioIndex() {
  const [mini_nav, setMini_nav] = useState(false);
  const ToggleMiniNav = () => {
    setMini_nav(!mini_nav);
  };
  const router = useRouter()
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
      <div className={`${styles.main}`}>
        <div className="d-none d-md-block">
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
            link='portfolio'
          />
          <div className="d-md-none container position-relative d-flex justify-content-end mt-2">
            <button
              onClick={ToggleMiniNav}
              className={`p-1 btn d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
            >
              <span>Home</span> <FontAwesomeIcon icon={faAngleDown} />
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

                  <Link href={"/portfolio/projects"} passHref>
                    <button
                      className={`p-1 mb-3 mt-3 btn d-flex justify-content-around align-items-center ${styles.mini_navtoggler}`}
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
          </div>
          <div className="d-none d-md-block">
            <div className=" row d-flex justify-content-center mt-3">
              <div className="col-7 d-flex justify-content-between">
                <Link href={"/portfolio"} passHref>
                  <button
                    className={`btn ${styles.portfolio_button} ${styles.active}`}
                  >
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
                  <button className={`btn ${styles.portfolio_button} `}>
                    CONTACT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-3">
            <div className="col-10 col-sm-7 col-lg-2">
              <div
                className={`p-1 d-grid align-content-center  ${styles.image_container}`}
              >
                <Image
                  width="100"
                  height="100"
                  className={`${styles.index_image}`}
                  layout="responsive"
                  priority
                  src={"/images/owner_images/abubakar01.jpeg"}
                  alt="owner_image"
                />
              </div>
              
            </div>
            <div>
                <div className={`text-center ${styles.name}`}>
                  <b>ABUBAKAR A. ZAKARI</b>
                </div>
                <div className={`text-center ${styles.job}`}>
                  <b>Software Developer</b>
                </div>
              </div>
            <div className="d-flex justify-content-center mt-1">
              <Link href={"https://mega.nz/file/muhgHBQb#zzqgD8Pr063T2fskV4iNYwF0KH0PxOFM7Nz2pzHB6Ak"} passHref>
                <button className={`${styles.download_button}`}>
                  Download cv{" "}
                  <FontAwesomeIcon height={20} icon={faFileDownload} />
                </button>
              </Link>
              <Link href={"https://github.com/maesterzak"} passHref>
                <button className={`${styles.download_button}`}>
                  My Github <FontAwesomeIcon height={20} icon={faGithub} />
                </button>
              </Link>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-2 ">
            <div
              className={`col-10 col-md-6 d-flex justify-content-center align-items-center ${styles.short_info}`}
            >
              <div className="text-center p-4">
                Hi, my name is Abubakar Zakari. Am a budding fullstack developer
                from Nigeria who loves developing softwares and learning new
                frameworks and langauges.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PortfolioIndex;
