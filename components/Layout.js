import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { check_auth_status } from "../actions/auth";
import { useSelector } from "react-redux";


const Layout = ({children}) => {
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
    cardcolor:"#ebebeb",
    
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

  

   
    return ( 
        <div>
            
            {children }
            
        </div>
        

    
        
     );
}
 
export default Layout;