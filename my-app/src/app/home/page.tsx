import React from "react";
import Navbar from "./components/navbar";
import {
  assets,
  menu_list,
  food_list,
} from "../../../public/assets/frontend_assets/assets";
import Container from "./components/container";
import ExploreMenu from "./components/exploreMenu";
import MenuList from "./components/menuList";
import FoodItems from "./components/foodItems";
import { lstat } from "fs";

const page = () => {
  return (
    <div className="box-border m-10">
      <Navbar
        logo={assets.logo}
        basketIcon={assets.basket_icon}
        searchIcon={assets.search_icon}
        userIcon={assets.profile_icon}
      />
      <Container />
      <ExploreMenu />
      <div className="flex justify-between align-middle items-center">
        {menu_list.map((data, index) => {
          return (
            <MenuList
              key={index}
              menuImage={data.menu_image}
              menuName={data.menu_name}
            />
          );
        })}
      </div>
      <hr className="w-100vh h-1 mt-10 text-gray-400" />
      <h2 className="text-3xl mt-5 ml-10 font-bold">Top dishes near you</h2>
      <div className="flex  gap-14 items-center justify-center  flex-wrap ">
        {food_list.map((list, index) => {
          console.log(list);
          return (
            <FoodItems
              key={index}
              foodImage={list.image}
              foodDesc={list.description}
              foodName={list.name}
              foodPrice={list.price}
              ratingStars={assets.rating_starts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
