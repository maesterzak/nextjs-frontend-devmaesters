import Navbar from "../../../components/navbar/Navbar";
import styles from "./styles.module.css"
import Head from "next/head";
import { useRouter } from 'next/router'
import { Button, Text, Grid, Divider, Link } from "@nextui-org/react";
import { Card, Row } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch, faTag, faUserCheck } from "@fortawesome/free-solid-svg-icons";



function Checkout(params) {

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

           <div className="row g-2 p-3">
               <div className={`col-12 col-md-7 ${styles.checkout}`}>
               <div className="card-header header-main mb-3">
                <h1 className="h4 text-center">Checkout</h1>
                </div>
               <div className="card p-3">
                    <h4>Total: $2000</h4>
                    <h4>Quantity: 2</h4>
               </div>
               <div className="card mt-2 p-2">
                   <h4 className="text-center">Payment Methods</h4>
                   <p>Thank you for shopping at devmaesters mini-mall. We currently support the two (3)
                       methods of payment listed below
                   </p>
                   <Button  className="mb-3 bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWire" aria-expanded="false" aria-controls="collapseExample">Wire transfer</Button>
                   <div class="collapse" id="collapseWire">
                        <div class="card card-body">
                            <p>This method involves sending a wire transfer in usd to the account that is stated below. 
                                Please ensure that you use the transaction ID as your reference when making the transfer.
                            </p>
                            <ul>
                                <li>Account type: </li>
                                <li>Account name: </li>
                                <li>Account sort code: </li>
                                <li>Account routing number: </li>
                                <li>Account address: </li>
                                <li>Transaction ID: x0weusk</li>
                            </ul>
                            <p>After successfull transfer click on the buttton below to signify that payment has been made.<br/>
                            The moment the money is recieved an email will be sent to you with download link + instructions on how to get your product.<br/>
                            Please note that depending on the payment method you used this might take 1-4 days.
                            </p>
                            <div className="d-flex justify-content-center">
                            <Button className="w-50">Confirm payment</Button>
                            </div>
                            {/* Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. */}
                        </div>
                        </div>
                   <Divider />
                   <Button className="bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsdt" aria-expanded="false" aria-controls="collapseExample">Crypto USTD</Button>
                   <div class="collapse" id="collapseUsdt">
                    <div class="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                    </div>

                   <Divider />
                   <Button className="mt-3 bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFlutterwave" aria-expanded="false" aria-controls="collapseExample">Flutterwave</Button>
                   <div class="collapse" id="collapseFlutterwave">
                    <div class="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                    </div>

               </div>

               </div>

               <section className={`col-12 card col-md-5 ${styles.cart}`} >
                   
                   <div>
                   <div className="card-header header-main mb-3">
                    <h1 className="h4 text-center">Cart</h1>
                    </div>

                   <Grid.Container gap={1} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={12} sm={12} md={12}  key={index}>
          <Card>
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
      
      
    </Grid.Container>
    </div>

               </section>


               
            </div> 
        </>
    )
}
export default Checkout;