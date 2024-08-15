import React from "react";
import Info from "./ui/Info";
import Advantages from "./ui/Advantages";
import Player from "./ui/Player";
import CustomerReviews from "./ui/CustomReview";
import Schedule from "./ui/ScheduleData";
import {FreeLesson} from "./ui/FreeLesson";
import Card from "./ui/Cart";

function Arena() {
  return (
    <>
      <Info />
      <Advantages />
      <Player />
      <CustomerReviews />
      <Schedule/>
      <FreeLesson/>
      <Card/>
    </>
  );
}

export default Arena;
