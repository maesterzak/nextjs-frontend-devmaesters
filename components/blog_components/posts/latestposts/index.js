import Link from "next/link";
import useSWR from "swr";
import { Loading, Spinner } from "@nextui-org/react";
import styles from './styles.module.css'

function NewPosts() {
    const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

    const {data, error} = useSWR('/api/blog/postlist', fetcher,{revalidateOnFocus:false})
    if (data) {
        const b = Object.values(data)[0].results
        console.log(b.slice(0, 4))
    }
    
    
    if (error) return <>{error}</>
    if(data){
        try{
            const b = Object.values(data)[0].results
            const posts = b.slice(0, 5) ?? []
            return(
                <>
                
                <div className="card-header">
                <h5>Latest Posts</h5>
                </div>
                    {posts ? 
                    
                    <ul className={`list-group  `}>
                        {posts.map((post, index)=>{
                            return(
                                <li className={` mt-1 mb-1 ${styles.list}`} key={index}><Link href={'#'}>{post.title}</Link></li>
                            )
                        })}
                    </ul>
                    :''}
                    
                </>
            )
        }
        catch{
            return(<>
                <div className="card-body">
                    <span>Something went wrong</span>
                </div>
            </>)
        }
    
            }
            else{
                return(
                    <Loading type={Spinner} size="xl" />
                )
            }
}
export default NewPosts