"use client"

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"



const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 10000 }) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])


  return (
    <div className='overflow-hidden relative '>
      <div className='flex transition-transform ease-out duration-300 w-140 relative' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}

      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronLeft />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronRight />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((s, i) => (
            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
      <div className=' '>
      <p className=' absolute font-bold md:text-8xl top-1/2 left-1/4   text-white font-head  hover:text-red-200 hover:cursor-pointer '>HELLO I AM HASITHA  </p>
      </div>
     
      
    </div>

  )
}

export default Carousel















// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import Image1 from '../../../public/pexels-marek-piwnicki-17366116.jpg'

// const Coraousel = () => {
//   useEffect(() => {
//     const init = async () => {
//       const { Coraousel, initTWE } = await import("tw-elements");
//       initTWE({ Coraousel });
//     };
//     init();
//   }, []);

//   return (
//     <>
//       <div
//         id="carouselDarkVariant"
//         className="relative"
//         data-twe-carousel-init
//         data-twe-ride="carousel">

//         <div
//           className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
//           data-twe-carousel-indicators>
//           <button
//             data-twe-target="#carouselDarkVariant"
//             data-twe-slide-to="0"
//             data-twe-carousel-active
//             className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             aria-current="true"
//             aria-label="Slide 1"></button>
//           <button
//             data-twe-target="#carouselDarkVariant"
//             className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             data-twe-slide-to="1"
//             aria-label="Slide 1"></button>
//           <button
//             data-twe-target="#carouselDarkVariant"
//             className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             data-twe-slide-to="2"
//             aria-label="Slide 1"></button>
//         </div>


//         <div
//           className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

//           <div
//             className="relative float-left -mr-[100%] w-full !transform-none  transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-twe-carousel-fade
//             data-twe-carousel-item
//             data-twe-carousel-active
//               style={{backfaceVisibility:'hidden'}}
//            >

//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
//               className="block w-full"
//               alt="Motorbike Smoke" />
//             <div
//               className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//               <h5 className="text-xl">First slide label</h5>
//               <p>
//                 Some representative placeholder content for the first slide.
//               </p>
//             </div>
//           </div>

//           <div
//             className="relative float-left -mr-[100%] hidden w-full !transform-none  transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-twe-carousel-fade
//             data-twe-carousel-item>
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
//               className="block w-full"
//               alt="Mountaintop" />
//             <div
//               className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//               <h5 className="text-xl">Second slide label</h5>
//               <p>
//                 Some representative placeholder content for the second slide.
//               </p>
//             </div>
//           </div>

//           <div
//             className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-twe-carousel-fade
//             data-twe-carousel-item>
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
//               className="block w-full"
//               alt="Woman Reading a Book" />
//             <div
//               className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//               <h5 className="text-xl">Third slide label</h5>
//               <p>
//                 Some representative placeholder content for the third slide.
//               </p>
//             </div>
//           </div>
//         </div>


//         <button
//           className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//           type="button"
//           data-twe-target="#carouselDarkVariant"
//           data-twe-slide="prev">
//           <span className="inline-block h-8 w-8 dark:grayscale">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="h-6 w-6">
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M15.75 19.5L8.25 12l7.5-7.5" />
//             </svg>
//           </span>
//           <span
//             className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//           >Previous</span>

//         </button>

//         <button
//           className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//           type="button"
//           data-twe-target="#carouselDarkVariant"
//           data-twe-slide="next">
//           <span className="inline-block h-8 w-8 dark:grayscale">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="h-6 w-6">
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//             </svg>
//           </span>
//           <span
//             className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//           >Next</span>

//         </button>
//       </div>
//     </>
//   );
// };

// export default Coraousel;