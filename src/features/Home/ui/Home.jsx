import React from "react";
import Container from "../../../shared/helpers/Container";
import SliderHome from "./SliderHome";
import HomeSports from "./HomeSports";
import HomeSelect from "./HomeSelect";

function Home() {
  return (
    <>
      <SliderHome />
      <HomeSelect />
      <HomeSports />
    </>
  );
}
export default Home;