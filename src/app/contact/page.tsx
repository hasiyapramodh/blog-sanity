import React from 'react'
import Image from 'next/image';
import Image1 from '../../../public/4.jpg'

function page() {
  return (
   <>
   <div className=''>
    <Image
    src={Image1}
    alt=''
    />
    <div>
      <p></p>
    </div>
   </div>
   </>
  )
}

export default page