import React from 'react'
import Image from 'next/image'
import Image1 from '../images/image-wallpaper-43-800x400.jpg'
import Image2 from '../images/img2.png'
import Image3 from '../../../public/2.jpg'
import Image4 from '../../../public/3.jpg'
import Image5 from '../../../public/4.jpg'
import Image6 from '../../../public/5.jpg'

const images = [Image1,Image2,Image3,Image4,Image5,Image6]
function page() {
    return (
        <>
           <div className='flex max-md:block max-md:w-full mt-8 max-md:mb-5 '>
            <div className='w-full grid grid-cols-6 gap-1 items-center justify-items-center px-6 hover:'>
                {images.map((img,index)=>(
                <div key={index} className='w-full aspect-square flex'>
                    <Image
                       src={img}
                       alt='pic'
                       className='w-full  hover:brightness-125  h-full object-cover object-center block hover:transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:shadow-2xl hover:opacity-80'/>

                </div>
                ))}
            </div>
           </div>
        </>
    )
}

export default page