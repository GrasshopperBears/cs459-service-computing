import React, { useState } from "react";
import { ReactComponent as Arrow } from "../static/Arrow.svg";

const DeliveryItem = ({ parcel }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStarted, setStarted] = useState(false);
  const isCompleted = parcel.status.includes("complete");
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
          width: "calc(100% - 32px)",
        }}
      >
        <div
          style={{
            flex: "1",
            fontSize: 16,
            fontWeight: 600,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {parcel.commodity}
        </div>
        {!isExpanded && (
          <div
            style={{
              flex: "0.5 1",
              fontSize: 10,
              color: "var(--text-gray)",
              textAlign: "right",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {parcel.to.split(" ").splice(0, 3).join(" ")}
          </div>
        )}
        <div
          style={{
            borderRadius: 15,
            padding: "3.5px 11px 4.5px",
            backgroundColor: isCompleted ? "var(--text-gray)" : "var(--blue)",
            cursor: isCompleted ? "not-allowed" : "pointer",
            fontSize: 12,
            color: "var(--white)",
            fontWeight: 600,
          }}
          onClick={() => {
            if (!isCompleted) setStarted(!isStarted);
          }}
        >
          {isCompleted ? "Completed" : isStarted ? "Complete" : "Start"}
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
            flexDirection: "column",
            rowGap: 4,
            padding: "0 14px 12px",
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
    <div style={{ display: "flex", flexDirection: "column", rowGap: 12 }}>
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
