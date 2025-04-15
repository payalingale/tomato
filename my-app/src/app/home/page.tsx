/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import {
  assets,
  menu_list,
  food_list,
  cart_items,
} from "../../../public/assets/frontend_assets/assets";
import Container from "./components/container";
import ExploreMenu from "./components/exploreMenu";
import MenuList from "./components/menuList";
import FoodItems from "./components/foodItems";
import { StaticImageData } from "next/image";
import { CartProvider, useCart } from "../context/CartContext";
import Home from "../page";

const Dashboard = () => {
  type FoodItem = {
    _id: string;
    name: string;
    image: StaticImageData; // adjust if using images this way
    price: number;
    description: string;
    category: string;
  };

  type cart = {
    _id: string;
    name: string;
    image: StaticImageData; // adjust if using images this way
    price: number;
    description: string;
    category: string;
    quantity: number;
  };

  const [menuItem, setmenuItem] = useState<string>("");
  const [foodList, setfoodList] = useState<FoodItem[]>(food_list);
  const [itemId, setitemId] = useState<string[]>([]);
  const [cart, setcart] = useState<cart[]>(cart_items);

  function handleFoodList(menuItem: string): void {
    setmenuItem(menuItem);
    const filtered = food_list.filter((data) => data.category === menuItem);
    setfoodList(() => filtered);
  }

  function addToCart(id: string): void {
    const selectedItems = foodList.filter((items) => items._id === id);
    const updatedCart = [...cart];

    selectedItems.forEach((item) => {
      const updateIndex = updatedCart.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (updateIndex === -1) {
        updatedCart.push({ ...item, quantity: 1 });
      } else {
        updatedCart[updateIndex].quantity += 1;
      }
    });

    setcart(updatedCart);

    console.log(cart);
  }

  return (
    <div className="box-border m-10">
      <Navbar />
      <Container />
      <ExploreMenu />
      <div className="flex justify-between align-middle items-center">
        {menu_list.map((data, index) => {
          return (
            <MenuList
              key={index}
              menuImage={data.menu_image}
              menuName={data.menu_name}
              onCustomClick={() => handleFoodList(data.menu_name)}
            />
          );
        })}
      </div>
      <hr className="w-100vh h-1 mt-10 text-gray-400" />
      <h2 className="text-3xl mt-5 ml-10 font-bold">Top dishes near you</h2>
      <div className="flex  gap-14 items-center justify-center  flex-wrap ">
        {foodList.map((list, index) => {
          return (
            <FoodItems
              key={index}
              id={list._id}
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

export default Dashboard;
