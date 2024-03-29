import Head from "next/head";
import Footer from "../../components/footer/Footer";
import Posts from "../../components/blog_components/posts/Posts";
import Categories from "../../components/blog_components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import { API_URL, NEXT_MODE } from "../../config";
import Threads from "../../components/blog_components/threads/Threads";
import CreateThread from "../../components/blog_components/threads/CreateThread";
import { Input, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import dynamic from 'next/dynamic'
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import HeadComponent from "../../components/HeadComponent";
const SingleAds = dynamic(() => import('../../components/Ads/SingleAds'), { ssr: false });

export async function getStaticProps() {
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }
  return {
    props: { orig: orig },
    revalidate: 10,
  };
}

const Home1 = ({ orig }) => {
  const router = useRouter();

  return (
    <>

      <HeadComponent title="BLOG | DEVMAESTERS" description="Welcome to devmaesters, I offer free programming tutorials, hints, tricks and also platforms
        for asking questions(threads) and buying web services/sites." />


      <div className="position-relative">
        <Navbar loc="blog" />

        <div className={`container mt-2 overflow-hidden mt-3`}>
          <div id="main" className="main">
            <div className="row">
              <main className="col-12 col-md-8 col-lg-9 ">
                {/* <h1 className="text-center site-title">Blog</h1> */}
                <div className="d-flex justify-content-center ">
                  <div className=" card mb-3 position-relative w-100 d-flex align-items-center justify-content-center">

                    <div className={` w-100 p-3 mb-3`}>
                      <h1 className="text-center site-title">BLOG</h1>
                      <Spacer y={1.5} />
                      <div className="row p-2">
                        <Input
                          clearable
                          underlined
                          id="seach_input"
                          labelPlaceholder="Seach posts & threads"
                        // initialValue="Search"
                        />
                      </div>
                      <Spacer y={0.5} />
                      <div className="d-flex justify-content-center flex-wrap">
                        <Button disabled className="button btn">
                          Search
                        </Button>
                      </div>
                      <p className="text-center mt-2  text-center">
                        Please follow us on our various social media handles to
                        get notified on latest information
                      </p>
                      <div className="d-flex justify-content-between flex-wrap gap-1">
                        <button
                          className="btn p-0 m-0"
                          onClick={() =>
                            router.push("https://web.facebook.com/devmaesters/")
                          }
                        >
                          <FontAwesomeIcon
                            className={`fontawesome`}
                            size={"3x"}
                            icon={faFacebookSquare}
                          />
                        </button>
                        <button
                          disabled
                          className="btn p-0 m-0"
                          onClick={() => router.push("/")}
                        >
                          <FontAwesomeIcon
                            className={`fontawesome`}
                            size={"3x"}
                            icon={faLinkedin}
                          />
                        </button>

                        <button
                          disabled
                          className="btn p-0 m-0"
                          onClick={() => router.push("#")}
                        >
                          <FontAwesomeIcon
                            className={`fontawesome`}
                            size={"3x"}
                            icon={faTwitterSquare}
                          />
                        </button>
                        <button
                          className="btn p-0 m-0"
                          onClick={() =>
                            router.push(
                              "https://www.youtube.com/channel/UCTtHtIyFzxyQtF5P8fBpaew"
                            )
                          }
                        >
                          <FontAwesomeIcon
                            className={`fontawesome`}
                            size={"3x"}
                            icon={faYoutube}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <Posts header="Posts" orig={orig} />
                <Threads />
              </main>
              <aside className="col-md-4 col-lg-3">
                <Categories />
                {/* {typeof window !== 'undefined' && (
                  <div style={{ minHeight: "140px", width: "100%", background: "red" }}>
                    <SingleAds />
                  </div>
                )} */}
                {/* <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-2931659559298094"
                  data-ad-slot="7891222837"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins> */}
                {/* todo */}
                <div className="d-flex gap-5 py-2 ">
                  <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style={{ width: "120px", height: "340px" }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=maesterzak-20&language=en_US&marketplace=amazon&region=US&placement=B07DWM9WNM&asins=B07DWM9WNM&linkId=56d7f25d26bd3d1f52eb6b48da2771c1&show_border=false&link_opens_in_new_window=true"></iframe>
                  <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style={{ width: "120px", height: "340px" }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=maesterzak-20&language=en_US&marketplace=amazon&region=US&placement=B07KXSR99Y&asins=B07KXSR99Y&linkId=e0db71b61160ccb242f0a78f114c7a9b&show_border=true&link_opens_in_new_window=true"></iframe>
                </div>
                <CreateThread />
              </aside>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home1;
