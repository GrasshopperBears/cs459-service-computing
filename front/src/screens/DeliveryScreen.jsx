import React, { useState } from "react";
import Title from "../components/Title";
import DeliveryList from "../components/DeliveryList";
import parcelsMock from "../static/parcelsMock";

const DeliveryScreen = () => {
  const [isSensorOn, setSensorOn] = useState(false);
  return (
    <>
      <Title title="Parcels to Delivery" />
      <DeliveryList parcels={parcelsMock} />
      <div
        style={{
          marginTop: 12,
          textAlign: "center",
          cursor: "pointer",
          color: isSensorOn ? "blue" : "red",
          fontWeight: 600,
          fontSize: 14,
        }}
        onClick={() => setSensorOn(!isSensorOn)}
      >
        Sensor {isSensorOn ? "ON" : "OFF"}
      </div>
    </>
  );
};

export default DeliveryScreen;
