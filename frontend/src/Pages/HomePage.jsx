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
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
];

let largeArr = [
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
  "https://s.rmjo.in/Price-drop-hp-web.jpg",
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
      <Box className="black_bcg">
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
        <img
          src="https://s.rmjo.in/Price-drop-hp-web.jpg"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://s.rmjo.in/Price-drop-hp-web.jpg"
          onClick={() => navigate("/products")}
        />
      </Box>
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
