import React, { FunctionComponent } from "react";

const Container: FunctionComponent = () => {
  return (
    <div className="bg-[url('/assets/frontend_assets/header_img.png')] bg-cover bg-center h-120 rounded-2xl text-white flex flex-col items-start justify-center p-3 align-middle ">
      <h1 className="text-7xl p-3">
        Order your <br />
        favourite food here
      </h1>
      <p className="text-xl p-3">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with a finest <br /> ingredients and culinary expertise.Our
        mission is to satisfy your cravings and elevate your <br /> dining
        experience,one delicious meal at a time.
      </p>
      <button className="bg-white w-30 text-gray-400 m-3 rounded-3xl p-3 ">
        View Menu
      </button>
    </div>
  );
};

export default Container;
