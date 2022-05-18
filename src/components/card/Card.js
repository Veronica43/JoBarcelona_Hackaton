import React from "react";
import "./card.css";
import { data } from "../data";

const Card = () => {
  return (
    <div className="main-container">
      {data.map(({ id, title, description, tags, tag }) => {
        return (
          <div key={id} className="container-card">
            <h1>{title}</h1>
            <p>{description}</p>

            <span>{tags}</span>
            <span>{tag}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
