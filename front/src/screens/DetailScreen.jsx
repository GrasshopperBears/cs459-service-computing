import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Title from "../components/Title";
import DetailInfo from "../components/DetailInfo";
import DetailStatus from "../components/DetailStatus";

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
      <DetailStatus messages={messages} />
    </>
  );
};

export default DetailScreen;
