import React, { FunctionComponent } from "react";

import Image from "next/image";
import Link from "next/link";
import { assets } from "../../../public/assets/frontend_assets/assets";

const Navbar: FunctionComponent = ({}) => {
  return (
    <div className="flex w-screen max-h-20  justify-between align-middle items-center m-2  p-2 pl-30 pr-30">
      <div>
        <Image src={assets.logo} alt="logo" />
      </div>
      <div className="flex list-none gap-1.5 text-gray-600 ">
        <Link href={"/home"}>
          <li className="hover:cursor-pointer hover:text-gray-900 hover:font-bold hover:underline">
            home
          </li>
        </Link>
        <li className="hover:cursor-pointer hover:text-gray-900 hover:font-bold hover:underline">
          menu
        </li>
        <li className="hover:cursor-pointer hover:text-gray-900 hover:font-bold hover:underline">
          mobile app
        </li>
        <li className="hover:cursor-pointer hover:text-gray-900 hover:font-bold hover:underline">
          contact us
        </li>
      </div>
      <div className="flex gap-5">
        <Image src={assets.search_icon} alt="" className="gap-1.5 h-8" />
        <Link href={"/cart"}>
          <Image src={assets.basket_icon} alt="" />
        </Link>
        <Image src={assets.profile_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
