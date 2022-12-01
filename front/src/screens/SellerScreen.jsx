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
  const [requestInfo, setRequestInfo] = useState({
    Product: "",
    Additional_Info: "",
    Depart: "",
    Arrive: "",
  });
  const styleInput = {
    padding: "8px 16px",
    fontSize: 14,
    border: "1px solid var(--border)",
    borderRadius: 8,
    margin: 0,
    backgroundColor: "var(--background-gray)",
  };
  const infoEntered = Object.values(requestInfo).includes("");
  return (
    <>
      <Title title="Check you Parcels" />
      <ParcelList parcels={parcels} />
      <Title title="Make a Request" />
      <div style={{ display: "flex", flexDirection: "column", rowGap: 12 }}>
        {Object.keys(requestInfo).map((key) => (
          <input
            key={key}
            style={styleInput}
            type="text"
            value={requestInfo[key]}
            placeholder={key}
            onChange={(e) => {
              const newRequestInfo = { ...requestInfo };
              newRequestInfo[key] = e.target.value;
              setRequestInfo(newRequestInfo);
            }}
          />
        ))}
      </div>
      <div
        style={{
          marginTop: 12,
          padding: 8,
          backgroundColor: infoEntered ? "var(--border)" : "var(--blue)",
          fontWeight: 600,
          borderRadius: 8,
          color: "var(--white)",
          textAlign: "center",
          cursor: infoEntered ? "not-allowed" : "pointer",
        }}
        onClick={() =>
          setRequestInfo({
            Product: "",
            Additional_Info: "",
            Depart: "",
            Arrive: "",
          })
        }
      >
        Request the Parcel
      </div>
    </>
  );
};

export default SellerScreen;
