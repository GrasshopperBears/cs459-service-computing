import React, { useState } from "react";
import { ReactComponent as Arrow } from "../static/Arrow.svg";

const DeliveryItem = ({ parcel }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 12,
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: 12,
          padding: "14px 16px",
          columnGap: 8,
        }}
      >
        <div style={{ flex: "1", fontSize: 16, fontWeight: 600 }}>
          {parcel.commodity}
        </div>
        <div
          style={{
            flex: "1",
            fontSize: 10,
            color: "var(--text-gray)",
            textAlign: "right",
          }}
        >
          {parcel.to}
        </div>
        <div
          style={{
            borderRadius: 15,
            padding: "3.5px 11px 4.5px",
            backgroundColor: "var(--blue)",
            cursor: "pointer",
            fontSize: 12,
            color: "var(--white)",
            fontWeight: 600,
          }}
        >
          Complete
        </div>
        <Arrow
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            cursor: "pointer",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {isExpanded && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 14px 12px",
          }}
        >
          <div style={{ color: "var(--text-gray)", fontSize: 12 }}>
            {parcel.to}
          </div>
          <div style={{ color: "var(--text-gray)", fontSize: 12 }}>
            {parcel.additionalInfo}
          </div>
        </div>
      )}
    </div>
  );
};

const DeliveryList = ({ parcels }) => {
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
        parcels.map((parcel) => <DeliveryItem parcel={parcel} />)
      )}
    </div>
  );
};
export default DeliveryList;
