
import Head from "next/head";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { API_URL, NEXT_MODE } from "../../config";
import useSWR from "swr";
import Loader from "../../components/Loader";
import dompurify from 'isomorphic-dompurify';

import 'highlight.js/styles/agate.css'
import Categories from "../../components/blog_components/categories/Categories";
import CommentForm from "../../components/blog_components/comment/CommentForm";

import Comments from "../../components/blog_components/comment/CommentList";
import PostDetail from "../../components/blog_components/post_detail/PostDetail";
import Author from "../../components/blog_components/aurthor/Author"
import TrendingPosts from "../../components/blog_components/trending_posts/TrendingPosts";




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
    props: { orig: orig, url:url, data:res },
  };
};


const fetcher = (...args)=> fetch(...args).then((response) => response.json())
function Post_detail({ url, orig, data }) {
  
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };

  
  // const {data, error} = useSWR(url, fetcher, {fallbackData:res, revalidateOnFocus:false})
  
  const sanitizer = dompurify.sanitize
    
  // if (error) return <>{error}</>
  return (
    <>
      {/* {data ? <>  */}
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
            <PostDetail data={data} />
            <Author data={data} orig={orig}/>
            <CommentForm url={url} data={data} />
            <Comments data={data} />

                
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
      {/* </> : <><Loader /></>} */}
    </>
  );
};
export default Post_detail;
