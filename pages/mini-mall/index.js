import styles from './mini_mall.module.css'

import { useRouter } from 'next/router'
import Head from "next/head";
import { Popover, Button, Text, Grid } from "@nextui-org/react";
import Navbar from '../../components/navbar/Navbar'
import { Card, Row } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch, faTag, faUserCheck } from "@fortawesome/free-solid-svg-icons";

import { faDiscourse } from '@fortawesome/free-brands-svg-icons'
import NewPosts from '../../components/blog_components/posts/latestposts';
import { Image } from "@nextui-org/react";
import NewThreads from '../../components/blog_components/posts/latestthreads';


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
        <link rel="icon" href="/favicon1.ico" />
        
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
          
            

            <Grid.Container gap={1} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={12} sm={6} md={6}  key={index}>
          <Card isHoverable isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                autoResize
                src={'/images/home_images/tutorial.png'}
                maxDelay={10000}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>Django on vercel with ckeditor</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>

    <button className='button w-100 btn'>Load more</button>
    <div className={`row mt-3 g-0 ${styles.bottomNav} d-flex justify-content-center`}>
      <div className='col-10 col-md-5 card p-2'>
        <div className='row g-0'>
          <div className='col-3 d-flex justify-content-center align-items-center'>
            <FontAwesomeIcon className={`${styles.fontawesome}`}   size={"1x"}  icon={faTag} />
          </div>
          <div className='col-3 d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon className={`${styles.fontawesome}`}   size={"1x"}  icon={faDiscourse} />
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
            <Popover.Content>
              <Text css={{ p: "$10" }}>
                This is the content of the popover.
              </Text>
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
