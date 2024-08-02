import {createClient} from 'microms-js-sdk'

export const client = createClient({
    serviceDomain:process.env.SERVICE_DOMAIN,
    apikey: process.env.API_KEY,
})

export async function getAllSlugs(limit=100){
    try{
        const posts = await client.get({
            endpoint:'blogs',
            queries:{filters: 'title,slug',orders:'-publishDate',limit:limit},
        })
        return posts.contents
    } catch(err){
        console.log('--getPostBySlug--')
            console.log(err)
    }
}ß