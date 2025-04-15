/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useState } from "react";
import { food_list } from "../../../public/assets/frontend_assets/assets";
import Navbar from "../components/navbar";
import { useCart } from "../context/CartContext";
import CartTotal from "./cartTotal";
import CartTable from "./components/cartTable";
import CartData from "./components/cartData";

const cart = () => {
  return (
    <div className="flex flex-col">
      <CartData />
    </div>
  );
};

export default cart;
