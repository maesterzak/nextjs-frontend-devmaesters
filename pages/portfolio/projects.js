import Navbar from "../../components/navbar/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { API_URL, NEXT_MODE } from "../../config";
import Head from "next/head";
import dompurify from "isomorphic-dompurify";
import { useState } from "react";

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
  
  const [projectList, setProjectlist] = useState(project.projects)
  var qw = project.skills.map(item=> item.id)
  const [projectSkills, setProjectSkills] = useState(qw)

  const queryProjects = (id) =>{
    //projectid
    projectSkills.forEach((item, index)=>{
      let pro = document.getElementById(`project${id}`).checked
      if (pro) {
        
      }
    })

    

  }

  // const queryProjects = (id) =>{
  //   console.log('id is' + id)  
    
  //   console.log("xc", qw)
  //   let pro = document.getElementById(`project${id}`).checked
  //   console.log('r', projectSkills, pro)
  //   let ar= []
  //   let y
    
  //   if (pro && projectSkills.includes(id) !=true) {
  //     console.log("not there", projectSkills)
  //     projectSkills.push(id)
  //     console.log('ff', projectSkills)
  //   }

  //   else{
  //     console.log("there", projectSkills)
  //     // projectSkills =  projectSkills.filter(item=>item !=id)
  //     let ui = projectSkills.indexOf(id);
  //     console.log('awww',ui)
  //     projectSkills.splice(ui, 1)
  //   }
    
  //   projectList.forEach((item, index)=>{
  //     // console.log('dd',item.technologies.some(it=>y.includes(it)))
  //     // item.technologies.some(it=>y.includes(it))
  //     if (item.technologies.some(it=>projectSkills.includes(it) == false)) {
  //       ar.push(item)
  //       // console.log('yes')
  //       // projectList.push(item)
  //     }
  //     else{
  //      console.log('no')
  //       ar = projectList.splice(index, 1)
  //     }
  //   })
  //   // console.log('ee', ar)
  //   setProjectSkills(projectSkills)
  //   setProjectlist(ar)
  //   console.log('qaa',projectList)
  // }
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
        <meta property='og:title' content='Abubakar Zakari'/>
        <meta property='og:image' content='/images/owner_images/abubakar02.jpeg'/>
        <meta property='og:description' content='This is my portfolio page within which you can access links to all my projects'/>
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
            {/* <div>
              <ul className="d-flex flex-wrap">
                {project.skills.map((item, index)=>{
                  return(
                    <li key={index} className="list-group-item w-20">
                  <input defaultChecked onChange={()=>queryProjects(item.id)} id={`project${item.id}`} className="form-check-input" type="checkbox" value="" aria-label="..." />
                  {item.name}
                </li>
                  )
                })}
              </ul>
            </div> */}
            <div className="card-body">
              
              {projectList?.map(function (proj, id) {
                return (
                  
                  <div className="card mb-3" key={id}>
                    <div className="card-header header-main d-flex justify-content-between">
                      {proj.name}
                      <div className="d-flex gap-1">
                        {proj.technologies?.map((item, index)=>{
                          return(
                            <>
                              {project.skills.filter((item2, index2)=> item2.id == item).map((item3, index3)=>{
                                
                                return(
                                  <>
                                    <div key={index} className={styles.projectTagWrapper}>
                                    <Image
                                    showSkeleton
                                    autoResize 
                                    maxDelay={10000}
                                      src={orig + item3.svg_image}
                                    />
                                    </div>
                                  </>
                                )
                              })}
                            </>
                          )
                        })}
                        
                        </div>
                    </div>
                    
                    
                    <div className="card-body">
                      <div className="row">
                      <div className="col-12 col-md-6">
                      <h2 className="h5">Stack</h2>
                      <p>{proj.stack}</p>
                      <h2 className="h5 mt-1">Description</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(proj.description),
                        }}
                      ></div>
                      
                      
                      {/* {proj.video ? (
                        <div className="mt-3 mb-2">
                          <div className="row g-0 d-flex justify-content-center">
                            
                            <div className="col-12 col-md-10">
                              <video
                                src={proj.video}
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
                      )} */}
                      </div>
                      <div className={ proj.image1 ? "col-12 p-1 col-md-6 d-flex align-items-center justify-content-center project_visuals img": "d-none"}>
                      {/* <Image
              

                        showSkeleton
                        autoResize 
                        maxDelay={10000}
                        src={orig + project.image1}
                        alt="Default Image"
                      /> */}
                      
                      <div id={`carouselExampleIndicators${id}`} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className={proj.image1 ?  "carousel-item ":"d-none"}>
      <img src={proj.image1 ?  orig + proj.image1: "/xy.PNG"} className="d-block w-100" alt="..."/>
    </div>
    <div className={proj.image2 ?  "carousel-item active":"d-none"}>
      <img src={orig + proj.image2} className="d-block w-100" alt="..."/>
    </div>
    <div className={proj.image3 ?  "carousel-item ":"d-none"}>
      <img src={orig + proj.image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


                        
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex">
                      <div className="me-3">
                        {proj.demo ? (
                          <Link href={proj.demo} passHref>
                            demo
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {proj.github ? (
                          <Link href={proj.github} passHref>
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
