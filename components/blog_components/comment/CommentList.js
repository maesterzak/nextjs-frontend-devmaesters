import Image from "next/image";
import dompurify from 'isomorphic-dompurify';
import 'highlight.js/styles/agate.css'

function Comments(props){
  
  
    const sanitizer = dompurify.sanitize
    return(
        <>
            <div className="col-12 card mb-3">
            <div className="card-header header-main mb-3">
                <h5>Comments</h5>
                </div>
            {props.data.posts_comments.length !=0 ? '':<div className="d-flex justify-content-center">No comment yet</div>}
               {props.data.posts_comments.map(function (message, id) {
                  return (
                    <div className="row mb-3" key={id}>
                      <div className="col-3 col-md-1">
                      {message.profile_image ? (
                            <>
                              <Image
                                layout="responsive"
                                width={70}
                                height={70}
                                src={props.orig + message.profile_image}
                                alt="message profile"
                              />
                            </>
                          ) : (
                            <>
                              <Image
                                layout="responsive"
                                width={70}
                                height={70}
                                src={`/images/chat_images/${message.profile_image_value}.jpg`}
                                alt="message profile"
                              />
                            </>
                          )}
                        

                      </div>
                      <div className="col-8 col-md-11">
                        <div className="h6"><b>{message.name}</b></div>
                        <div className="text-muted">{message.date_created}</div>
                        

                      </div>
                      <div className="col-12 card-body" dangerouslySetInnerHTML={{
                                  __html: sanitizer(message.body),
                                }}>

                      </div>

                    </div>
                    
                    
                  );
                })} 

            </div>
        </>
    )
}
export default Comments;