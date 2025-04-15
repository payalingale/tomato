import { FunctionComponent, useEffect, useState } from "react";
type Props = {
  subtotal: number;
};

const CartTotal: FunctionComponent<Props> = ({ subtotal }) => {
  const [total, settotal] = useState<number>();
  const deliveryFee = 5;

  useEffect(() => {
    settotal(subtotal + deliveryFee);
  }, [subtotal]);

  return (
    <div className="flex justify-between w-vw m-3 p-2 items-center">
      <div className="flex flex-col m-2 justify-between">
        <h2 className="font-bold text-2xl ">Cart Totals</h2>
        <div className="flex justify-between border-b-1 border-gray-200">
          <span className="font-bold text-2xl">SubTotal</span>
          <span className="font-bold text-2xl">${subtotal}</span>
        </div>
        <div className="flex justify-between border-b-1 border-gray-200">
          <span className="font-bold">DeliveryFee</span>
          <span>${deliveryFee}</span>
        </div>
        <div className="flex justify-between border-b-1 border-gray-200">
          <span className="font-bold">Total</span>
          <span>${total}</span>
        </div>
        <button className="bg-orange-400 p-1 rounded-m text-white w-90 mt-3">
          PROCEED TO CHECKOUT
        </button>
      </div>
      <div className="flex h-auto w-auto  align-middle flex-col">
        <p className="text-s font-black">
          If you have a promo code,please enter here
        </p>
        <div className="w-90 bg-gray-200 flex justify-between ">
          <input type="text" name="" id="" placeholder="code" className="p-1" />
          <input
            type="button"
            value="Submit"
            className="bg-black text-white w-30"
          />
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
