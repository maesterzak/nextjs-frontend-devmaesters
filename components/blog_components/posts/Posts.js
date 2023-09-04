import { API_URL } from "../../../config";
import dompurify from "isomorphic-dompurify";
import useSWRInfinite from "swr/infinite";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import { Loading, Grid } from "@nextui-org/react";
// import { Button } from '@nextui-org/react';

// const ButtonComponent = () => <Button>Click me</Button>;

const sanitizer = dompurify.sanitize;

const Posts = (props) => {

  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + "..." : str;
  };
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  // const {data:data1, error:error1} = useSWR('/api/blog/postlist', fetcher,{revalidateOnFocus:false})
  // const posts = data1 ? data1.data: []



  const page_limit = 8;

  const {
    data,
    error,

    size,
    setSize,
    isValidating
  } = useSWRInfinite(
    (index) => `${API_URL}/blog/posts?page=${index + 1}&limit=${page_limit}`,
    fetcher,
    { revalidateOnFocus: false }

  );
  if (error) return <>{error}</>
  if (!data) return <>Loading</>

  const posts = data?.map((item, index) => {
    return item.results
  }).flat()



  const postLength = posts?.length;
  const totalPosts = data[0]?.count;



  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || isValidating ||
    (size > 0 && posts && typeof posts[size - 1] === "undefined");
  const isEmpty = postLength === 0;
  const isReachingEnd = isEmpty || totalPosts == postLength;




  return (
    <>
      <div className="col-12 mb-3 ">
        <div className="card-header header-main mb-3">
          <h5 className="text-white">{props.header}</h5>
        </div>

        {posts ? (
          <>
            {posts.map(function (post, id) {
              return (
                <div className="card mb-3" key={id}>
                  <div className="card-header">{post.category.name}</div>
                  <article className="card-body">
                    <h5 className="card-title">{post.title}</h5>
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
                        {post.image ?
                          <Image
                            layout="responsive"
                            width={100}
                            height={100}
                            alt={post.title}
                            src={props.orig + post.image}
                          />
                          : ''}

                      </div>
                    </div>

                  </article>
                </div>
              );
            })}{" "}
          </>
        ) : (
          <>
            <Grid>
              <Loading color="primary" textColor="primary">
                Primary
              </Loading>
            </Grid>
          </>
        )}
      </div>
      <div className={`mb-3 mt-2 `}>
        <button
          className={`btn button btn-md btn-block  w-100 `}
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
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
