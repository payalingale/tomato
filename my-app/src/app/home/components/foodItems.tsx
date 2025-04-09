"use client";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import { assets } from "../../../../public/assets/frontend_assets/assets";
import AddToCart from "./addToCart";

type Props = {
  foodImage: StaticImageData;
  foodName: string;
  foodDesc: string;
  foodPrice: number;
  ratingStars: StaticImageData;
};

const FoodItems: FunctionComponent<Props> = ({
  foodImage,
  foodDesc,
  foodName,
  foodPrice,
  ratingStars,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl w-60 h-80 justify-between align-middle items-center mt-10 shadow-lg m-2 p-2">
      <div className="flex relative">
        <Image
          src={foodImage}
          alt="food image"
          className="w-screen h-50 rounded-2xl "
        />
        <Image
          className="w-8 text-center absolute  rounded-4xl  align-middle text-2xl right-2 bottom-2"
          src={assets.add_icon_white}
          alt="add"
          onClick={() => {
            {
            }
          }}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-s text-black-600 font-bold">{foodName}</p>
          <Image src={ratingStars} alt="rating stars" className="w-20 h-5" />
        </div>
        <p className="text-xs text-gray-500">{foodDesc}</p>
        <p className="text-orange-400 font-bold">${foodPrice}</p>
      </div>
    </div>
  );
};

export default FoodItems;
