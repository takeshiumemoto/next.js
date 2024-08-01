import Head from 'next/head'
import {siteMeta} from 'lib/constants'
import {useRouter} from 'next/router'
import siteImg from 'images/opg.jpg'
const title = pageTitle? '${pageTitle}|${siteTitle}':siteTitle
const router = useRouter()
const url = '${siteUrl}${router.asPath}'

export default function Meta({pageTitle,pageDesc,pageImg,pageImgW,pageImgH}){
    const dexc = pageDesc ?? siteDesc
    const img = pageImg || siteImg.src
    const imgW = pageImgW || siteImg.width
    const imgH = pageImgH || siteImg.height
    const imgUrl = img.startsWith('https')? img:'${siteUrl}${img}'
    return(
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title}/>
            <meta name="description" content={desc}/>
            <meta property="og:description" content={desc}/>
            <meta property="og:site-name" contact={siteTitle}/>
            <meta property="og:type" contact={siteLocale}/>
            <meta property="og:locale" content={siteLocale}/>
            <meta property="og:image" content={imgUrl}/>
            <meta property="og:image:width" content={imgW}/>
            <meta property="og:image:height"content={imgH}/>
            <meta name="twitter:card"content="summary_large_image"/>

            <link rel="icon" href={siteIcon}/>
            <link rel="apple-touch-icon" href={siteIcon}/>
            <link rel="canoncal href={url}"/>
            <meta property="og:url" contact={url}/>
        </Head>
    )
}