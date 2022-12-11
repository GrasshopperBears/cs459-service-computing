import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Title from "../components/Title";
import DetailInfo from "../components/DetailInfo";
import DetailStatus from "../components/DetailStatus";
import DetailLocation from "../components/DetailLocation";
import { hubListAddress } from "../static/locations.js";

const messages = (from, to) => [
  { location: from?.split(" ")[1].slice(0, 2), status: "잡화처리" },
  { location: from?.split(" ")[1].slice(0, 2), status: "간선상차" },
  {
    location: hubListAddress.find((region) => region.name === to?.slice(0, 2))
      ?.list[0].hubName,
    status: "간선상차",
  },
  { location: to?.split(" ")[1].slice(0, 2), status: "간선하차" },
  {
    location: to
      ?.split(" ")
      .slice(0, 3)
      .join("")
      .replaceAll(/시|군|면|동/g, ""),
    status: "배달출발",
  },
  {
    location: to
      ?.split(" ")
      .slice(0, 3)
      .join("")
      .replaceAll(/시|군|면|동/g, ""),
    status: "배달완료",
  },
];

const DetailScreen = () => {
  const [parcel, setParcel] = useState(null);
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
  }, [location.pathname]);

  return (
    <>
      <Title title="Parcel Details" />
      <DetailInfo parcel={parcel} />
      <DetailStatus
        messages={
          parcel?.status === "before"
            ? []
            : parcel?.status === "complete"
            ? messages(parcel?.from, parcel?.to)
            : messages(parcel?.from, parcel?.to).slice(
                0,
                Math.ceil(Math.random() * 5 + 1)
              )
        }
      />
      <DetailLocation parcel={parcel} />
    </>
  );
};

export default DetailScreen;
