import React, { useEffect } from "react";

const DetailInfo = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(36.370447, 127.361253),
      level: 6,
    };
    const map = new window.kakao.maps.Map(container, options);
    const markerPosition = new window.kakao.maps.LatLng(36.370447, 127.361253);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
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
          대전 유성구 대학로 291
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
          <b style={{ color: "var(--text)" }}>박냐옹 기사님</b> 010-1234-5678
        </div>
        <div style={{ fontSize: 12, color: "var(--text-gray)" }}>
          충격량 : 37(N)
        </div>
      </div>
    </div>
  );
};
export default DetailInfo;
