import Image from 'next/image'
import Head from 'next/head'
import Navbar from './Blog/blog_components/Navbar'
import styles from '../styles/Home.module.css'
import Footer from './Blog/blog_components/Footer'
import Link from 'next/link'

function Aboutus() {
    
    return (
    <>
    <Head>
        <title>devMaesters | About Page</title>
        <meta
          name="description"
          content="Welcome to devmaesters, I offer free programming tutorials, hints, tricks and also platforms
        for asking questions(threads) and buying web services/sites."
        />
    </Head>
    <div style={{"minHeight":"100vh"}}>
        <Navbar links="white" icon="white" header_color="white"/>
        <br />
        <div className={`container ${styles.about_container}`}>
            <h4 className='text-center p-3'>About Site</h4>
            <div className='p-3 row d-flex justify-content-center'>
                <div className='col-10 col-lg-7'>
                    <p>
                        At devMaesters we offer;
                        <ul>
                            <li><b>devMaesters Blog</b> for free programming hints, tricks and tutorials on various programming 
                        languages and frameworks.</li>
                        <li><b>devMaesters Mini-Mall</b> to purchase and sell various software related products.</li>
                        <li><b>devMaesters Online-Solver</b> to automate the solving of mathematical problems with basic python codes and output
                        results in a step by step manner. </li>    
                        </ul> 
                        
                    </p>
                </div>
            </div>
            <h4 className='text-center'>About Stack</h4>
            <div className='p-3 row d-flex justify-content-center'>
                
                    <div className='col-10 col-lg-7'>
                        <p> devMaesters was designed and developed by Abubakar Zakari(maesterzak)
                             using Nextjs (plus a couple of libraries like useSWR, redux, bootstrap, next-sitemap e.tc. 
                             for full Stack
                list checkout the project in
                 my <span style={{"color":"blue"}}><Link  href={'/portfolio'}>Portfolio</Link></span>) for 
                 frontend, Django rest framework(plus a couple of packages like cloudinary, ckeditor e.t.c) 
                 for backend and postgress_db as the database.</p>
                    </div>
                
                
            </div>
            <h4 className='text-center'>About Me</h4>
            <div className='row d-flex justify-content-center p-3'>
                <div className='col-10 col-lg-7'>
                    <div className='row'>
                <div className='col-12 col-lg-9 p-3 d-flex align-items-center justify-content-center'>
                    <span> Hello, my name is Abubakar Zakari. I am a budding fullstack 
          developer from Nigeria who loves developing softwares and learning new frameworks and langauges. Check out my <span style={{"color":"blue"}}><Link  href={'/portfolio'}>Portfolio</Link></span> site to see my skills, projects
          and contact information. </span>
                </div>
                <div className='d-flex align-items-center justify-content-center col-12 col-lg-3'>
                    <div className={`${styles.about_image}`}>
                        <Image alt='owner_image' className={`${styles.about_image1}`} layout='responsive' width={100} height='100' src={'/images/owner_images/abubakar02.jpeg'} />

                    </div>
                </div>
                </div>
                </div>
                
            </div>

        </div>
        <div className='mt-3 g-0 container align-self-baseline'>
        <Footer />
        </div>
    </div>
    
        
    </>
        
    )
}

export default Aboutus
