import React, { FunctionComponent } from "react";

import Image, { StaticImageData } from "next/image";

type Props = {
  logo: StaticImageData;
  searchIcon: StaticImageData;
  basketIcon: StaticImageData;
  userIcon: StaticImageData;
};

const Navbar: FunctionComponent<Props> = ({
  logo,
  searchIcon,
  basketIcon,
  userIcon,
}) => {
  return (
    <div className="flex w-screen max-h-20  justify-between align-middle items-center m-2  p-2 pl-30 pr-30">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex list-none gap-1.5 text-gray-600 ">
        <li className="hover:cursor-pointer hover:text-gray-900 hover:font-bold hover:underline">
          home
        </li>
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
        <Image src={searchIcon} alt="" className="gap-1.5 h-8" />
        <Image src={basketIcon} alt="" />
        <Image src={userIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
