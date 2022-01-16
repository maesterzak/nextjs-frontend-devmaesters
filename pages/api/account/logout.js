import cookie from 'cookie'


const loggout = async (req, res) => {
    if (req.method === 'POST'){
        res.setHeader('Set-Cookie', [
            cookie.serialize(
                'access', '', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    expires:new Date(0),
                    sameSite:'Strict',
                    path:'/api/'
                }
            ),
            cookie.serialize(
                'refresh', '', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    expires:new Date(0),
                    sameSite:'Strict',
                    path:'/api/'
                }
            ),
        ]);
        return res.status(200).json({
            success: 'Successfully logged out'
        })
    }
}
export default loggout;