import { FunctionComponent } from "react";
import { assets } from "../../../../public/assets/frontend_assets/assets";
import Image from "next/image";
const AddToCart: FunctionComponent = () => {
  return (
    <div className="w-15 h-4 bg-white rounded-3xl">
      <Image src={assets.remove_icon_red} alt="remove" />
      <p>1</p>
      <Image src={assets.add_icon_green} alt="add" />
    </div>
  );
};

export default AddToCart;
