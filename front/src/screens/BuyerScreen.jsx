import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "../components/Title";
import ParcelList from "../components/ParcelList";
import Notification from "../components/Notification";

const messages = [
  "'Water' has departed from 전라남도 목포",
  "'Hoodie' has arrived at 경기도 성남",
  "'Phone Case' is being delivered via 옥천Hub",
];

const BuyerScreen = () => {
  const [parcels, setParcels] = useState([]);
  const [notification, setNotification] = useState([]);
  const fetchParcels = async () => {
    const { data } = await axios.get("http://localhost:4000/delivery");
    setParcels(data);
  };
  const fetchNotification = async () => {
    const { data } = await axios.get("http://localhost:4000/notification");
    setNotification(data);
  };
  useEffect(() => {
    fetchParcels();
    fetchNotification();
  }, []);
  return (
    <>
      <Title title="Check you Parcels" />
      <ParcelList parcels={parcels} />
      <Title title="Notifications" />
      <Notification notification={notification} />
    </>
  );
};

export default BuyerScreen;
