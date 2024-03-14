import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interfaces";
import { Card, CardContent,Button } from "@/components/ui/card";
import { Link } from "lucide-react";



async function getdata(){
  const query =`*[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      'currentSlug':slug.current,
      titleImage
  }`
  const data = await client.fetch(query)

  return data
  
}
export default async function Home() {

  const data:simpleBlogCard[] = await getdata()
  console.log(data)
  return (
   <>

   
   <div className="grid grid-cols-1 lg:grid-cols-4 mt-4 gap-5">
    {data.map((post,idx)=>(
      <Card key={idx}>
        <Image
         src={urlFor(post.titleImage).url()}
         alt="image"
         width={500}
         height={200}
         className=""
        />
         <CardContent className="mt-5">
          <h3 className="text-lg line-clamp-2">{post.title}</h3>
          <p className="line-clamp-3 text-sm mt-2 text-gray-600 ">{post.smallDescription}</p>
          <button  className="w-full mt-5"> 
            <Link href={`/blog/${post.currentSlug}`}>
              readmore
               </Link>
          </button>
         </CardContent>
      </Card>
    ))}
   </div>
   </>
  );
}
