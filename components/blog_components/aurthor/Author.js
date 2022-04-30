import Image from "next/image";
import styles from "./author.module.css"
import { NEXT_MODE, API_URL } from "../../../config";
import Router, { useRouter } from "next/router";
import dompurify from "isomorphic-dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin
} from "@fortawesome/free-brands-svg-icons";


const sanitizer = dompurify.sanitize;
if (`${NEXT_MODE}` == "DEV") {
  var orig = `${API_URL}`;
} else if (`${NEXT_MODE}` == "PROD") {
  var orig = "";
}


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
                      src={props.orig + props.data.author.profile_image}
                    />

                    </div>
                    <span dangerouslySetInnerHTML={{
                          __html: sanitizer(props.data.author.about_me),
                        }}></span>
                        <div className="col-12 d-flex align-items-end">
                        <div className="row g-0 w-100 d-flex justify-content-end align-self-end">
                          <div className="col-12 d-flex align-items-center justify-content-center ">
                            {props.data.author.twitter ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.author.twitter}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faTwitterSquare} />
                            </button>:''}
                            {props.data.author.facebook ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.author.facebook}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faFacebookSquare} />
                            </button>:''}
                            {props.data.author.whatsapp ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`https://api.whatsapp.com/send?phone=${props.data.author.whatsapp}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faWhatsappSquare} />
                            </button>:''}
                            {props.data.author.linkdn ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.author.linkdn}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faLinkedin} />
                            </button>:''}
                            {props.data.author.instagram ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${props.data.author.instagram}`)}>
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