import React from 'react'
import Link from 'next/link';

interface props {
    title?: string;
    className?: string
}

const Logo = ({title,className}:props) =>{
    return(
        <Link href={"/"}>
             <h1 className={`text-3xl font-extrabold uppercase font-head max-md:text-xl ${className}`}>
            {title}
        </h1>
        </Link>
    )
}

export default Logo