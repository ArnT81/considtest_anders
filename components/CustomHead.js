import Head from 'next/head';

const CustomHead = ({ title, keywords, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="author" content="Anders Söderberg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charset="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

CustomHead.defaultProps = {
    title: "Consid test",
    keywords: "anställningsprov, test, commerce, frontend, development ",
    description: "consid ecommerce test"
}

export default CustomHead;
