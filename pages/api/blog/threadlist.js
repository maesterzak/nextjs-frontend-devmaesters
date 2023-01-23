import { API_URL } from "../../../config";

const threadlist = async (req, res) => {
    if (req.method === 'GET') {
        res.setHeader('Cache-Control', 's-maxage=60000')
        try{
            
            const apiRes = await fetch (`${API_URL}/blog/threads/`)
            const data = await apiRes.json();
            
            res.json({
                data:data
            })
            
        }
        catch{
            return res.status(500).json({error: 'something went wrong'})
        }
    }
}
export default threadlist;

