import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from 'next'
import { API_URL} from "../../config/index"


const URL = process.env.URL
export const getServerSideProps = GetServerSideProps = async(ctx)=>{
    const post_res = await fetch (`${API_URL}/blog/posts/`)
    const posts  = await post_res.json()
    const thread_res = await fetch (`${API_URL}/blog/threads/`)
    const threads  = await thread_res.json()
    const category_res = await fetch (`${API_URL}/blog/categories/`)
    const categories  = await category_res.json()

    const fields = []
    var x = posts.map(post => ({loc: `${URL}/Blog/${post.id}`, lastmod: new Date().toISOString(),}))
    
    var q = x.length
    for (let i=0; i < q; i++) {  
        fields.push(x[i])
    }
    var x = threads.map(threads => ({loc: `${URL}/Blog/thread/${threads.id}`, lastmod: new Date().toISOString(),}))
    
    var q = x.length
    for (let i=0; i < q; i++) {  
        fields.push(x[i])
    } 
    var x = categories.map(category => ({loc: `${URL}/Blog/categorY/${category.name}`, lastmod: new Date().toISOString(),}))
    
    var q = x.length
    for (let i=0; i < q; i++) {  
        fields.push(x[i])
    } 
    
    return getServerSideSitemap(ctx, fields)
}
export default function Site(){
}