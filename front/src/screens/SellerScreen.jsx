import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "../components/Title";
import ParcelList from "../components/ParcelList";
import Request from "../components/Request";

const SellerScreen = () => {
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
      <Title title="Check you Parcels" />
      <ParcelList parcels={parcels} />
      <Title title="Make a Request" />
      <Request setParcels={setParcels} />
    </>
  );
};

export default SellerScreen;
