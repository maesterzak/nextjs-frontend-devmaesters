import Link from "next/link";
import useSWR from "swr";
import { Loading, Spinner } from "@nextui-org/react";
import styles from './styles.module.css'

function NewThreads() {
    const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

    const {data, error} = useSWR('/api/blog/threadlist', fetcher,{revalidateOnFocus:false})
    if (data) {
        const b = Object.values(data)[0].results
        
    }
    
    
    if (error) return <>{error}</>
    if(data){
        const b = Object.values(data)[0].results
        const threads = b.slice(0, 5) ?? []
    return(
        <>
        <div className="card-header">
        <h5>Latest Threads</h5>
        </div>
            {threads ? 
            
            <ul className={`list-group  `}>
                {threads.map((thread, index)=>{
                    return(
                        <li className={` mt-1 mb-1 ${styles.list}`} key={index}><Link href={'#'}>{thread.title}</Link></li>
                    )
                })}
            </ul>
            :''}
            
        </>
    )
            }
            else{
                return(
                    <Loading type={Spinner} size="xl" />
                )
            }
}
export default NewThreads;