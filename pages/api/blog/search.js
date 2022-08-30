import { API_URL } from "../../../config";

const search = async (req, res) => {
    
    if (req.method === 'POST') {
        res.setHeader('Cache-Control', 's-maxage=3000')
        const 
            bodyData
         = req.body;
        const body = JSON.stringify({
        bodyData
        })
        try{
            
            const apiRes = await fetch (`${API_URL}/blog/search/`,{
                
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body:body
            })
            const data = await apiRes.json()
            
            res.json({
                data
            })
            
            
            
        }
        catch{
            return res.status(500).json({error: 'something went wrong'})
        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({'error': `Method ${req.method} not allowed`});
    }
}
export default search;
