import React, {useState} from "react";

const AppItem = ({ name, description, Image }) => {
  return (
    <div className="app-item">
      <h2 className="item-name">{name}</h2>
      <div className="item-image">{Image}</div>
      <p className="item-description">{description}</p>
    </div>
  );
};

export default AppItem;

