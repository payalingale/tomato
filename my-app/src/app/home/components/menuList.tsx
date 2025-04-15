"use client";
import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  menuName: string;
  menuImage: StaticImageData;
  onCustomClick: () => void;
};

const MenuList: FunctionComponent<Props> = ({
  menuName,
  menuImage,
  onCustomClick,
}) => {
  return (
    <div
      className="flex flex-col justify-center align-middle items-center gap-2"
      onClick={() => onCustomClick()}
    >
      <Image src={menuImage} alt="menu-image" />
      <h2 className="text-gray-400">{menuName}</h2>
    </div>
  );
};

export default MenuList;
