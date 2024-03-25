import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Hero from "@/components/Hero/page";
import Banner from "@/components/Banner/page";
import Aboutme from '../components/s-about/page'
import Potogroup from '../components/photos-group/page'
import Carousel from '../app/curosel/page'


export const revalidate = 0;


const slides = [

  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
  "./6.jpg",

]


async function getdata() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      'currentSlug':slug.current,
      titleImage,
      Date,
      authorName,
  }`
  const data = await client.fetch(query)

  return data

}



export default async function Home() {

  const data: simpleBlogCard[] = await getdata()
  console.log(data)
  return (
    <>
      <div className="h-2/5 mb-8">
        <Carousel autoSlide={true}  >
          {[...slides.map((s) => (
            <img src={s}
              className="block  "
            />
          ))]}
        </Carousel>
      </div>

      {/* <Hero/> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-12 pl-8 pr-8 shadow-2xl  ">
        {data.map((post, idx) => (
          <Card key={idx}> 
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={200}
              className="md:h-80 w-full object-cover hover:contrast-150 hover:brightness-125 "
            />

            <div className=" hover:transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:shadow-2xl">

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 h-16 text-center font-head">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 mb-3 font-text ">{post.smallDescription}</p>
              <div className="flex mt-3 ">
                <div className="w-1/2">
                  <p className="text-left  font-text">{post.Date}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-right  font-text">{post.authorName}</p>
                </div>
              </div>
                 
                 <div className=" flex justify-center">
                 <Button asChild className="w-2/4 mt-7 flex justify-center font-text bg-violet-950 ">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
                 </div>
              
              



            </CardContent>
            </div>
           
          </Card>

        ))}
      </div>

      <Banner />
      <Aboutme />
      <Potogroup  />

    </>
  );
}
