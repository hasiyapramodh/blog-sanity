import Image from 'next/image'
import Banner from '../../../public/nature-4176575_1280.jpg'

const Hero =()=>{
    return(
        <div  className="w-full max-h-screen relative">
            <Image
             src={Banner}
             alt="banner image"
             className="w-full max-h-screen object-contain"
            />
            <div className="absolute top-0 w-full h-full bg-black/3 text-gray-100 flex flex-col items-center justify-center">
                <h2 className="text-4xl lg:text-[100px] font-bold">Yapa Gunarathna</h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold md:mt-10">Traveller,Photographer</p>
            </div>
        </div>
    )
}

export default Hero