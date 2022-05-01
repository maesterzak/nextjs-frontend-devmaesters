import { API_URL } from "../../../config";
import dompurify from "isomorphic-dompurify";
import useSWRInfinite from "swr/infinite";
import Link from "next/link";
import useSWR from "swr";


const sanitizer = dompurify.sanitize;

const Posts = (props)=> {
  
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const {data:data1, error:error1} = useSWR('/api/blog/postlist', fetcher,{revalidateOnFocus:false})
  const posts = data1 ? data1.data: []
  
  
  
  const size_page = 8;
  const {
    data: data,
    error,

    size,
    setSize: setSize1,
  } = useSWRInfinite(
    (index) => `${API_URL}/blog/posts_paginated?ps=${size_page}&p=${index + 1}`,
    fetcher,
    { fallbackdata: posts, revalidateOnFocus: false }
  );

  const p_posts = data ? [].concat(...data) : [];
  const AA = p_posts.length;
  const BB = posts.length;
  const CC = data?.[0]?.length;
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = CC === 0;
  const isReachingEnd = isEmpty || BB <= AA;
 
  if (error) return <>{error}</>
  return (
    <>
      <div className="col-12 mb-3 ">
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
          className={`btn button btn-md btn-block  w-100 `}
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize1(size + 1)}
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
export default Posts;
