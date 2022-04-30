
import Link from "next/link";
import useSWR from "swr";

  function Categories(){
    
    
    const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

    const {data, error} = useSWR('/api/blog/categorieslink', fetcher,{revalidateOnFocus:false})
    
    
    if (error) return <>{error}</>
    
      return(
          <>
          {data ?  
          <div className="col-12 card mb-3">
                  <h5 className="card-header">Categories</h5>
                  <div className="d-flex flex-wrap justify-content-between card-body">
            {data.data.map(function (category, id) {
                      return (
                        <div className="blog-link" key={id}>
                          <Link href={"/blog/category/" + category.name}>
                            {category.name}
                          </Link>
                        </div>
                      );
                    })}
                    </div>
                    </div> :<h1>loading</h1>}

          </>
      )
  }
  export default Categories;