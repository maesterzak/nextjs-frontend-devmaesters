import { API_URL } from "../../../config";
import cookie from 'cookie';
import { StrictMode } from "react";

const loggin = async (req, res) => {
    if (req.method === 'POST') {
        
        const {
            username,
            password
            
        } = req.body;
        const body = JSON.stringify({
            
            username,
            password
        })
        
        try{
            const apiRes = await fetch (`${API_URL}/api/token/`,{
                
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body:body
            })
            const data = await apiRes.json()
            
            if (apiRes.status === 200){
                console.log(data)
                res.setHeader('Set-Cookie', [
                    cookie.serialize(
                        'access', data.access, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            maxAge:60*30,
                            sameSite:'Strict',
                            path:'/api/'
                        }
                    ),
                    cookie.serialize(
                        'refresh', data.refresh, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            maxAge:60*60*24,
                            sameSite:'Strict',
                            path:'/api/'
                        }
                    ),
                ])
                
                
                return (
                    res.status(200).json({
                        success: 'Logged in successfully'
                        
                    })
                    
                ) 
                
            }
            
            else{
                return res.status(apiRes.status).json({error:'AUTHENTICATION FAIL'})
            }

        }
        catch{
            return res.status(500).json({error: 'something went wrong '})
        }
    

    }    
    else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({'error': `Method ${req.method} not allowed`});
    }
}
export default loggin;