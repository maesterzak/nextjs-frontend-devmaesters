const URL = process.env.URL




module.exports={
    siteUrl: URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow:["/blog/blog_components/*", '/api/*','/components/*']},
            { userAgent: "*", allow:"/"},

        ],
        additionalSitemaps: [`${URL}/server-sitemap.xml`],
    },
    
    exclude:['/blog/blog_components/*', '/api/*','/components/*', '/server-sitemap.xml', '/blog/dashboard', '/mini-mall', '/OnlineSolver', '/login', '/register']
    
    
}