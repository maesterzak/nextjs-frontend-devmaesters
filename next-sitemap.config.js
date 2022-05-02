const URL = process.env.URL




module.exports={
    siteUrl: URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow:['/mini-mall/*', '/online-solver/*', '/login/*', '/register/*']},
            { userAgent: "*", allow:"/"},

        ],
        additionalSitemaps: [`${URL}/server-sitemap.xml`],
    },
    
    exclude:[ '/server-sitemap.xml', '/blog/dashboard', '/mini-mall', '/OnlineSolver', '/login', '/register']
    
    
}