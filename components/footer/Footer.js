import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useRouter } from 'next/router';
import { faSitemap } from "@fortawesome/free-solid-svg-icons";




function Footer() {
    const router = useRouter()
    return (
        <footer>
            <div className=''>
                <h2 className="text-center mb-2 text-light site-title">DEVMAESTERS</h2>

                <div className="row g-0">



                    <div className="col-12 col-md-4 mb-3">
                        <h4 className="text-center text-light">Newsletter</h4>
                        <form>
                            <div className=" d-flex justify-content-center">
                                <input className="form-control w-75 mb-3" placeholder="enter email" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button disabled className="button btn">Subscribe</button>
                            </div>
                        </form>

                    </div>




                    <div className="col-12 col-md-4 mb-3">
                        <h4 className="text-light r">Services </h4>
                        <div className="">

                            <span className="text-light p-2">Frontend Development</span> |
                            <span className="text-light p-2">Backend Development</span> |
                            <span className="text-light p-2">Full Website Development</span> |
                            <span className="text-light p-2">Bootstrap Website upgrades</span> |
                            {/* <li>Mobile App Development</li>
                        
                        <li>Website Selling</li> */}
                            <span className="text-light"> Website Debbugging</span> |
                            <span className="text-light"> Website Hosting & deployment</span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link href={'/portfolio/contact'}>
                                <button className="btn button">Hire Me</button></Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-3">
                        <h4 className=" text-light">Contact</h4>
                        <p className="text-light">Interested in hiring me or collaborating with me on a project, click on any of the links below to get my social media handle</p>
                        <div className="d-flex  w-75">
                            <button disabled className='btn p-1 m-0' onClick={() => router.push('https://twitter.com/devmaesters')} >
                                <FontAwesomeIcon style={{ "color": "white" }} size={"3x"} icon={faTwitterSquare} />
                            </button>
                            <button className='btn p-1 m-0' onClick={() => router.push('https://web.facebook.com/devmaesters/')} >
                                <FontAwesomeIcon style={{ "color": "white" }} size={"3x"} icon={faFacebookSquare} />
                            </button>
                            <button disabled className='btn p-1 m-0' onClick={() => router.push('https://linkedin.com/in/abubakar-zakari-05711822a/')} >
                                <FontAwesomeIcon style={{ "color": "white" }} size={"3x"} icon={faLinkedin} />
                            </button>
                            <button disabled className='btn p-1 m-0' onClick={() => router.push('/')} >
                                <FontAwesomeIcon style={{ "color": "white" }} size={"3x"} icon={faInstagramSquare} />
                            </button>
                            <button className='btn p-1 m-0' onClick={() => router.push('https://api.whatsapp.com/send?phone=+2348062257480')} >
                                <FontAwesomeIcon style={{ "color": "white" }} size={"3x"} icon={faWhatsappSquare} />
                            </button>


                        </div>
                        <p className="text-light">Or contact me via  Tel: (+234)-806-225-7480 | Email: abubakarzakari1703@gmail.com</p>

                    </div>


                </div>
                <div className="row mt-3">
                    <div className="col-2 col-md-2 d-flex align-items-end justify-content-center">
                        <a href={'/sitemap-0.xml'}><FontAwesomeIcon className="sitemap" icon={faSitemap} size={'2x'} /></a>
                    </div>
                    <div className="col-7 col-md-8 d-flex align-items-end justify-content-center">
                        <div className="text-light">Copywright@devmaesters.com </div>
                    </div>
                    <div className="col-3 col-md-2 d-flex align-items-end justify-content-center">
                        <Link href={'/privacy-policy'}>privacy policy</Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer;