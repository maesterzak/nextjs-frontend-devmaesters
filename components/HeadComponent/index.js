import React from 'react'
import Head from "next/head";
import { useRouter } from "next/router";
import { config, dom } from "@fortawesome/fontawesome-svg-core";



function HeadComponent({ title = "Demaesters", MainImage = "https://devmaesters.com/images/home-2.png", description = "Welcome to devmaesters.com we offer programming tips,tutorials, tricks, freelance web development, coding support and sales of web related products." }) {
    const {
        asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
        // the value: "/question/[slug]"
    } = useRouter();
    const pathname = asPath;
    const currentPath = `https://devmaesters.com${pathname}`;
    return (
        <Head>
            <style>{dom.css()}</style>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* <link rel="icon" href="/favicon1.ico" /> */}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/newlogo/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/newlogo/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/newlogo/favicon-16x16.png"
            />
            {/* <link rel="manifest" href="/site.webmanifest" /> */}

            <meta charSet="UTF-8" />

            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta
                property="og:image"
                content={MainImage}
            />
            <meta
                property="og:description"
                content={description}
            />
            <meta property="og:url" content={currentPath} />
            <title>{title}</title>
        </Head>
    )
}

export default HeadComponent