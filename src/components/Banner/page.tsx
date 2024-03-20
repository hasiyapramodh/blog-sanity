import Image from 'next/image'
import Banner from '../../../public/pexels-marek-piwnicki-17366116.jpg'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const banner = () => {
    return (
        <div className="w-full max-h-screen relative">
            <Image
                src={Banner}
                alt="banner image"
                className="w-full max-h-screen object-contain mt-10 mb-10"
            />
            <div className="absolute top-0 w-full h-full bg-black/3 text-white flex flex-col items-center justify-center">
                <h2 className="text-3xl lg:text-[60px] font-bold">Bali Travel Guide</h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-thin md:mt-10">complete tips for visiting indonesea's favourite island!</p>
                <Button asChild className=" mt-7 color-red bg-orange-700 text-gray-300">
                    <Link href='https://theworldtravelguy.com/destinations/bali-travel-guide-best-bali-indonesia-travel-tips-blog/'>Read More</Link>
                </Button>
            </div>
        </div>
    )
}

export default banner
