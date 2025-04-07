import React from "react";
import Navbar from "./components/navbar";
import { assets } from "../../../public/assets/frontend_assets/assets";
import Container from "./components/container";

const page = () => {
  return (
    <div className="box-border m-10">
      <Navbar
        logo={assets.logo}
        basketIcon={assets.basket_icon}
        searchIcon={assets.search_icon}
        userIcon={assets.profile_icon}
      />
      <Container headerImg={assets.header_img} />
    </div>
  );
};

export default page;
