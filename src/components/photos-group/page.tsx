import React from 'react'
import Image from 'next/image'
import Image1 from '../images/image-wallpaper-43-800x400.jpg'
import Image2 from '../images/img2.png'


function page() {
    return (
        <>
            <div className='flex max-md:block max-md:w-full mt-8 max-md:mb-5 max-md:m-auto'>
                <div className='w-1/6 ml-3 '>
                    <Image
                        src={Image1}
                        height={800}
                        width={800}
                        alt='pic'
                        className='h-80 max-md:w-full'
                    />
                </div>
                <div className='w-1/6 ml-3'>
                    <Image
                        src={Image2}
                        height={800}
                        width={800}
                        alt='pic'
                        className='h-80'
                    />
                </div>
                <div className='w-1/6 ml-3'>
                    <Image
                        src={Image1}
                        height={800}
                        width={800}
                        alt='pic'
                        className='h-80'
                    />
                </div>
                <div className='w-1/6 ml-3'>
                    <Image
                        src={Image2}
                        height={800}
                        width={800}
                        alt='pic'
                        className='h-80'
                    />
                </div>
                <div className='w-1/6 ml-3'>
                    <Image
                        src={Image1}
                        height={800}
                        width={800}
                        alt='pic'
                        className='h-80'
                    />
                </div>
                <div className='w-1/6 ml-3'>
                    <Image
                        src={Image2}
                        height={800}
                        width={800}
                        alt='pic'
                        className='h-80'
                    />
                </div>
            </div>
        </>
    )
}

export default page