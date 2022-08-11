import React from "react";

import "./ItemCard.scss";

function ItemCard({ data }) {
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <>
              <div className="section-contact" key={index}>
                <div className="contact-card">
                  <span>#0{index + 1}</span>
                  <div className="card-image">
                    <img src={item.sprites["front_default"]} alt="image" />
                    <h2>Sarfo Carbell</h2>
                  </div>
                  <div className="card-text">
                    <a href={`/poke/${item.id}`} className="btn">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

export default ItemCard;
