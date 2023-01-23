import { Popover, Button, Text, Grid, Divider } from "@nextui-org/react";
import { Card, Row } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch, faTag, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Image } from "@nextui-org/react";
import { API_URL } from "../../../config";
import useSWRInfinite from "swr/infinite";
import styles from './styles.module.css';
import Link from "next/link";


function Products(params) {


    const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  // const {data:data1, error:error1} = useSWR('/api/blog/postlist', fetcher,{revalidateOnFocus:false})
  // const posts = data1 ? data1.data: []
  
  
  
  const page_limit = 2;
   
  const {
    data,
    error,

    size,
    setSize,
    isValidating
  } = useSWRInfinite(
    (index) => `${API_URL}/mall?page=${index + 1}&limit=${page_limit}`,
    fetcher,
    { revalidateOnFocus: false }
    
  );
  
  if (error) return <>{error}</>
  if(!data) return <>Loading</>

  const products = data?.map((item, index)=>{
    return item.results
  }).flat()
  
  
  
  const productsLength = products?.length;
  const totalProducts = data[0]?.count;
 

  
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || isValidating ||
    (size > 0 && products && typeof products[size - 1] === "undefined");
  const isEmpty = productsLength === 0;
  const isReachingEnd = isEmpty || totalProducts == productsLength;

  // console.log('qq', products)

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
    
    return(
        <>
            <Grid.Container gap={1} justify="flex-start">
      {products.map((item, index) => (
        <Grid xs={12} sm={4} md={4}  key={index}>
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
                <Text b>{item.name}</Text>
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
    </Grid.Container>
    <div className={`mb-3 mt-2 `}>
        <button
          className={`btn button btn-md btn-block  w-100 `}
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? "loading..."
            : isReachingEnd
            ? "No more products"
            : "load more"}
        </button>
      </div>
        </>
    )
}
export default Products;