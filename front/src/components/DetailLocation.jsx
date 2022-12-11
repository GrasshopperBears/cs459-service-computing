import React, { useEffect, useState } from "react";
import { hubListAddress } from "../static/locations";

const DetailInfo = ({ parcel }) => {
  const [randomLocation, setRandomLocation] = useState("");

  useEffect(() => {
    if (!parcel) return;
    // const fromOrTo = Math.random() > 0.5 ? parcel.from : parcel.to;
    const fromOrTo = parcel.from;
    const hubList = hubListAddress.find(
      (region) => region.name === fromOrTo?.split(" ")[0]
    ).list;
    setRandomLocation(
      // hubList[Math.floor(hubList.length * Math.random())].address
      hubList[0].address
    );
  }, [parcel]);

  useEffect(() => {
    if (!randomLocation) return;

    const container = document.getElementById("map");
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(randomLocation, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        const map = new window.kakao.maps.Map(container, {
          center: coords,
          level: 6,
        });
        const marker = new window.kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(map);
      }
    });
  }, [randomLocation]);

  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        border: "1px solid var(--border)",
      }}
    >
      <div id="map" style={{ width: "100%", height: 232 }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
        }}
      >
        <div style={{ fontSize: 14 }}>충격 감지</div>
        <div style={{ fontSize: 12, color: "var(--text-gray)" }}>
          {randomLocation}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px 12px",
        }}
      >
        <div style={{ fontSize: 12, color: "var(--text-gray)" }}>
          <b style={{ color: "var(--text)" }}>박냐옹 기사님</b> &nbsp;010-
          {Math.ceil(Math.random() * 10000)
            .toString()
            .padStart(4, "0")}
          -
          {Math.ceil(Math.random() * 10000)
            .toString()
            .padStart(4, "0")}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-gray)" }}>
          충격량 : {(Math.random() * 60 + 20).toFixed(1)}(N)
        </div>
      </div>
    </div>
  );
};
export default DetailInfo;
