import React from "react";

import locationIcon from "../images/location.png";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} className="card-img" alt="card-img" />
        <div className="card-content">
          <div className="location">
            <div className="location-left">
              <img
                src={locationIcon}
                className="location-icon"
                alt="location-icon"
              />
              <p className="country">{props.location}</p>
            </div>
            <a href={props.locationLink} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
          <h1 className="title">{props.title}</h1>
          <p className="dates">{`${props.startDate} - ${props.endDate}`}</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
