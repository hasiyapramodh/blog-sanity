import { client, urlFor } from '@/app/lib/sanity'
import { fullBlog } from '@/app/lib/interfaces'
import Image from 'next/image'
import { clsx } from 'clsx';
import { PortableText } from 'next-sanity';




async function getData(slug: string) {
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
}: {
    params: { slug: string }
}) {

    const data: fullBlog = await getData(params.slug)

    return (
        <div className='mt-6'>
            <h1>
                <span className='block text-base text-center text-primary'></span>
                <span className='mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl font-head'>{data.title}</span>
            </h1>
            <div className='flex justify-center'>
                <Image
                    src={urlFor(data.titleImage).url()}
                    width={800}
                    height={800}
                    alt='Title Image'
                    priority
                    className='rounded-lg mt-8 border '

                />
            </div>


            <div className='m-auto  mt-16 prose prose-lg prose-li:marker:text-blue-500 prose-a:text-blue-700 font-title max-md:pl-4 max-md:pr-4'>
                <PortableText value={data.content} />
            </div>




        </div>
    )
}