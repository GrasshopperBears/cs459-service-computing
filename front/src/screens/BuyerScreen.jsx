import React from "react";

import Title from "../components/Title";
import ParcelItem from "../components/ParcelItem";
import Notification from "../components/Notification";

const messages = [
  "'Water' has departed from 전라남도 목포",
  "'Hoodie' has arrived at 경기도 성남",
  "'Phone Case' is being delivered via 옥천Hub",
];

const BuyerScreen = () => {
  return (
    <>
      <Title title="Check you parcels" />
      <ParcelItem
        item="Hoodie"
        date="2022/11/14"
        status="Departed from 경기도 성남"
      />
      <Title title="Notifications" />
      <Notification messages={messages} />
    </>
  );
};

export default BuyerScreen;
