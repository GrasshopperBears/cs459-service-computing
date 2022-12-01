import React from "react";

const DetailInfo = ({ parcel }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 12,
        border: "1px solid var(--border)",
        padding: "14px 16px",
        gap: 14,
        flexWrap: "wrap",
        marginBottom: 16,
      }}
    >
      <div
        style={{
          flex: "1 1 calc(50% - 7px)",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {parcel.commodity}
      </div>
      <div
        style={{
          flex: "1 1 calc(50% - 7px)",
          fontSize: 12,
          color: "var(--text-gray)",
          textAlign: "right",
        }}
      >
        From : {parcel.from}
        <br />
        To : {parcel.to}
      </div>
      <div
        style={{
          flex: "1 1 calc(50% - 7px)",
          fontSize: 12,
          color: "var(--text-gray)",
        }}
      >
        Requested : {parcel.date}
      </div>
      <div
        style={{
          flex: "1 1 calc(50% - 7px)",
          fontSize: 12,
          color: "var(--text-gray)",
          textAlign: "right",
        }}
      >
        {parcel.additionalInfo}
      </div>
    </div>
  );
};

export default DetailInfo;
