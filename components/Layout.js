import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { check_auth_status } from "../actions/auth";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from 'next/router';


const Layout = ({children}) => {
  const { asPath } = useRouter();
  
  const dispatch = useDispatch();
  const Reduxtheme = useSelector(state => state.theme.theme)
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined){
      dispatch(check_auth_status());

    }
    
  }, [dispatch])
  
  const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    const Storedtheme = JSON.parse(localStorage.getItem('theme')) ?? 'dark'
    setTheme(Storedtheme)
    
  })

    const light = {
    cardcolor:"#ffffff",
    
    backgroundcolor:"rgb(211, 210, 210)",
    linkcolor: "rgb(255, 168, 6)",
    linkhover:"#ffa200a4",
    fontcolor:"black",
    secondbackground: "rgb(150, 98, 1)",
    cardheadercolor: "rgb(200, 131, 4)", 
    
  }
  const dark = {
    cardcolor : "#222",
    backgroundcolor:"#16151d",
    linkcolor: "rgb(255, 168, 6)",
    linkhover:"#ffa200a4",
    fontcolor:"white",
    secondbackground: "#03031b",
    cardheadercolor: "#463610",
  }
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--card-color')
    if (theme === 'light'){
       
        document.documentElement.style.setProperty('--card-color', light.cardcolor)
        document.documentElement.style.setProperty('--background-color', light.backgroundcolor)
        document.documentElement.style.setProperty('--link-color', light.linkcolor)
        document.documentElement.style.setProperty('--link-hover', light.linkhover)
        document.documentElement.style.setProperty('--second-background', light.secondbackground)
        document.documentElement.style.setProperty('--font-color', light.fontcolor)
        document.documentElement.style.setProperty('--card-header-color', light.cardheadercolor)
    }
    else{
      
        document.documentElement.style.setProperty('--card-color', dark.cardcolor)
        document.documentElement.style.setProperty('--background-color', dark.backgroundcolor)
        document.documentElement.style.setProperty('--link-color', dark.linkcolor)
        document.documentElement.style.setProperty('--link-hover', dark.linkhover)
        document.documentElement.style.setProperty('--second-background', dark.secondbackground)
        document.documentElement.style.setProperty('--font-color', dark.fontcolor)
        document.documentElement.style.setProperty('--card-header-color', dark.cardheadercolor)
    }
    
  }, [theme])

  const [PrivacyPolicy, setPrivacyPolicy] = useState('d-none')
  
  useEffect(()=>{
    if (asPath != '/portfolio'){
    setPrivacyPolicy('d-block')}
  }, []) 



  

   
    return ( 
        <div className="position-relative">
            
            {children }
              
              <div style={{"bottom":0, }} className={`col-8 col-md-4 mx-3 mb-1 card p-policy position-fixed outline-light p-1 ${PrivacyPolicy}`}>
                <div className="card-body">
                <h6 className="h3 text-center">Privacy Policy </h6>
                <p>

By using our website, <br/>you agree that devmaesters can store cookies on your device and disclose information in accordance with our <Link href={'/privacy-policy'}>privacy policy</Link>.
                </p>
                <div className="d-flex justify-content-center">
                  <button onClick={()=>setPrivacyPolicy('d-none')} className="btn button">Accept</button>
                </div>
                </div>
              </div>

            
            
        </div>
        

    
        
     );
}
 
export default Layout;