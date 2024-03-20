import {client} from '@/app/lib/sanity'

export const revalidate = 0;
export const dynamic = 'force-dynamic'

async function getData(slug:string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug":slug.current,
          title,content,titleImage
       }[0]`

       const data = await client.fetch(query)
       return data
}

export default async function BlogArticle({
    params,
}:{
    params:{slug:string}
}){

    const data = await getData(params.slug)
    console.log(data)
    return<h1>{params.slug}</h1>
}