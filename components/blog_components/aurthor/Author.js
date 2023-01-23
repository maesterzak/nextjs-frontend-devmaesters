import Image from "next/image";
import styles from "./author.module.css"

import { useRouter } from "next/router";
import dompurify from "isomorphic-dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin
} from "@fortawesome/free-brands-svg-icons";


const sanitizer = dompurify.sanitize;



function Author(props){
  const router = useRouter()
  
    
     
    return(
        <>
            <div className="col-12 card mb-3 mt-3">
                  <h5 className="card-header header-main">Author</h5>
                <div className="d-flex flex-wrap justify-content-center card-body">
                    <div className={` ${styles.img_card}`}>
                    <Image
                      alt="author-image"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      src={props.orig + props.data.profile_image}
                    />

                    </div>
                    <span dangerouslySetInnerHTML={{
                          __html: sanitizer(props.data.about_me),
                        }}></span>
                        <div className="col-12 d-flex align-items-end">
                        <div className="row g-0 w-100 d-flex justify-content-end align-self-end">
                          <div className="col-12 d-flex align-items-center justify-content-center ">
                            {props.data.twitter ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.twitter}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faTwitterSquare} />
                            </button>:''}
                            {props.data.facebook ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.facebook}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faFacebookSquare} />
                            </button>:''}
                            {props.data.whatsapp ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`https://api.whatsapp.com/send?phone=${data.data.whatsapp}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faWhatsappSquare} />
                            </button>:''}
                            {props.data.linkdn ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.linkdn}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faLinkedin} />
                            </button>:''}
                            {props.data.instagram ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.instagram}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faInstagramSquare} />
                            </button>:''}
                          </div>
                        </div>
                    </div>
            
                </div>
            </div>

        </>
    )
}
export default Author;