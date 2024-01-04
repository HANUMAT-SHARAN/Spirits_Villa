import React from "react";
import "./home.css";

import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import Crousel from "../../Components/Crousel/Crousel";
import Crousel from "../components/Crousel/Crousel"
import SoloImageCrousel from "../components/Crousel/SoloImageCrousel";
import { useDispatch } from "react-redux";
import { getCartData } from "../Api";
import { allCartData } from "../Redux/Cart/CartAction";
import CartItems from "../components/CartItems";
let arr = [
  "https://www.rentomojo.com/public/images/category/package-bg/bedroom-v1_new.jpg",
  "https://www.rentomojo.com/public/images/category/package-bg/living-room-v2.jpg",
  "https://www.rentomojo.com/public/images/category/appliances-bg/tablets_new.jpg",
  "https://www.rentomojo.com/public/images/category/appliances-bg/smart-devices-v1_new.jpg",
  "https://www.rentomojo.com/public/images/category/package-bg/study-room-v1.jpg",
];

let largeArr = [
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
  "https://s.rmjo.in/Bed%20HP.jpg",
  "https://s.rmjo.in/Referral%20Banner%20HP%20web.jpg",
];

const HomePage = () => {
 
  const navigate = useNavigate();
  return (
    <div className="home_page" >
      <Box textAlign="center" >
        <Heading className="emptyElement" as="h4" size="md" style={{fontFamily:"Poppins"}}>
          Shop By Category
        </Heading>
      </Box>
      <Crousel arr={arr} />
      <SoloImageCrousel arr={largeArr} />
      <CartItems/>

      <Box className="four_large_img">
        <img src="https://s.rmjo.in/Price-drop-hp-web.jpg" />
        <img
          src="https://s.rmjo.in/Price-drop-hp-web.jpg"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://s.rmjo.in/Price-drop-hp-web.jpg"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://s.rmjo.in/Price-drop-hp-web.jpg"
          onClick={() => navigate("/products")}
        />
      </Box>
    </div>
  );
};

export default HomePage;
