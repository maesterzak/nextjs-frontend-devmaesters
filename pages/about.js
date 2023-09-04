import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/Footer'
import Link from 'next/link'
import HeadComponent from '../components/HeadComponent'

function Aboutus() {

    return (
        <>
            {/* <Head>
                <title>About Page | DEVMAESTERS</title>
                <meta
                    name="description"
                    content="Welcome to devmaesters, I offer free programming tutorials, hints, tricks and also platforms
        for asking questions(threads)"
                />
                <meta property='og:title' content='DEVMAESTERS ABOUT PAGE' />
                <meta property='og:image' content='//media.example.com/ 1234567.jpg' />
            </Head> */}
            <HeadComponent title='About Page' />
            <div style={{ "minHeight": "100vh" }}>
                <Navbar loc="about" />
                <br />
                <div className={`container about_container `}>
                    <h4 className='text-center'>About Site</h4>
                    <div className='row d-flex justify-content-center mt-3'>
                        <div className='col-10 col-lg-8'>
                            <p>
                                At Devmaesters we offer;
                            </p>
                            <ul className='about-list'>
                                <li><b>Devmaesters Blog</b> for free programming hints, tricks and tutorials on various programming
                                    languages and frameworks.</li>
                                {/* <li><b>devMaesters Mini-Mall</b> to purchase and sell various software related products.</li>
                        <li><b>devMaesters Online-Solver</b> to automate the solving of mathematical problems with basic python codes and output
                        results in a step by step manner. </li>     */}
                            </ul>
                        </div>
                    </div>
                    <h4 className='text-center mt-3'>About Stack</h4>
                    <div className='row d-flex justify-content-center'>

                        <div className='col-11 col-lg-8'>
                            <span className='text-center'> Devmaesters was designed and developed by Abubakar Zakari(maesterzak)
                                using Nextjs (plus a couple of libraries like useSWR, redux, bootstrap, next-sitemap e.tc.
                                for full Stack
                                list checkout the project in
                                my <span style={{ "color": "blue" }}><Link href={'/portfolio'}>Portfolio</Link></span>) for
                                frontend, Django rest framework(plus a couple of packages like cloudinary, ckeditor e.t.c)
                                for backend and postgress_db as the database.</span>
                        </div>


                    </div>
                    <h4 className='text-center mt-3'>About Me</h4>
                    <div className='row d-flex justify-content-center '>
                        <div className='col-11 col-lg-8'>
                            <div className='row'>
                                <div className='col-12 col-lg-9 d-flex align-items-center justify-content-center'>
                                    <span> Hello, my name is Abubakar Zakari. I am a budding fullstack
                                        developer from Nigeria who loves developing softwares and learning new frameworks and langauges. Check out my <span style={{ "color": "blue" }}><Link href={'/portfolio'}>Portfolio</Link></span> site to see my skills, projects
                                        and contact information. </span>
                                </div>
                                <div className='d-flex align-items-center justify-content-center col-12 col-lg-3 mt-3 md:mt-0'>
                                    <div >
                                        <Image alt='owner_image' className={`${styles.about_image1}`} width={100} height={100} src={'/images/owner_images/abu_02.png'} />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='mt-3 align-self-baseline'>
                    <Footer />
                </div>
            </div>


        </>

    )
}

export default Aboutus
