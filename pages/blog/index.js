import Head from "next/head";
import Footer from "../../components/footer/Footer";
import Posts from "../../components/blog_components/posts/Posts"
import Categories from "../../components/blog_components/categories/Categories"
import TrendingPosts from "../../components/blog_components/trending_posts/TrendingPosts"
import Navbar from "../../components/navbar/Navbar";
import { API_URL, NEXT_MODE } from "../../config";
import Threads from "../../components/blog_components/threads/Threads";
import CreateThread from "../../components/blog_components/threads/CreateThread";


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

const Home1 = ({orig}) => {

  

  return (
    <>
      <Head>
        <title>devMaesters| Blog Homepage</title>
        <meta name="keywords" content="Home" />
        <meta
          name="description"
          content="Welcome to devmaesters, I offer free programming tutorials, hints, tricks and also platforms
        for asking questions(threads) and buying web services/sites."
        />
      </Head>

      <div className="position-relative">
        <Navbar loc="blog"  />
        

        <div className={`container mt-2 overflow-hidden mt-3`}>
          <div id="main" className="main">
            <div className="row">
              <main className="col-12 col-md-8 col-lg-9">
                <Posts header="Posts"/>          
                <Threads />
              </main>
              <aside className="col-md-4 col-lg-3">
                
                  
                    {/* <Categories /> */}
                    
                  
                
                  
                    <TrendingPosts orig={orig}/>
                    <CreateThread />
                  
                  
                
                <div className="col-12 card">
                  <div className="card-header"></div>
                </div>
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
