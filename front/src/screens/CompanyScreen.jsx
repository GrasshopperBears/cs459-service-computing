import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "../components/Title";
import RequestList from "../components/RequestList";

const CompanyScreen = () => {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    const fetchParcels = async () => {
      const { data } = await axios.get("http://localhost:4000/delivery");
      setParcels(data);
    };
    fetchParcels();
  }, []);
  return (
    <>
      <Title title="Delivery Requests" />
      <RequestList parcels={parcels} />
      <div
        style={{
          paddingTop: "10px",
          color: "var(--text-gray)",
          textAlign: "center",
          fontSize: 14,
        }}
      >
        도착지 기준으로 분류
      </div>
    </>
  );
};

export default CompanyScreen;
