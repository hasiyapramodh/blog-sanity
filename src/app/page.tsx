import Image from "next/image";
import { client } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interfaces";


async function getdata(){
  const query =`*[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      'currentSlug':slug.current
  }`
  const data = await client.fetch(query)

  return data
  
}
export default async function Home() {

  const data:simpleBlogCard[] = await getdata()
  console.log(data)
  return (
   <>
   <h2>hello</h2>
   </>
  );
}
