import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function List() {
  const [getLo, setGetLo] = useState([]);
  useEffect(() => {
    const lokData = JSON.parse(localStorage.getItem("test"));
    setGetLo(lokData);
  }, [setGetLo]);
  //   console.log(getLo);

  const removeHandle = (id) => {
    const oldData = getLo.filter((item) => item.id !== id);
    localStorage.setItem("test", JSON.stringify(oldData));
    window.location.reload(false);
  };

  const naviga = useNavigate();

  return (
    <Container>
      <div style={{ marginTop: 80 }}>
        {getLo
          ? getLo.map((item, index) => {
              return (
                <div className="card-pokemon" key={index + 1}>
                  <div className="nopo">#0{index + 1}</div>
                  <div className="img-pokemon">
                    <img
                      src={item.image}
                      alt="Put image here"
                      className="img-list"
                    />
                  </div>
                  <div className="info-pokemon">
                    <div className="name-pokemon">
                      <h5>Name</h5>
                      <h2>{item.name}</h2>
                    </div>
                    <div className="tipe-pokemon">
                      <h5>Type</h5>
                      {item?.types.map((t, index) => {
                        return (
                          <div className="name-poke" key={index}>
                            {t.type["name"]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="links">
                      <button
                        className="follow"
                        onClick={() => removeHandle(item.id)}
                      >
                        Delete
                      </button>
                      <button onClick={() => naviga(`/poke/${item.id}`)}>
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "Not Found!"}
      </div>
    </Container>
  );
}
