import React from "react";

const DetailInfo = ({ parcel }) => {
  if (!parcel) return;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        borderRadius: 12,
        border: "1px solid var(--border)",
        padding: "14px 16px",
        gap: 12,
        flexWrap: "wrap",
        marginBottom: 16,
      }}
    >
      <div
        style={{
          flex: "1 1 50%",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {parcel.commodity}
      </div>
      <div
        style={{
          flex: "1 1 calc(50% - 12px)",
          fontSize: 12,
          color: "var(--text-gray)",
          textAlign: "right",
        }}
      >
        Requested : {parcel.date}
      </div>
      <div
        style={{
          flex: "1 1 100%",
          fontSize: 12,
          color: "var(--text-gray)",
        }}
      >
        From : {parcel.from}
        <br />
        To : {parcel.to}
      </div>
      <div
        style={{
          flex: "1 1",
          fontSize: 12,
          color: "var(--text-gray)",
        }}
      >
        Description : {parcel.additionalInfo}
      </div>
    </div>
  );
};

export default DetailInfo;
