
import Link from "next/link";
import styles from "./trending_post.module.css"
import Image from "next/image";
import useSWR from "swr";
import { API_URL, NEXT_MODE } from "../../../config/";




function TrendingPosts(){
  // var orig = `${API_URL}`
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }
  
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const {data:data, error:error} = useSWR('/api/blog/postlist', fetcher,{revalidateOnFocus:false})
  
  const posts = data ? data.data: []


    const sa = posts.slice().sort((a, b) => b.daily_views - a.daily_views);
  //change n
  const n = 3;
  const trending_posts = sa.slice(0, n);
    return(
        <>
        <div className="col-12 card mb-3">
        <h5 className="card-header">Trending Posts</h5>
                  <div className="card-body p-2">
            <div className="testing">
        <div
          id="carouselExampleCaptions"
          className="carousel slide h-100 w-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {trending_posts[0] ? (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active "
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            ) : (
              ""
            )}
            {trending_posts[1] ? (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
            ) : (
              ""
            )}
            {trending_posts[2] ? (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
              ></button>
            ) : (
              ""
            )}
          </div>
          <div className="carousel-inner h-100 w-100">
            {trending_posts[0]?.image ? (
              <div className="carousel-item active h-100 w-100">
                
                  <Image
                    layout="responsive"
                    // sizes="50vw"
                    width={100}
                    height={100}
                    src={orig + trending_posts[0].image}
                    className="d-block w-100 h-100"
                    alt="first_trending_post"
                    priority
                  />
                
                <div className="carousel-caption">
                  <Link href={/blog/ + trending_posts[0].id} passHref>
                  <span className="">{trending_posts[0].title}</span>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
            {trending_posts[1]?.image ? (
              <div className="carousel-item h-100 w-100">
                
                  <Image
                    layout="responsive"
                    height={100}
                    width={100}
                    // sizes="50vw"
                    
                    src={orig + trending_posts[1].image}
                    className="d-block w-100 h-100"
                    alt="first_trending_post"
                    priority
                  />
                
                
                <div className="carousel-caption ">
                  <Link href={/blog/ + trending_posts[1].id} passHref>
                  <span className="">{trending_posts[1].title}</span>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
            {trending_posts[2]?.image ? (
              <div className="carousel-item h-100 w-100">
                  
                  <Image
                    layout="responsive"
                    height={100}
                    width={100}
                    
                    src={orig + trending_posts[2].image}
                    className="d-block w-100 h-100"
                    alt="first_trending_post"
                    priority
                  />
                
                <div className="carousel-caption">
                  <Link href={/blog/ + trending_posts[2].id} passHref>
                    <span className="">{trending_posts[2].title}</span>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className=" carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
      </div>
        </>

    )
}
export default TrendingPosts;