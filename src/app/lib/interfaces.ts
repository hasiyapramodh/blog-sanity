import Image from 'next/image';
export interface simpleBlogCard{
    title:string,
    smallDescription:string,
    currentSlug:string,
    titleImage:any,
    Date:string,
    authorName:string,
    

   
}

export interface fullBlog{
    currentSlug:string
    title:string
    content:any
    titleImage:any
   
}