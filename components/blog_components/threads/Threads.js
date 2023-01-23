import { API_URL } from "../../../config";
import useSWRInfinite from "swr/infinite";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";




function Threads(){
    const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  // const {data:data1, error:error1} = useSWR('/api/blog/threadlist', fetcher,{revalidateOnFocus:false})
  
  // const threads = data1 ? data1.data: []
  // const size_page = 8;

  // const {
  //   data,
  //   error,
  //   size,
  //   setSize,
  // } = useSWRInfinite(
  //   (index) =>
  //     `${API_URL}/blog/paginated_threads/?ps=${size_page}&p=${index + 1}`,
  //   fetcher,
  //   { revalidateOnFocus: false }
  // );
  // if (error) return <>{error}</>
  // if(!data) return <>Loading</>
  // const p_threads = data ? [].concat(...data) : [];
  //   console.log('dd', p_threads)
  // const isLoadingInitialData2 = !data && !error;
  // const isLoadingMore2 =
  //   isLoadingInitialData2 ||
  //   (size > 0 && data && typeof p_threads[0].result[size - 1] === "undefined");
  // const isEmpty2 = p_threads[0].result?.[0]?.length === 0;
  // const isReachingEnd2 = isEmpty2 || data.count <= p_threads[0].result.length;

  const page_limit = 8;
   
  const {
    data,
    error,

    size,
    setSize,
    isValidating
  } = useSWRInfinite(
    (index) => `${API_URL}/blog/threads?page=${index + 1}&limit=${page_limit}`,
    fetcher,
    { revalidateOnFocus: false }
    
  );
  if (error) return <>{error}</>
  if(!data) return <>Loading</>

  const threads = data?.map((item, index)=>{
    return item.results
  }).flat()
    
  
  
  const threadLength = threads?.length;
  const totalThreads = data[0]?.count;
  
  
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || isValidating ||
    (size > 0 && threads && typeof threads[size - 1] === "undefined");
  const isEmpty = threadLength === 0;
  const isReachingEnd = isEmpty || totalThreads  == threadLength;
  

    return(
        <>
            <div className="col-12 mb-3 card">
                <div className="d-flex justify-content-between header-main">
                  <h5 className="card-header header-main">Threads</h5>
                  <button className="btn button">
                      <FontAwesomeIcon
                        size="2x"
                        // className={styles.faPlusCircle}
                        icon={faPlusCircle}
                      />
                    </button>
                    </div>

                  <div className="card-body">
                  {threads ? (
                      <>
                        {threads.map(function (thread, id) {
                          return (
                            <article
                              key={id}
                              className={`mb-3`}
                            >
                              <div className="row g-0 w-100">
                                <div className="col-11 col-md-11">
                                  <Link href={"/blog/thread/" + thread.id}>
                                    {thread.title}
                                  </Link>
                                </div>
                                <div className="col-1 col-md-1">
                                  <FontAwesomeIcon
                                    size="1x"
                                    className="faComments"
                                    icon={faComment}
                                  />
                                  {/* <sup>
                                    {Object.keys(thread.thread_messages).length}
                                  </sup> */}
                                </div>
                              </div>
                            </article>
                          );
                        })}{" "}
                      </>
                    ) : (
                      <>
                        <h6>Loading Threads...</h6>
                      </>
                    )}

                    <div className="d-flex justify-content-center mb-3 mt-2">
                      <button
                        className={`btn button btn-md btn-block  w-100 `}
                        disabled={isLoadingMore || isReachingEnd}
                        onClick={() => setSize(size + 1)}
                      >
                        {isLoadingMore
                          ? "loading..."
                          : isReachingEnd
                          ? "No more threads"
                          : "load more"}
                      </button>
                    </div>
                  </div>
                </div>
        </>
    )
}
export default Threads;