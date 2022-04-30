import { useEffect } from "react";
import dompurify from 'isomorphic-dompurify';
import 'highlight.js/styles/agate.css'


function PostDetail(props){
    const sanitizer = dompurify.sanitize
    const hljs = require('highlight.js');
  useEffect(()=>{
    hljs.highlightAll()
    hljs.configure({ignoreUnescapedHTML: true})
  })
    return(
        <>
            <div className="card p-2">
              <h1 className="h2 text-light mb-3">
                {props.data.title}
              </h1>
              <article className="card-body p-0" dangerouslySetInnerHTML={{ __html: sanitizer(props.data.body) }}>

              </article>

            </div>
        </>
    )
}
export default PostDetail;