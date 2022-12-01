import React, { useState } from "react";
import axios from "axios";

const Request = ({ setParcels }) => {
  const [requestInfo, setRequestInfo] = useState({
    Commodity: "",
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
        onClick={async () => {
          if (!infoEntered) {
            await axios.post("http://localhost:4000/create", {
              from: requestInfo.Depart,
              to: requestInfo.Arrive,
              date: new Date().toISOString().split("T")[0].replace(/-/g, "/"),
              commodity: requestInfo.Commodity,
              additionalInfo: requestInfo.Additional_Info,
            });
            const { data } = await axios.get("http://localhost:4000/delivery");
            setParcels(data);
            setRequestInfo({
              Commodity: "",
              Additional_Info: "",
              Depart: "",
              Arrive: "",
            });
          }
        }}
      >
        Request the Parcel
      </div>
    </>
  );
};

export default Request;
