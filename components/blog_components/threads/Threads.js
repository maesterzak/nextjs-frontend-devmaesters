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

  const {data:data1, error:error1} = useSWR('/api/blog/threadlist', fetcher,{revalidateOnFocus:false})
  
  const threads = data1 ? data1.data: []
  const size_page = 8;

  const {
    data: data2,
    error: error2,
    size: size2,
    setSize: setSize2,
  } = useSWRInfinite(
    (index) =>
      `${API_URL}/blog/paginated_threads/?ps=${size_page}&p=${index + 1}`,
    fetcher,
    { fallbackdata: threads, revalidateOnFocus: false }
  );

  const p_threads = data2 ? [].concat(...data2) : [];

  const isLoadingInitialData2 = !data2 && !error2;
  const isLoadingMore2 =
    isLoadingInitialData2 ||
    (size2 > 0 && data2 && typeof data2[size2 - 1] === "undefined");
  const isEmpty2 = data2?.[0]?.length === 0;
  const isReachingEnd2 = isEmpty2 || threads.length <= p_threads.length;

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
                    {p_threads ? (
                      <>
                        {p_threads.map(function (thread, id) {
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
                                  <sup>
                                    {Object.keys(thread.thread_messages).length}
                                  </sup>
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
                        disabled={isLoadingMore2 || isReachingEnd2}
                        onClick={() => setSize2(size2 + 1)}
                      >
                        {isLoadingMore2
                          ? "loading..."
                          : isReachingEnd2
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