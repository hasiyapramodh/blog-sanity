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
  
  "./7.jpg",
  "./7.jpg",
  "./7.jpg",
  "./7.jpg",
  "./7.jpg",
  
]


async function getdata(){
  const query =`*[_type == 'blog'] | order(_createdAt desc){
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

  const data:simpleBlogCard[] = await getdata()
  console.log(data)
  return (
   <>
   <div className="h-2/5 mb-8">
   <Carousel  autoSlide={true}  >
          {[...slides.map((s) => (
            <img src={s} 
            className="block  "
            />
          ))]}
        </Carousel>
   </div>
 
   {/* <Hero/> */}
   <div className="grid grid-cols-1 lg:grid-cols-4 mt-4 gap-10 pl-5 pr-5  ">
    {data.map((post,idx)=>(
      <Card key={idx}>
        <Image
         src={urlFor(post.titleImage).url()}
         alt="image"
         width={500}
         height={200}
         className="md:h-80  "
        />
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
          
          
          <Button asChild className="w-full mt-7  "> 
            <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
          </Button>
          
          
         
         </CardContent>
      </Card>

    ))}
   </div>

<Banner/>
<Aboutme/>
<Potogroup/>
   </>
  );
}
