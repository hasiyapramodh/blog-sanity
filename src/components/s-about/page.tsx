import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/pexels-devon-daniel-4566581.jpg'

function page() {
    return (
        <>
            <div className='flex max-md:block max-md:mb-5  '>
                <div className='w-1/2 max-md:mb-5 max-md:w-full hover:cursor-pointer hover:shadow-sm md:mr-20 md:ml-20'>
                     <Image
                      src={image1}
                      height={800}
                      width={800}
                      alt='small-description-image'
                      className='h-80 w-full  object-cover hover:brightness-125   '
                     />
                </div>
                <div className='w-1/2 max-md:pl-4 max-md:w-full max-md:pr-4  hover:cursor-pointer hover:shadow-sm'>
                    <h6 className='mb-3 text-orange-600 font-head max-md:text-center text-center'>About Me</h6>
                    <h1 className='mb-3 text-2xl font-bold font-head text-center'>THANKS FOR LOOKING!</h1>
                    <p className='leading-8  font-text max-md:text-center  '>
                        I'm Yapa Gunawardana, the travel blogger behind this website. I'm an SriLankan who's been traveling the world full time for 8 years now.

                        I started this travel blog in 2024 to document my own international trips and help others learn how to travel the world on a budget.

                        I'm currently based in Bali, Indonesia, where I met my wife Intan (who’s a Bali local), and now we've continued this travel blog as a couple.

                        This originally began as a solo travel blog, but I'm sure someday when we have kids we'll cover family travels as well!

                        Together, we travel the world with a camera and drone, and try to document the most scenic destinations by creating articles, photos, videos, and guides with expert advice for other travelers.

                        I like to write about all kinds of hikes, beaches, waterfalls, volcanoes, castles, temples, monuments, wildlife, and other interesting sights.

                        I've worked with or been featured by BBC Travel, NBC News, Stripe, Time, and other companies. I also sell some photo prints from my travels now.

                        I haven’t been everywhere, but it’s on my list. I hope this world travel blog can help and inspire you in your own journeys as well!
                    </p>
                </div>
            </div>
        </>
    )
}

export default page