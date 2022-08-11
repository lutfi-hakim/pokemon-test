import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPokemon, getDetailSpecies } from "store/action/pokemon";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [detailPoke, setDetailPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [images, setImages] = useState([]);
  const [sta, setSta] = useState([]);

  useEffect(
    () => async () => {
      const resID = await dispatch(getDetailPokemon(id));
      if (resID != undefined) {
        const dataNew = [];
        for (let a = 0; a < resID.types.length; a++) {
          const element = resID.types[a];
          if (element) {
            dataNew.push(element);
          }
        }
        setTypes(dataNew);

        const staNew = [];
        for (let a = 0; a < resID.stats.length; a++) {
          const el = resID.stats[a];
          if (el) {
            staNew.push(el);
          }
        }
        setSta(staNew);
      }

      setImages(resID.sprites);

      setDetailPoke(resID);
    },
    [setDetailPoke, setImages]
  );

  const handleTangkap = () => {
    const items = [
      {
        id: detailPoke.id,
        name: detailPoke.name,
        image: images.front_default,
        types: types,
        weight: detailPoke.weight,
        height: detailPoke.height,
      },
    ];

    const oldTest = localStorage.getItem("test")
      ? localStorage.getItem("test")
      : "[]";
    const arrTest = JSON.parse(oldTest);
    localStorage.setItem("test", JSON.stringify([...arrTest, ...items]));
    alert("Sudah di Tangkap!");
  };

  return (
    <Container>
      <div style={{ marginTop: 80 }}>
        <div className="card-pokemon">
          <div className="nopo">#0{detailPoke.id}</div>
          <div className="img-pokemon">
            <img
              src={images.front_default}
              alt="Put image here"
              className="img-detail"
            />
          </div>
          <div className="info-pokemon">
            <div className="name-pokemon">
              <h5>Name</h5>
              <h2>{detailPoke.name}</h2>
            </div>
            <div className="tipe-pokemon">
              <h5>Type</h5>
              {types.map((item, index) => {
                return (
                  <div className="name-poke" key={index}>
                    {item.type["name"]}
                  </div>
                );
              })}
            </div>
            <div className="stat-pok">
              <h5>Base Stats</h5>
              <ul className="stats">
                {sta.map((item, index) => {
                  return (
                    <li>
                      <h3>{item.base_stat}</h3>
                      <h4>{item.stat["name"]}</h4>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="berat">
              <h5>Dimensi</h5>
              <div className="ber">
                <p>
                  <span className="info-height">Height</span>{" "}
                  {`${detailPoke.height / 10} m/${`${Math.floor(
                    (detailPoke.height / 10) * 3.28
                  )}'${Math.round(
                    (((detailPoke.height / 10) * 3.28) % 1) * 12
                  )}"`} `}{" "}
                </p>

                <p>
                  <span className="info-weight">Weight</span>
                  {` ${(detailPoke.weight / 10).toFixed(1)} kg/${(
                    detailPoke.weight * 0.2205
                  ).toFixed(1)} lbs`}
                </p>
              </div>
            </div>
            <div className="links">
              <button className="follow" onClick={handleTangkap}>
                Tangkap
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
