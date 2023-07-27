import React from "react";
import Card from "./card.jsx";

const Cards = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
            <Card className="col-3"/>
            <Card className="col-3"/>
            <Card className="col-3"/>
            <Card className="col-3"/>
        </div>
      </div>
    </>
  );
};

export default Cards;
