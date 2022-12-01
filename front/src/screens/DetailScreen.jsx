import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Title from "../components/Title";
import DetailInfo from "../components/DetailInfo";

const messages = [
  { location: "강남", status: "잡화처리" },
  { location: "강남", status: "간선상차" },
  { location: "대전HUB", status: "간선상차" },
  { location: "유성", status: "간선하차" },
  { location: "대전유성신성", status: "배달출발" },
];

const DetailScreen = () => {
  const [parcel, setParcel] = useState({});
  const location = useLocation();
  useEffect(() => {
    const fetchParcel = async () => {
      const { data } = await axios.get("http://localhost:4000/delivery");
      setParcel(
        data.find(
          (item) =>
            item.commodity === decodeURI(location.pathname.split("/")[2])
        )
      );
    };
    fetchParcel();
  }, []);

  return (
    <>
      <Title title="Parcel Details" />
      <DetailInfo parcel={parcel} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--background-gray)",
          padding: "0 16px",
          borderRadius: 12,
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: "16px 0",
              borderTop: index ? "1px solid var(--border)" : undefined,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 14 }}>{message.location}</div>
            <div style={{ fontSize: 12, color: "var(--text-gray)" }}>
              {message.status}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailScreen;
