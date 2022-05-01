import Navbar from "../../../components/navbar/Navbar";
import Head from "next/head";

import { API_URL, NEXT_MODE } from "../../../config";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../../../components/footer/Footer"));

import CategoryPost from "../../../components/blog_components/posts/CategoryPost";
import Categories from "../../../components/blog_components/categories/Categories";
import TrendingPosts from "../../../components/blog_components/trending_posts/TrendingPosts";
import CreateThread from "../../../components/blog_components/threads/CreateThread";

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/categories/`);
  const data = await res.json();

  const paths = data.map((category) => {
    return {
      params: { name: category.name.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
export async function getStaticProps(context) {
  const name = context.params.name;

  const url = `${API_URL}/blog/categories-paginated-posts/` + name;
  if (`${NEXT_MODE}` == "DEV") {
    var orig = `${API_URL}`;
  } else if (`${NEXT_MODE}` == "PROD") {
    var orig = "";
  }

  return {
    props: { name: name, url: url, orig: orig },
    revalidate: 10,
  };
}

function Category_list({ name, url, orig }) {
  return (
    <>
      <Head>
        <title>category- {name}</title>
        <meta name="keywords" content={name} />
        <meta
          name="description"
          content="This page offers a list of all the posts we have under..."
        />
      </Head>
      <div>
        <Navbar loc="blog" />

        <div className="container mt-3">
          <div className="row">
            <main className="col-12 col-md-8 col-lg-9">
              <CategoryPost url={url} header={`Posts under ${name} category`} />
            </main>

            <aside className="col-12 col-md-4 col-lg-3 mb-3">
              <Categories />
              <TrendingPosts orig={orig} />
              <CreateThread />
            </aside>
          </div>
        </div>

        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Category_list;
