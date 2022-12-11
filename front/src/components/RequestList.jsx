import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../static/Arrow.svg";
import RequestModal from "./RequestModal";

const RequestItem = ({ location, parcels, setOpen, setSelectedParcel }) => {
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
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: 12,
          padding: "14px 3px 14px 0",
          cursor: "pointer",
        }}
      >
        <div style={{ flex: "1", fontSize: 16, fontWeight: 600 }}>
          {location}
        </div>
        <Arrow
          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      {isExpanded &&
        parcels.map((parcel, index) => (
          <Link
            to={`/company/${parcel.commodity}`}
            key={index}
            style={{ cursor: "default" }}
          >
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 4px",
                borderTop: !index ? "1px solid var(--border)" : "none",
                height: 23,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  columnGap: 6,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  {parcel.commodity}
                </div>
                <div
                  style={{
                    flex: "1",
                    color: "var(--text-gray)",
                    fontSize: 12,
                    wordBreak: "keep-all",
                    height: 17,
                    overflow: "hidden",
                  }}
                >
                  {parcel.from.split(" ").slice(0, 3).join(" ")}
                </div>
              </div>
              <div style={{ color: "var(--text-gray)", fontSize: 12 }}>
                {parcel.deliveredBy ? parcel.deliveredBy + " 기사님" : null}
              </div>
              {!parcel.deliveredBy && (
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
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedParcel(parcel);
                    setOpen(true);
                  }}
                >
                  Assign
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
};

const RequestList = ({ parcels, setParcels }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const locations = [
    ...new Set(parcels.map((parcel) => parcel.to.split(" ")[0])),
  ].sort();
  return (
    <>
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
            <RequestItem
              key={location}
              location={location}
              parcels={parcels.filter(
                (parcel) => parcel.to.split(" ")[0] === location
              )}
              setOpen={setOpen}
              setSelectedParcel={setSelectedParcel}
            />
          ))
        )}
      </div>
      <RequestModal
        isOpen={isOpen}
        setOpen={setOpen}
        selectedParcel={selectedParcel}
        setParcels={setParcels}
      />
    </>
  );
};
export default RequestList;
