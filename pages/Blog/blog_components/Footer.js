import Link from "next/link";

const Footer = () =>{
    return(
        <footer>
            <div className='container'>
                <div className="row g-3">

                
                <div className="col-12 col-md-6 d-grid justify-content-center">
                    <h4 className="text-light text-center">Services </h4>
                    <ul className="text-light">
                        
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Full Website Development</li>
                        <li>Bootstrap Website upgrades</li>
                        <li>Mobile App Development</li>
                        
                        <li>Website Selling</li>
                        <li>Website Debbugging</li>
                        <li>Website Hosting</li>
                    </ul>
                </div>
                
                <div style={{"fontWeight":"bold"}} className="col-12 col-md-4 d-grid justify-content-center">
                    <h5 className="text-light text-center">Contact</h5>
                    <div className="text-light">
                        <span>Interested in hiring me or collaborating with me on a project, </span>
                        <span>click on any of the links below to get my socialmedia handle, </span>
                        <span>Or contact me via</span>
                        <ul>
                            <li>tel: 08062257480</li>
                            <li>Email: abubakarzakri1703@gmail.com</li>
                        </ul>
                        <span>Checkout my <Link href={'/'}>Portfolio</Link> to see my past projects</span>
                    </div>
                </div>
                </div>
                
            </div>
        </footer>
    )
}
export default Footer;