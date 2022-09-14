import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-items.scss";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${linkUrl}`);
      }}
      className={`${size} menu-item`}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
export default MenuItem;
