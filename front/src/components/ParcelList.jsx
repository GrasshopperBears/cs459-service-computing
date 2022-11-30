import React from "react";

const ParcelList = ({ parcels }) => {
  return (
    <div style={{ display: "grid", rowGap: 12 }}>
      {parcels.map((parcel) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: 12,
            border: "1px solid var(--border)",
            padding: 14,
            columnGap: 14,
            cursor: "pointer",
          }}
        >
          <div style={{ flex: "1", fontSize: 16, fontWeight: 600 }}>
            {parcel.item}
          </div>
          <div style={{ flex: "1", fontSize: 12, color: "var(--text-gray)" }}>
            {parcel.date} <br />
            {parcel.status}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ParcelList;
