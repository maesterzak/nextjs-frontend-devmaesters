import Link from "next/link";
import styles from "./style.module.css";

function SimilarContent(props) {
    
    return(
        <>
        <div className="col-12 card mb-3">
            <div className="card-header header-main mb-3">
                <h5>Similar Content</h5>
            </div>
            <div className={`card-body d-grid1 ${styles.card_body}`}>
            <ul style={{"paddindLeft":0}}>
            {props.data.map(function(item, index){
            return(
                
                    
                    <li key={index}><Link href={item.status ? '/blog/thread/' + item.id : '/blog/' + item.id}>{item.title}</Link></li>
               
            )
        })}
         </ul>

            </div>
        </div>    
        
        </>
    )
}
export default SimilarContent;