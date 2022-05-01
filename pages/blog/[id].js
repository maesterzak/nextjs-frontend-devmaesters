
import Head from "next/head";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { API_URL, NEXT_MODE } from "../../config";
import useSWR from "swr";
import Loader from "../../components/Loader";
import dompurify from 'isomorphic-dompurify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import 'highlight.js/styles/agate.css'
import Categories from "../../components/blog_components/categories/Categories";
import CommentForm from "../../components/blog_components/comment/CommentForm";
import styles from './blog.module.css'
import Comments from "../../components/blog_components/comment/CommentList";
import TrendingPosts from "../../components/blog_components/trending_posts/TrendingPosts";
import Image from "next/image";



export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/posts/`);
  const data = await res.json();
  

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};


export async function getStaticProps(context){
  const id = context.params.id;
  const url = `${API_URL}/blog/post-detail/` + id + "/"

  const response = await fetch(`${API_URL}/blog/post-detail/` + id + "/");
  const res = await response.json()
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }

  return {
    props: { orig: orig, url:url, res:res },
  };
};


const fetcher = (...args)=> fetch(...args).then((response) => response.json())
function Post_detail({ url, orig, res }) {
  
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };

  
  const {data, error} = useSWR(url, fetcher, {fallbackData:res, revalidateOnFocus:false})
  
  const sanitizer = dompurify.sanitize
    
  if (error) return <>{error}</>
  return (
    <>
      {data !==undefined ? <> 
      <Head>
        <title>{data.title}</title>
        
        <meta name="description" content={sanitizer(truncate(data.body))} />
      </Head>
      <div>
        <Navbar loc="blog" />

        <main className="container mt-3">
          <div className="row">
          <main className="col-12 col-md-9">
            
          <div className={`row g-0 `} >
          <div className="card p-2">
              <h1 className="h2 text-light mb-3">
                {data.title}
              </h1>
              <article className="card-body p-0" dangerouslySetInnerHTML={{ __html: sanitizer(data.body) }}>

              </article>

            </div>
            
            <div className="col-12 card mb-3 mt-3">
                  <h5 className="card-header header-main">Author</h5>
                <div className="d-flex flex-wrap justify-content-center card-body">
                    <div className={` ${styles.img_card}`}>
                    <Image
                      alt="author-image"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      src={orig + data.author.profile_image}
                    />

                    </div>
                    <span dangerouslySetInnerHTML={{
                          __html: sanitizer(data.author.about_me),
                        }}></span>
                        <div className="col-12 d-flex align-items-end">
                        <div className="row g-0 w-100 d-flex justify-content-end align-self-end">
                          <div className="col-12 d-flex align-items-center justify-content-center ">
                            {data.author.twitter ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.twitter}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faTwitterSquare} />
                            </button>:''}
                            {data.author.facebook ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.facebook}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faFacebookSquare} />
                            </button>:''}
                            {data.author.whatsapp ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`https://api.whatsapp.com/send?phone=${data.data.author.whatsapp}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faWhatsappSquare} />
                            </button>:''}
                            {data.author.linkdn ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.linkdn}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faLinkedin} />
                            </button>:''}
                            {data.author.instagram ?
                            <button className='btn button p-0 m-2' onClick={() => router.push(`${data.author.instagram}`)}>
                                <FontAwesomeIcon   size={"2x"}  icon={faInstagramSquare} />
                            </button>:''}
                          </div>
                        </div>
                    </div>
            
                </div>
            </div>
            {data !==undefined? <>
            <CommentForm url={url} data={data} />
            <Comments data={data} />
              </>:<><div className="card">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <span>Loading</span>

                </div>
                
                </div></>}

                
          </div>

          </main>
          <div className="col-12 col-md-3">
          <div className="card mb-3">
            <h5 className="card-header">
              Tags
            </h5>
            <div className="card-body ">
              {data.tags.map(function(tag, id){
                return(
                  <div key={id}>
                    <a  href="#"> {tag}</a>
                  </div>
                )
              })}

            </div>

          </div>

          
            
            
              <Categories />
              <TrendingPosts orig={orig} />

            

            

          </div>
          </div>

        </main>
        
        <div className="mt-3">
          <Footer />
        </div>
      </div>
      </> : <><Loader /></>}
    </>
  );
};
export default Post_detail;
