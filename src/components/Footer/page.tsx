import React from "react";
import Container from '../container/page';
import Logo from '../Logo/page';
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="p-10 bg-black text-gray-100 flex items-center justify-between mt-10">
      <Logo title="Bloggers" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link
          href={""}
          target="blank"
        >
          <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={""} target="blank">
          <BsGithub className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={""}
          target="blank"
        >
          <BsFacebook className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={""}
          target="blank"
        >
          <BsInstagram className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300 max-md:hidden">
        © All rights reserved{" "}
        <Link
          href={""}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @H&Y
        </Link>
      </p>
    </div>
  );
};

export default Footer;