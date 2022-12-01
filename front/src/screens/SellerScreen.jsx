import React, { useState } from "react";

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
  const [requestInfo, setRequestInfo] = useState(["", "", "", ""]);
  const styleInput = {
    padding: "8px 16px",
    fontSize: 14,
    border: "1px solid var(--border)",
    borderRadius: 8,
    margin: 0,
    backgroundColor: "var(--background-gray)",
  };
  return (
    <>
      <Title title="Check you Parcels" />
      <ParcelList parcels={parcels} />
      <Title title="Make a Request" />
      <div style={{ display: "flex", flexDirection: "column", rowGap: 12 }}>
        <input
          style={styleInput}
          type="text"
          placeholder="Product"
          onChange={(e) => console.log(e)}
        />
        <input
          style={styleInput}
          type="text"
          placeholder="Additional Info"
          onChange={(e) => console.log(e)}
        />
        <input
          style={styleInput}
          type="text"
          placeholder="Depart"
          onChange={(e) => console.log(e)}
        />
        <input
          style={styleInput}
          type="text"
          placeholder="Arrive"
          onChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
};

export default SellerScreen;
