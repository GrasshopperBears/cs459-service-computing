import React, { useEffect } from "react";

const DetailLocation = ({ parcel, log, index }) => {
  useEffect(() => {
    const container = document.getElementById(`map${index}`);
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(log.address, function (result, status) {
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
  }, [log.address, index]);
  if (!parcel?.deliveredBy || !log) return;
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        border: "1px solid var(--border)",
        zIndex: 0,
      }}
    >
      <div
        id={`map${index}`}
        style={{ width: "100%", height: 232, zIndex: -1 }}
      />
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
          {log.address}
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
          <b style={{ color: "var(--text)" }}>{parcel.deliveredBy} 기사님</b>{" "}
          &nbsp;
          <div
            style={{
              fontSize: "inherit",
              color: "var(--blue)",
              cursor: "pointer",
              textDecoration: "underline",
              display: "initial",
            }}
            onClick={() => alert("전화 연결 중입니다.")}
          >
            010-
            {parseInt(parcel.deliveredBy.charCodeAt(0) / 10)}-
            {parseInt(parcel.deliveredBy.charCodeAt(1) / 10)}
          </div>
        </div>
        <div style={{ fontSize: 12, color: "var(--text-gray)" }}>
          충격량 : {log.impact}(N)
        </div>
      </div>
    </div>
  );
};
export default DetailLocation;
