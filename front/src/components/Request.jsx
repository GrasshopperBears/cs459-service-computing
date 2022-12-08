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
  const onClick = () => {
    const product = axios.get(
      `https://api.escuelajs.co/api/v1/products/${Math.ceil(
        Math.random() * 200
      )}`
    );
    const params = () => {
      return {
        params: {
          x: `${Math.random() * (129.164104 - 126.751205) + 126.751205}`,
          y: `${Math.random() * (37.7238554 - 35.1599547) + 35.1599547}`,
          // 파주: X:126.751205, Y:37.7238554
          // 부산: X:129.164104, Y:35.1599547
        },
      };
    };
    const headers = {
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_KEY}` },
    };
    const address = () =>
      axios.get("https://dapi.kakao.com/v2/local/geo/coord2address", {
        ...params(),
        ...headers,
      });
    Promise.all([product, address(), address()]).then(
      ([{ data: productData }, { data: departData }, { data: arriveData }]) => {
        setRequestInfo({
          Commodity: productData.title,
          Additional_Info: productData.description,
          Depart: departData.documents[0]?.address.address_name,
          Arrive: arriveData.documents[0]?.address.address_name,
        });
      }
    );
  };
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
            const today = new Date();
            today.setHours(today.getHours() + 9);
            await axios.post("http://localhost:4000/create", {
              from: requestInfo.Depart,
              to: requestInfo.Arrive,
              date: today.toISOString().split("T")[0].replace(/-/g, "/"),
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
      <div
        style={{
          textAlign: "center",
          marginTop: 8,
          fontSize: 14,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        Generate random request
      </div>
    </>
  );
};

export default Request;
