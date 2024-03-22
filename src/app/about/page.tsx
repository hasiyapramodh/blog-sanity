import React from 'react'
import Image from 'next/image'
import Image2 from '../../../public/3.jpg'
import Image4 from '../../../public/4.jpg'

function page() {
    return (
        <>
            <div className='md:h-[100rem] md:w-[90rem] m-auto mt-5'>
                <Image
                    src={Image2}
                    alt=''
                    className='h-2/4 object-cover '
                />

                <h2 className='text-center mt-8 font-head md:text-5xl font-bold'>HOW EVERYTHING STARTRED</h2>
                <p className='p-8 font-text leading-9'>Hi there, fellow wanderlusters! I'm [Your Name], and Mt. Traveeling is my digital passport, a place where I share my travel adventures and all the lessons learned along the way.

                    Travel has always been woven into the fabric of my life. From childhood road trips with my family to that first solo backpacking adventure that ignited a lifelong passion, exploration has been my constant companion. This blog is an extension of that spirit, a way to connect with like-minded travelers and share the magic, the mishaps, and the profound experiences that come with venturing beyond the familiar.

                    Here at Mt. Traveeling, you'll find a diverse landscape of travel stories. Whether you're dreaming of conquering a mountain peak, getting lost in a bustling city market, or simply embracing the serenity of a hidden beach, there's something for everyone. I believe travel can be as much about personal growth as it is about ticking destinations off a list. I aim to inspire you to discover new corners of the world, but also to dive deeper within yourself as you navigate unfamiliar cultures and push yourself outside your comfort zone.

                    Beyond the stunning landscapes and captivating local customs, I'm committed to providing practical travel tips and insights. From budget-friendly hacks for backpackers to insider information for a luxurious escape, I want to equip you with the knowledge needed to create your own unforgettable journeys.

                    This blog isn't just about showcasing my adventures; it's a community for those who share the travel bug. I encourage you to leave comments, share your own stories, and ask questions. Let's create a space where we can learn from each other and fuel each other's wanderlust.

                    So, pack your virtual bags, grab a cup of your favorite travel companion beverage (coffee for the early explorers, wine for the sunset chasers!), and join me as we navigate the world together, one adventure at a time. Together, let's climb metaphorical mountains, conquer the unknown, and discover the beauty that lies around every bend on the road (or trail, or flight path!).</p>

                <div className='flex pl-10 pr-10 '>
                    <div className='w-1/3 max-md:hidden max-md:w-full '>
                        <Image
                            src={Image4}
                            alt=''
                            className='max-md:block max-md:w-full'
                        />
                    </div>
                    <div className=' max-md:p-0 ml-8 hover:cursor-pointer max-md:block max-md:w-full '>
                        <h1 className='mb-6 font-head md:text-4xl max-md:text-2xl'>Hasith Pramodh</h1>
                        <p className='leading-7 font-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem at modi labore magnam delectus magni iusto libero consectetur asperiores a non harum recusandae, nemo beatae officiis impedit, doloremque quas iure.</p>
                        <p className='mt-4 mb-5 font-head text-yellow-700 text-xl'>www.traveller.com</p>
                        <p className='font-head text-yellow-700 text-xl'>0768988687</p>
                    </div>
                </div>
            </div>





        </>
    )
}

export default page