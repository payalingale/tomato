import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  menuName: string;
  menuImage: StaticImageData;
};

const MenuList: FunctionComponent<Props> = ({ menuName, menuImage }) => {
  return (
    <div>
      <Image src={menuImage} alt="menu-image" />
      <h2>{menuName}</h2>
    </div>
  );
};

export default MenuList;
