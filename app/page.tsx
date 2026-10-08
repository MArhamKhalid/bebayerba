import Image from "next/image";

import Hero from "./Components/Hero";
import Quiz from "./Components/Quiz";
import Carts from "./Components/Carts";
import Products from "./Components/Products";
import Benefits from "./Components/Benefits";
import Enchanced from "./Components/Enchanced";
import Reviews from "./Components/Reviews";
import Community from "./Components/Community";
import Member from "./Components/Member";
import Saler from './Components/Saler';
import Info from "./Components/Info";
import Location from "./Components/Location";
import Social from "./Components/Social"; 

export default function Home() {
  return (
    <>
    
        <Hero/>
        <Quiz/>
        <Carts/>
        <Products/>
        <Benefits/>
        <Enchanced/>
        <Reviews/>
        <Community/>
        <Member/>
        <Saler/>
        <Info/>
        <Location/>
        <Social/>
    </>
  );
}
