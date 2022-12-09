import React, { useEffect, useState } from "react";
import axios from "axios";

import Title from "../components/Title";
import DeliveryList from "../components/DeliveryList";

const DeliveryScreen = () => {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    const fetchParcels = async () => {
      const { data } = await axios.get("http://localhost:4000/delivery", {
        params: { deliveryMan: "김넙죽" },
      });
      setParcels(data);
    };
    fetchParcels();
  }, []);
  return (
    <>
      <Title title="Parcels to Delivery" />
      <DeliveryList parcels={parcels} />
    </>
  );
};

export default DeliveryScreen;
