import Head from "next/head";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { API_URL, NEXT_MODE } from "../../config";
import useSWR from "swr";
import Loader from "../../components/Loader";
import dompurify from "isomorphic-dompurify";

import "highlight.js/styles/agate.css";
import Categories from "../../components/blog_components/categories/Categories";
import TrendingPosts from "../../components/blog_components/trending_posts/TrendingPosts";
import "highlight.js/styles/agate.css";
import { useEffect } from "react";
import CreateThread from "../../components/blog_components/threads/CreateThread";
import Author from "../../components/blog_components/aurthor/Author";
import CommentForm from "../../components/blog_components/comment/CommentForm";
import CommentList from "../../components/blog_components/comment/CommentList";
import Image from "next/image";
import SimilarContent from "../../components/blog_components/similar_content";


export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/all-posts/`);
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

export async function getStaticProps(context) {
  
  const id = context.params.id;
  const url = `${API_URL}/blog/post-detail/` + id + "/";

  const response = await fetch(`${API_URL}/blog/post-detail/` + id + "/");
  const res = await response.json();
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }
  
  return {
    props: { orig: orig, url: url, res: res },
  };
}

const fetcher = (...args) => fetch(...args).then((response) => response.json());
function Post_detail({ url, orig, res }) {
  const hljs = require("highlight.js");
  useEffect(() => {
    hljs.highlightAll();
    hljs.configure({ ignoreUnescapedHTML: true });
  });

  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  

  const { data, error } = useSWR(url, fetcher, {
    fallbackData: res,
    revalidateOnFocus: false,
  });
  
  const sanitizer = dompurify.sanitize;
  
  if (error) return <>{error}</>;
  const post = data.post ?? ''
  
  
  return (
    <>
      {post ? (
        <>
          <Head>
            <title>{post.title}</title>

            <meta name="description" content={sanitizer(truncate(post.body))} />
            <meta property='og:title' content={post.title}/>
            <meta property='og:image' content='//media.example.com/ 1234567.jpg'/>
            <meta property='og:description' content={sanitizer(truncate(post.body))}/>
            
          </Head>
          <div>
            <Navbar loc="blog" />
            

            <div className="container mt-3 position-relative">
              
              
              
              <div className="row">
                <main className="col-12 col-md-8 col-lg-9">
                  <div className={`row g-0 `}>
                    <article className="card p-2">
                    
                      <h1 className="h2 mb-3">{post.title}</h1>
                      {/* {data.image? 
                    <Image 
                      layout="responsive"
                      width={100}
                      height={100}
                      src={orig + data.image}
                    />
                    :''} */}
                      <div
                        className="card-body p-0"
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(post.body),
                        }}
                      ></div>
                      <div className="mt-2">
                      {post.video ? (
                        <div className="mt-3 mb-2">
                          <div className="row g-0 d-flex justify-content-center">
                            
                            <div className="col-12 col-md-10">
                            <iframe className="post-video "
                            src={`${post.video}`}>
                            </iframe>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      </div>

                      
                    </article>

                    

                    <Author data={post.author} orig={orig} />
                    <CommentForm data={post} url={url} />
                    <CommentList data={post.posts_comments} orig={orig} />
                    {data.similar_post.length === 0  ? '':
                    <SimilarContent data= {data.similar_post} /> }
                  </div>
                </main>
                <aside className="col-12 col-md-4 col-lg-3">
                  <div className="card mb-3">
                    <h5 className="card-header">Tags</h5>
                    <div className="card-body ">
                      {data.tags ? (
                        <>
                          {data.tags?.map(function (tag, id) {
                            return (
                             
                                <span className="me-1" key={id}> <a href="#">#</a>{tag.name}</span>
                            
                            );
                          })}
                        </>
                      ) : (
                        <div className="d-flex justify-content-center">
                          No tags{" "}
                        </div>
                      )}
                    </div>
                  </div>

                  <Categories />
                  {/* <TrendingPosts orig={orig} /> */}
                  <CreateThread />
                </aside>
              </div>
            </div>

            <div className="mt-3">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}
export default Post_detail;
