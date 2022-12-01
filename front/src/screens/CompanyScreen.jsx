import React from "react";
import Title from "../components/Title";
import RequestList from "../components/RequestList";
import parcelsMock from "../static/parcelsMock";

const CompanyScreen = () => {
  return (
    <>
      <Title title="Delivery Requests" />
      <RequestList parcels={parcelsMock} />
    </>
  );
};

export default CompanyScreen;
