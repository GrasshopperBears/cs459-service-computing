import React from "react";
import Title from "../components/Title";
import DeliveryList from "../components/DeliveryList";
import parcelsMock from "../static/parcelsMock";

const DeliveryScreen = () => {
  return (
    <>
      <Title title="Parcels to Delivery" />
      <DeliveryList parcels={parcelsMock} />
    </>
  );
};

export default DeliveryScreen;
