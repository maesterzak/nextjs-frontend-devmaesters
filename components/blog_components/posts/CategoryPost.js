import dompurify from "isomorphic-dompurify";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";

const sanitizer = dompurify.sanitize;

function CategoryPost(props) {
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  
  //posts

  
    
  
  
    
  const [limit, setLimit] = useState(8);

  const { data, error } = useSWR(`${props.url}?l=${limit}`, fetcher, {revalidateOnFocus:false});
  
  const p_posts = data ? [].concat(...data["results"]) : [];
  const AA = data?.["count"]
  const BB = p_posts?.length
  
  const isLoadingInitialData = !data  && !error;
const isLoadingMore =
    isLoadingInitialData || (data && typeof data === "undefined");

    const isEmpty = AA === 0;
    
    const isReachingEnd = isEmpty || BB === AA;
  
  
  
  return (
    <>
      <div className="col-12 mb-3">
        <div className="card-header header-main mb-3">
          <h5>{props.header}</h5>
        </div>

        {p_posts ? (
          <>
            {p_posts.map(function (post, id) {
              return (
                <div className="card mb-3" key={id}>
                  <div className="card-header">{post.category.name}</div>
                  <article className="card-body">
                    <h5 className="card-title text-light">{post.title}</h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(truncate(post.body)),
                      }}
                    ></p>
                    <Link role="button" href={"/blog/" + post.id}>
                                Readmore
                    </Link>
                      
                    <div className="row d-flex justify-content-center mt-2">
                      <div className="col-12 col-md-6 col-lg-4">
                      {post.image? 
                    <Image 
                      layout="responsive"
                      width={100}
                      height={100}
                      src={props.orig + post.image}
                    />
                    :''}

                      </div>
                    </div>   


                  </article>
                </div>
              );
            })}{" "}
          </>
        ) : (
          <>
            <h6>Loading...</h6>
          </>
        )}
      </div>
      <div className={`mb-3 mt-2 `}>
      <button
                    className={`btn button btn-md btn-block  w-100`}
                    disabled={isLoadingMore || isReachingEnd}
                    onClick={() => setLimit(limit + 8)}
                  >
                    {isLoadingMore
                      ? "loading..."
                      : isReachingEnd
                      ? "No more posts"
                      : "load more"}
                  </button>
      </div>
    </>
  );
}
export default CategoryPost;
