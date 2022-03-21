const URL = process.env.URL




module.exports={
    siteUrl: URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow:["/Blog/blog_components/*", '/api/*','/components/*']},
            { userAgent: "*", allow:"/"},

        ],
        additionalSitemaps: [`${URL}/server-sitemap.xml`],
    },
    
    exclude:['/Blog/blog_components/*', '/api/*','/components/*', '/server-sitemap.xml', '/Blog/dashboard', '/mini-mall', '/OnlineSolver', '/login', '/register']
    
    
}