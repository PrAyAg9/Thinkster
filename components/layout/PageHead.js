import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Eduvalt - Online Courses & Education Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead