import React from "react";
import { Link, useLocation } from "react-router-dom";

const ParcelList = ({ parcels }) => {
  const path = useLocation().pathname.replace("/", "");
  return (
    <div style={{ display: "grid", rowGap: 12 }}>
      {!parcels.length ? (
        <div
          style={{
            display: "flex",
            borderRadius: 12,
            padding: "14px 16px",
            fontSize: 16,
            fontWeight: 500,
            cursor: "not-allowed",
            color: "var(--text-gray)",
            border: "1px solid var(--border)",
          }}
        >
          No parcels found
        </div>
      ) : (
        parcels.map((parcel, index) => (
          <Link to={`/${path}/${parcel.commodity}`} key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: 12,
                border: "1px solid var(--border)",
                padding: "14px 16px",
                columnGap: 14,
                cursor: "pointer",
              }}
            >
              <div style={{ flex: "1", fontSize: 16, fontWeight: 600 }}>
                {parcel.commodity}
              </div>
              <div
                style={{ flex: "1", fontSize: 12, color: "var(--text-gray)" }}
              >
                {parcel.date} <br />
                {parcel.status === "before"
                  ? "배송 출발 전"
                  : parcel.status === "start"
                  ? "배송 중"
                  : "배송 완료"}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};
export default ParcelList;
