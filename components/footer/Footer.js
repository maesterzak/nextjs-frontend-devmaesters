import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {useRouter}  from 'next/router';
import { faSitemap } from "@fortawesome/free-solid-svg-icons";




function Footer(){
    const router = useRouter()
    return(
        <footer>
            <div className=''>
                <h2 className="text-center mb-2 text-light site-title">DEVMAESTERS</h2>
                <div className="d-flex justify-content-center mb-5">
                

                </div>
                <div className="row g-0">
                    <div className="col-12 col-md-2">
                        <h4 className="text-center">Quick links</h4>
                        <ul className="d-grid justify-content-center">
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Mini Mall</li>
                            <li>Portfolio</li>
                            <li>About</li>
                        </ul>
                    </div>

                
                <div id="services" className="col-12 col-md-3 d-grid justify-content-center">
                    <h4 className="text-light text-center">Services </h4>
                    <ul className="text-light">
                        
                        <li className="text-light">Frontend Development</li>
                        <li className="text-light">Backend Development</li>
                        <li className="text-light">Full Website Development</li>
                        <li className="text-light">Bootstrap Website upgrades</li>
                        {/* <li>Mobile App Development</li>
                        
                        <li>Website Selling</li> */}
                        <li className="text-light">Website Debbugging</li>
                        <li className="text-light">Website Hosting & deployment</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <button disabled className="btn button">Hire Me</button>
                    </div>
                </div>
                
                <div id="contact"  className="col-12 col-md-4 d-grid justify-content-center">
                    <h5 className="text-light text-center">Contact</h5>
                    <div className="text-light">
                        <span className="text-light">Interested in hiring me or collaborating with me on a project, </span>
                        <span className="text-light">click on any of the links below to get my social media handle, </span>
                        <span className="text-light">or contact me via;</span>
                        <ul className="text-light">
                            <li className="text-light">tel: +2348062257480</li>
                            <li className="text-light">Email: abubakarzakari1703@gmail.com</li>

                        </ul>
                        <div className="d-flex justify-content-between  w-75">
                            <button disabled className='btn p-0 m-0' onClick={() => router.push('/')} >
                                <FontAwesomeIcon style={{"color":"white"}}  size={"3x"}  icon={faTwitterSquare} />
                            </button>
                            <button className='btn p-0 m-0' onClick={() => router.push('https://web.facebook.com/devmaesters/')} >
                                <FontAwesomeIcon style={{"color":"white"}}  size={"3x"}  icon={faFacebookSquare} />
                            </button>
                            <button disabled className='btn p-0 m-0' onClick={() => router.push('/')} >
                                <FontAwesomeIcon style={{"color":"white"}}  size={"3x"}  icon={faLinkedin} />
                            </button>
                            <button disabled className='btn p-0 m-0' onClick={() => router.push('/')} >
                                <FontAwesomeIcon style={{"color":"white"}}  size={"3x"}  icon={faInstagramSquare} />
                            </button>
                            <button className='btn p-0 m-0' onClick={() => router.push('https://api.whatsapp.com/send?phone=+2348062257480')} >
                                <FontAwesomeIcon style={{"color":"white"}}  size={"3x"}  icon={faWhatsappSquare} />
                            </button>
                            
                        
                        </div>
                        <br />
                        <span>Checkout my <span><Link href={'/portfolio'}>Portfolio</Link></span> to see my past projects</span>
                        
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <h4 className="text-center">Newsletter</h4>
                    <form>
                    <div className=" d-flex justify-content-center">
              <input className="form-control w-75 mb-3" placeholder="enter email" />
              </div>
              <div className="d-flex justify-content-center">
                  <button disabled className="button btn">Subscribe</button>
              </div>
                    </form>

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