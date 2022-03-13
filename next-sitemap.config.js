const URL = process.env.URL

let policy = {
    userAgent: "*"
}


module.exports={
    siteUrl: URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            policy
        ]
    },
    additionalSitemaps: [`${URL}/server-sitemap.xml`, `${URL}/sitemap-0.xml`]
    
    
}