import React, { useState } from "react";
import { ReactComponent as Arrow } from "../static/Arrow.svg";

const RequestItem = ({ location, parcels }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 12,
        padding: "0 12px",
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: 12,
          padding: "14px 3px 14px 0",
          columnGap: 8,
        }}
      >
        <div style={{ flex: "1", fontSize: 16, fontWeight: 600 }}>
          {location}
        </div>
        <Arrow
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            cursor: "pointer",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {isExpanded &&
        parcels
          .filter((parcel) => parcel.to === location)
          .map((parcel, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 4px",
                columnGap: 4,
                borderTop: !index ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                {parcel.commodity}
              </div>
              <div
                style={{ flex: "1", color: "var(--text-gray)", fontSize: 12 }}
              >
                {parcel.from}
              </div>
              <div
                style={{
                  borderRadius: 15,
                  padding: "2.5px 10px 3.5px",
                  backgroundColor: "var(--blue)",
                  cursor: "pointer",
                  fontSize: 12,
                  color: "var(--white)",
                  fontWeight: 600,
                }}
              >
                Assign
              </div>
            </div>
          ))}
    </div>
  );
};

const RequestList = ({ parcels }) => {
  const locations = parcels.map((parcel) => parcel.to);
  return (
    <div style={{ display: "grid", rowGap: 12 }}>
      {!locations.length ? (
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
          No requests found
        </div>
      ) : (
        locations.map((location) => (
          <RequestItem location={location} parcels={parcels} />
        ))
      )}
    </div>
  );
};
export default RequestList;
