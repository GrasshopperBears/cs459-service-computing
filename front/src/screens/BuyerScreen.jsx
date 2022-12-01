import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "../components/Title";
import ParcelList from "../components/ParcelList";
import Notification from "../components/Notification";

export const parcelsMock = [
  { commodity: "Hoodie", date: "2022/11/14", status: "Delivery Complete." },
  {
    commodity: "Phone Case",
    date: "2022/11/20",
    status: "Departed from 경기 부천.",
  },
  { commodity: "Water", date: "2022/11/21", status: "Arrived at 유성." },
];

const messages = [
  "'Water' has departed from 전라남도 목포",
  "'Hoodie' has arrived at 경기도 성남",
  "'Phone Case' is being delivered via 옥천Hub",
];

const BuyerScreen = () => {
  const [parcels, setParcels] = useState(parcelsMock);
  useEffect(() => {
    const fetchParcels = async () => {
      const { data } = await axios.get("http://localhost:4000/delivery");
      setParcels(data);
    };
    fetchParcels();
  }, []);
  return (
    <>
      <Title title="Check you Parcels" />
      <ParcelList parcels={parcels} />
      <Title title="Notifications" />
      <Notification messages={messages} />
    </>
  );
};

export default BuyerScreen;
