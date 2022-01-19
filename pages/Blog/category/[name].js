import Navbar from '../blog_components/Navbar';
import Head from 'next/head';

import styles from '../blog.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import Footer from '../blog_components/Footer';
import { API_URL } from '../../../config';
import Image from 'next/image';


export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/blog/posts/`);
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { name: post.category.name.toString()},
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const name = context.params.name;
  const res = await fetch(`${API_URL}/blog/categories-posts/` + name + '/');

  const data = await res.json();

  return {
    props: { category_posts: data, name:name },
  };
};

const orig = `${API_URL}`

function category_list({ category_posts, name}) {
    
    const truncate = (str) => {
        return str.length > 50 ? str.substring(0, 100)+"...":str;
    }
    
    return (
      <>
        <Head>
        <title>SimpleLIFE | category- {name}</title>
        <meta name="keywords" content="Home" />
        </Head>
        <div>
            <Navbar />
            <br />
            <div className='below-navbar'>
            <section className={'d-flex flex-wrap'}>
            <div className={styles.post_cate_list}>    
            <div className='header_decor'><h6>Posts under {name} category</h6></div>
            <div className={styles.post_list}>
            {category_posts.map(function(post, id){
                            return(
                                <div className={styles.post_body} key={id}>
                                <div className={styles.post_image}>
                                    <Image layout="fill"  objectFit="cover" alt='post image' src={post.image} />
                                    <span className={styles.post_image_text}>{post.category.name}</span>
                                </div>
                                <div className={styles.post_text}>
                                    <h5>{post.title}</h5>
                                    <span dangerouslySetInnerHTML={{__html:truncate(post.body)}} />
                                    
                                </div>    
                                <div className={styles.post_footer}>
                                        <span><Link role="button" href={'/Blog/' + post.id}>Readmore</Link></span><span>{post.handshakes} <FontAwesomeIcon icon={faHandshake} /></span>
                                </div>
        
                            </div>
                            )
                        })}

            </div>
            </div>
            <div className={styles.category_adds_body}>
               <div className='d-flex justify-content-center h-50 gap-1'>
                    <div className={styles.add_box}>
                          <span>Adds</span>
                    </div>
                    <div className={styles.add_box}>
                    <span>Adds</span>
                    </div>
                </div>

                <div className='d-flex justify-content-center h-50 gap-1'>
                      <div className={styles.add_box}>
                      <span>Adds</span>
                    </div>
                    <div className={styles.add_box}>
                    <span>Adds</span>
                    </div>
                  </div>           
            </div>
        
        </section>
        </div>
        <Footer />
        </div>
        </>
    );
    }
export default category_list;
