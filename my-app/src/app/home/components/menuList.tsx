import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  menuName: string;
  menuImage: StaticImageData;
};

const MenuList: FunctionComponent<Props> = ({ menuName, menuImage }) => {
  return (
    <div className="flex flex-col justify-center align-middle items-center gap-2">
      <Image src={menuImage} alt="menu-image" />
      <h2 className="text-gray-400">{menuName}</h2>
    </div>
  );
};

export default MenuList;
