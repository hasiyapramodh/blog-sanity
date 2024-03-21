import React from 'react'
import Image from 'next/image'
import Image1 from '../images/image-wallpaper-43-800x400.jpg'
import Image2 from '../images/img2.png'

const images = [Image1,Image2,Image1,Image2,Image1,Image2]
function page() {
    return (
        <>
           <div className='flex max-md:block max-md:w-full mt-8 max-md:mb-5 max-md:justify-center'>
            <div className='w-full grid grid-cols-6 gap-4 itrms-center justify-items-center px-6'>
                {images.map((img,index)=>(
                <div key={index} className='w-full aspect-square'>
                    <Image
                       src={img}
                       alt='pic'
                       className='w-full h-full object-cover object-center'/>

                </div>
                ))}
            </div>
           </div>
        </>
    )
}

export default page