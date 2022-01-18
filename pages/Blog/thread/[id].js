import styles from '../blog.module.css'
import Footer from '../blog_components/Footer'
import Navbar from '../blog_components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import { API_URL } from '../../../config'



export const getStaticPaths = async () =>{
    const res = await fetch(`${API_URL}/blog/threads/`);
    const data = await res.json();

    
    const paths = data.map(thread => {
        return{
            params: {id: thread.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    
    const id = context.params.id;
    
    const res = await fetch(`${API_URL}/blog/thread-detail/` + id + '/');
    
    const data =await res.json();

    return{
        props: {thread:data}
    }
    

}
const orig = `${API_URL}`


const createTask =async (activeitem) => {
       
    await fetch(`${API_URL}/blog/message-create/`, {
        method:'POST',
        
        headers:{
            'content-type': 'application/json',
            
        },
        body:JSON.stringify(activeitem),
    })
    .then((res) => res.json)
    .then((result) => SVGMetadataElement(result.rows))
    .catch((err) => console.log(err));
    alert('Message added')
    
}; 



function Blog_chats({thread}) {
    const threadchat_handle = (event) => {
        event.preventDefault();
        const activeitem = {
            name:event.target.name.value,
            body:event.target.body.value,
            thread: event.target.thread.value
    
            
        };
        createTask(activeitem);
        refreshData()
        event.target.reset()
    }

    const [MessageModal, SetMessagemodal] = useState(false)
    const ToggleMessagemodal = () => {
        SetMessagemodal(!MessageModal);
    }
    
    const router = useRouter()
    const refreshData = () => {
        router.replace(router.asPath)
    }
    return (
        <>
        <Head>
        <title>SimpleLIFE | Thread- {thread.title}</title>
        <meta name="keywords" content="Home" />
        <link rel="icon" href="/favicon1.ico" />
        </Head>
        <div className={styles.blog_chat_body}>
            <Navbar />
        <div className={styles.blog_chat}>
            
               <div className={styles.blog_chat_sidebar1}>
                    <span>Add a new message</span>
                    <span>To join the conversation, click on the Add message button below.
                    </span>
                    <button onClick={ToggleMessagemodal}>Add Message</button>
               </div>
               <div className={MessageModal ? 'modal-background' : 'd-none'}>
                   
                   <h5 className='w-80'>Add a new message  <FontAwesomeIcon onClick={ToggleMessagemodal} className='bg-danger' icon={faTimesCircle} /></h5>
                   <div className={styles.blog_chat_image_select}>
                        select image
                    </div>
                    <div className={styles.blog_chat_input}>
                        <form onSubmit={threadchat_handle}>
                            <input id='thread' name='thread' className='d-none' defaultValue={thread.id}></input>
                            <input id='name' name='name' autoComplete='name' required className={styles.blog_chat_name} placeholder='Enter name'>
                                
                            </input>
                            <br/>
                            <textarea id='body' name='body'  className={styles.blog_chat_textarea} placeholder='Enter message'>

                            </textarea>
                        <button type='submit'>Add message</button>
                        </form>
                    </div>

               </div>
                <div className={styles.blog_chat_main}>
                    <h5>{thread.title}</h5>
                    <div className={styles.blog_chat_description}>
                        <span>{thread.description}</span>
                    </div>
                    <br/>
                    <div className={styles.blog_chat_list}>
                    
                        {thread.thread_messages.map(function(message, id) {
                            return(
                                <div className={styles.blog_chat_message} key={id}>
                            <div className={styles.blog_chat_message_image}>
                            <Image objectFit='responsive' width={80} height={80} alt='message_image' src={message.profile_image} />
                            </div>
                            <div className={styles.blog_chat_message_detail}>
                                <div className={styles.justify_space_around}>
                                    <span>{message.name}</span><span>{message.date_created}</span><br/>
                                    
                                </div>
                                <div className={styles.blog_chat_message_detail1}>
                                    <span>
                                        {message.body}
                                    </span>
                                </div>
                            </div>

                        </div>
                            )
                        })}
                        
                        
                        
                    </div>
                </div>
                <div className={styles.blog_chat_sidebar2}>
                    <div className={styles.blog_chat_sidebar_adds}>
                        adds
                    </div>
                    <div className={styles.blog_chat_sidebar_text}>
                        <div>
                        {thread.status  ? <span>Satus: Open</span>: <span>Status: Close</span>}</div>
                        <span>Messages: 50</span>
                        <span>Started: {thread.started}</span>
                        
                    </div>
                </div>
                      
        </div>
        <Footer />
        </div>
        </>
    )
}


export default Blog_chats
