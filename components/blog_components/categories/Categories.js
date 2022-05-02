
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
                  <div className=" card-body d-flex flex-wrap">
            {data.data.map(function (category, id) {
                      return (
                        
                          <Link href={"/blog/category/" + category.name} key={id} passHref>
                            <a className="m-1">
                            {category.name}</a>
                          </Link>
                        
                      );
                    })}
                    </div>
                    </div> :<div>loading..</div>}

          </>
      )
  }
  export default Categories;