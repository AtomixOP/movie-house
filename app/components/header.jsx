"use-client"
import Link from "next/link";
import React from "react";
import { IoIosHome } from "react-icons/io";
import { BiSolidInfoCircle } from "react-icons/bi";
import Darkmode from "./darkMode";

const headerLinks = [
  {
    title: "Home",
    icons: <IoIosHome />,
    link: "/",
  },
  {
    title: "About",
    icons: <BiSolidInfoCircle />,
    link: "/about",
  },
  {
    title: "",
    icons: "",
    link: "",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between px-5 h-[50px]">
      <div className="flex gap-3">
        {headerLinks.map((item, index) => (
          <Link key={index} href={item.link} className="flex hover:text-yellow-300">
            <span className="flex justify-center items-center gap-1 text-2xl">
              <span>{item.icons}</span>
              <span>{item.title}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
      <Darkmode />
      <Link href='/' className="flex text-center items-center gap-1">
        <span className="text-2xl font-bold bg-amber-400 text-black rounded-lg px-2">Movie</span>
        <span className="text-2xl font-medium">House</span>
      </Link>
      </div>
    </div>
  );
};

export default Header;
