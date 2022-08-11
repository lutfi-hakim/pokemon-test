import ItemCard from "components/Cards/ItemCard";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllPokemon } from "store/action/pokemon";

export default function Home() {
  const dispatch = useDispatch();
  const [dataPokemon, setDataPokemon] = useState([]);

  useEffect(
    () => async () => {
      const res = await dispatch(getAllPokemon());
      setDataPokemon(res);
    },
    [setDataPokemon]
  );

  return (
    <>
      <Container>
        <div style={{ marginTop: 100 }}>
          <ItemCard data={dataPokemon} />
        </div>
      </Container>
    </>
  );
}
