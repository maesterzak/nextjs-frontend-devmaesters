import Navbar from "../../components/navbar/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { API_URL, NEXT_MODE } from "../../config";
import Head from "next/head";
import dompurify from "isomorphic-dompurify";

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}/blog/portfolio-projects/`);

  const data = await response.json();

  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }
  return {
    props: { project: data, orig: orig },
    revalidate: 10,
  };
};
const sanitizer = dompurify.sanitize;
function PortfolioProject({ project, orig }) {
  
  return (
    <>
      <Head>
        <title>Abubakar Zakari | Projects</title>
        <meta name="keywords" content="Abubakar Zakari" />
        <meta
          name="description"
          content="Hello, my name is Abubakar Zakari. I am a budding fullstack 
          developer from Nigeria who loves developing softwares and learning new frameworks and langauges. Click link to see projects I have built."
        />
      </Head>

      <Navbar loc="portfolio" />

      <div className="container mt-3">
        <div>
          <div className=" row g-0 d-flex justify-content-center mt-3 mb-3">
            <div className="col-11 col-md-7 d-flex justify-content-between">
              <Link href={"/portfolio"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>Home</button>
              </Link>
              <Link href={"/portfolio/projects"} passHref>
                <button className={`btn active-btn ${styles.nav_btn}`}>Projects</button>
              </Link>
              <Link href={"/portfolio/skills"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>Skills</button>
              </Link>
              <Link href={"/portfolio/contact"} passHref>
                <button className={`btn button ${styles.nav_btn}`}>Contact</button>
              </Link>
            </div>
          </div>
        </div>

        <main>
          <div className="card">
            <div className="card-header header-main">Projects</div>
            <div className="card-body">
              {project.map(function (project, id) {
                return (
                  <div className="card mb-3" key={id}>
                    <div className="card-header header-main">
                      {project.name}
                    </div>
                    <div className="card-body">
                      <h2 className="h5">Stack</h2>
                      <div>{project.stack}</div>
                      <h2 className="h5 mt-1">Description</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(project.description),
                        }}
                      ></div>
                      
                      
                      {project.video ? (
                        <div className="mt-3 mb-2">
                          <div className="row g-0 d-flex justify-content-center">
                            
                            <div className="col-12 col-md-10">
                              <video
                                src={project.video}
                                className={`${styles.project_vid}`}
                                controls
                              >
                                Your browser does not support video tag
                              </video>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="card-footer d-flex">
                      <div className="me-3">
                        {project.demo ? (
                          <Link href={project.demo} passHref>
                            demo
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {project.github ? (
                          <Link href={project.github} passHref>
                            <a
                              className={` d-flex justify-content-between align-items-center `}
                            >
                              repo{" "}
                              <FontAwesomeIcon size={"1x"} icon={faGithub} />
                            </a>
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
      
    </>
  );
}
export default PortfolioProject;
