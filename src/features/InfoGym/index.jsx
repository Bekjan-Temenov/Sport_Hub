import React from "react";
import Info from "./ui/Info";
import Images from "./ui/Images";
import InfoGym from "./ui/InfoGym";
import RoomAmenities from "./ui/RoomAmenities";
import CustomerReviews from "./ui/CustomReview";
import Card from "./ui/Card";
import Reviews from "../Arena/ui/Reviews";

function infoGym() {
  return (
    <>
      <Info />
      <Images />
      <InfoGym />
      <RoomAmenities />
      <CustomerReviews />
      <Reviews/>
      <Card />
    </>
  );
}

export default infoGym;
