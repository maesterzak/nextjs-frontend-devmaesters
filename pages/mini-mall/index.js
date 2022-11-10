import styles from './mini_mall.module.css'

import { useRouter } from 'next/router'
import Head from "next/head";
import { Popover, Button, Text, Grid, Divider, Link } from "@nextui-org/react";
import Navbar from '../../components/navbar/Navbar'
import { Card, Row } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch, faTag, faUserCheck } from "@fortawesome/free-solid-svg-icons";

import { faDashcube, faDiscourse } from '@fortawesome/free-brands-svg-icons'
import NewPosts from '../../components/blog_components/posts/latestposts';
import { Image } from "@nextui-org/react";
import NewThreads from '../../components/blog_components/posts/latestthreads';
import Products from '../../components/mall/products';


const MiniMall = () => {
    const router = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 4000)
    // }, [router])
    const list = [
        {
          title: "Orange",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "/images/fruit-4.jpeg",
          price: "$5.30",
        },
        {
          title: "Advocato",
          img: "/images/fruit-5.jpeg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
    return (
        <>
        <Head>
        <title>Mini-Mall | DEVMAESTERS</title>
        <meta name="description" content="Welcome to devmaesters.com we offer free programming tips,tutorials, tricks and coding support." />
        <meta name="keywords" content="programming, nextjs, reactjs, coding, websites, python tutorials, prisma, graphql, django, django rest framework" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/newlogo/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/newlogo/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/newlogo/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property='og:title' content='DEVMAESTERS MINI-MALL'/>
        <meta property='og:image' content='//media.example.com/ 1234567.jpg'/>
        
        <meta property='og:url' content='devmaesters.com/mini-mall' />
        </Head>
        <Navbar loc='mini-mall' />

        
        
        <div className='row p-3 g-0'>
          <main className='m-lg-4 col-12 p-md-5 col-md-8 card col-lg-8 position-relative'>
          <h1 className='text-center card-title'>Mini Mall</h1>
            <div className='bg-light'>
            <Image   
              showSkeleton
              autoResize 
              maxDelay={10000}
              src="/images/home_images/store.png"
              alt="Default Image"
            />
            {/* <img  src={'/images/home_images/store.png'}  /> */}
            </div>
            <div className="mt-5 card-header header-main mb-3">
              <h5>Showing All</h5>
            </div>
            {/* <div className='row gap-2'>
            {list.map((item, index) => (
              <div className='col-5 card'>
                <div className='card-image'>
                <Image
                autoResize
                src={'/images/home_images/tutorial.png'}
                maxDelay={10000}
                alt={item.title}
              />

                </div>
                <h4>Hello</h4>

              </div>
            ))}

            </div> */}
          
            <Products />

            

    
    <div className={`row mt-3 g-0 ${styles.bottomNav} d-flex justify-content-center`}>
      <div className='col-10 col-md-5 card p-2'>
        <div className='row g-0'>
          <div className='col-3 d-flex justify-content-center align-items-center'>
            <FontAwesomeIcon className={`${styles.fontawesome}`}   size={"1x"}  icon={faTag} />
          </div>
          <div className='col-3 d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon className={`${styles.fontawesome}`}   size={"1x"}  icon={faDashcube} />
          </div>
          <div className='col-3 d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon className={`${styles.fontawesome}`}   size={"1x"}  icon={faSearch} />
          </div>
          <Popover placement={"top"}>
            <Popover.Trigger>
            <div className='col-3 d-flex justify-content-center align-items-center position-relative'>
          <FontAwesomeIcon className={`${styles.fontawesome}`}   size={"1x"}  icon={faCartPlus} />
          <span className={`${styles.cartAmount} d-flex justify-content-center`}>1</span>

          </div>
            </Popover.Trigger>
            <Popover.Content className={`${styles.minimall_popup}`} >
              <h4 className={`text-center ${styles.cart_header}`}>
                Cart
              </h4>
              <Grid.Container gap={1} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={12} sm={12} md={12}  key={index}>
          <Card isHoverable isPressable>
            <Card.Body css={{ p: 0 }}>
              {/* <Card.Image
                autoResize
                src={'/images/home_images/tutorial.png'}
                maxDelay={10000}
                alt={item.name}
              /> */}
              
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="space-between">
                <Text b>{item.title}</Text>
                <Text  css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", display:"flex", justifyContent:"space-between", width:"stretch", alignItems:"center" }}>
                  <span>${item.price} </span><button  className={`btn rounded-circle`}><FontAwesomeIcon className={`${styles.fontawesome}`}   size={"1x"}  icon={faCartPlus} /></button>
                </Text>
                <Divider />
                <h6>technologies</h6><Divider />
                
                <div className={`${styles.product_tag}`}>Django</div><div className={`${styles.product_tag}`}>Ckeditor</div><div className={`${styles.product_tag}`}>Vercel</div>
                
              </Row>
              
              
            </Card.Footer>
          </Card>
        </Grid>
      ))}
      <Divider />
      <div className={`position-sticky bottom-0 mt-3 w-100 p-1  ${styles.cart_header}`}>
      <Text css={{p:"$10", color:"White"}} b>Total: $3000</Text><Link href={'/mini-mall/checkout'} className='active-btn btn '>Checkout</Link>
      </div>
      
    </Grid.Container>
            </Popover.Content>
          </Popover>
          

        </div>

      </div>

    </div>


          </main>
          <aside className='col-12 col-md-4 col-lg-3'>
            
            <div className='card mt-4'>
              
              
              <NewPosts />
              

            </div>
            <div className='card mt-4'>
              <NewThreads />

            </div>

          </aside>

        </div>
        </>
    )
}

export default MiniMall;
