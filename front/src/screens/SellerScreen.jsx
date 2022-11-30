import React from "react";

import Title from "../components/Title";
import ParcelList from "../components/ParcelList";

const parcels = [
  { item: "Hoodie", date: "2022/11/14", status: "Delivery Complete." },
  {
    item: "Phone Case",
    date: "2022/11/20",
    status: "Departed from 경기 부천.",
  },
  { item: "Water", date: "2022/11/21", status: "Arrived at 유성." },
];

const SellerScreen = () => {
  return (
    <>
      <Title title="Check you parcels" />
      <ParcelList parcels={parcels} />
    </>
  );
};

export default SellerScreen;
