import React, { useState } from "react";
import axios from "axios";

const drivers = ["김넙죽", "이거위", "박냐옹", "최오리", "정너굴", "강백로"];

const DriverItem = ({ driver, setOpen, selectedParcel, setParcels }) => {
  const [isHover, setHover] = useState(false);
  const fetchParcels = async () => {
    const { data } = await axios.get("http://localhost:4000/delivery");
    setParcels(data);
  };
  return (
    <div
      style={{
        padding: "6px 12px",
        backgroundColor: isHover ? "var(--background-gray)" : undefined,
        borderRadius: 4,
        cursor: "pointer",
      }}
      onClick={async () => {
        const { status } = await axios.post("http://localhost:4000/assign", {
          id: selectedParcel._id,
          deliveredBy: driver,
        });
        if (status === 200) fetchParcels();
        setOpen(false);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {driver}
    </div>
  );
};

const RequestModal = ({ isOpen, setOpen, selectedParcel, setParcels }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.48)",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
        transition: "opacity 0.25s ease-out",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          width: "min(350px, 100% - 40px)",
          backgroundColor: "var(--white)",
          padding: "0 12px 10px",
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            padding: "16px 20px",
            borderBottom: "1px solid var(--border)",
            marginBottom: 6,
          }}
        >
          Select the Driver
        </div>
        {drivers.map((driver) => (
          <DriverItem
            key={driver}
            driver={driver}
            setOpen={setOpen}
            selectedParcel={selectedParcel}
            setParcels={setParcels}
          />
        ))}
      </div>
    </div>
  );
};

export default RequestModal;
