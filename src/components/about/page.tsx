import React from 'react'
import Image from 'next/image'
import aboutpic from '../../../public/4.jpg'

function page() {
  return (
  <>
  <h2>hello worlf</h2>
  <Image 
  src={aboutpic}
  alt=''
  ></Image>
  </>
  )
}

export default page