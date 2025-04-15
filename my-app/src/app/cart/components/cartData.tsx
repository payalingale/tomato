/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCart } from "@/app/context/CartContext";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { food_list } from "../../../../public/assets/frontend_assets/assets";
import CartNoData from "./cartNoData";
import CartTable from "./cartTable";
import CartTotal from "../cartTotal";
import CartTableHead from "./cartTableHead";
import Navbar from "@/app/components/navbar";
import FoodItems from "@/app/home/components/foodItems";

interface FoodItem {
  _id: string;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  category: string;
  quantity: number;
}
const CartData: React.FC = () => {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [subTotal, setsubTotal] = useState<number>(0);

  const { itemsIds } = useCart();

  const updatedCart = [...items];

  const getCartItems = async () => {
    const data = itemsIds
      .map((id) => food_list.find((item) => item._id === id))
      .filter(Boolean) as (FoodItem & { quantity: number })[];

    setItems(data);

    const sumWithInitial = data
      .map((items) => items.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    setsubTotal(sumWithInitial);
  };

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <div>
      <Navbar />
      {items.length ? (
        <div>
          <CartTableHead />
          {items.map((item) => (
            <CartTable
              key={item._id}
              id={item._id}
              category={item.category}
              name={item.name}
              price={item.price}
              total={item.price * 1}
            />
          ))}
        </div>
      ) : (
        <CartNoData />
      )}
      <CartTotal subtotal={subTotal} />
    </div>
  );
};
export default CartData;
