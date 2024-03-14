import Image from "next/image";


async function getdata(){
  const query =`*[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      'currentSlug':slug.current
  }`
  
  
}
export default function Home() {
  return (
   <>
   <h2>hello</h2>
   </>
  );
}
