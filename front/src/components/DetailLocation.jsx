import React, { useEffect } from "react";
import randomLocation from "../static/locations";

const DetailInfo = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(36.370447, 127.361253),
      level: 6,
    };
    const map = new window.kakao.maps.Map(container, options);

    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(randomLocation, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new window.kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(map); // 마커가 지도 위에 표시되도록 설정합니다
        map.setCenter(coords); // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      }
    });
  }, []);
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
