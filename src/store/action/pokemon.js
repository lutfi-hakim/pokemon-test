import { FETCH_ALL_POKEMON, FETCH_DETAIL_POKEMON } from "store/types";

import PokemonDataService from "../../services/pokemon.services";

export const getAllPokemon = () => async (dispatch) => {
  try {
    const res = await PokemonDataService.getAll();
    const arr = res?.data?.results;

    // dispatch({
    //   type: FETCH_ALL_POKEMON,
    //   payload: res.data,
    // });
    // return Promise.resolve(res.data);
    return Promise.all(
      arr.map(async (pokemon) => {
        const result = await fetchPokemon(pokemon);
        // console.log("img", result);
        dispatch({
          type: FETCH_ALL_POKEMON,
          payload: result,
        });
        return Promise.resolve(result);
      })
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

async function fetchPokemon(poke) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${poke.name}`
    );
    return await response.json();
  } catch (e) {
    throw new Error(`fetching ${poke.name}'s details went wrong`);
  }
}

export const getDetailPokemon = (id) => async (dispatch) => {
  try {
    const res = await PokemonDataService.get(id);
    dispatch({
      type: FETCH_DETAIL_POKEMON,
      payload: res,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getDetailSpecies = (id) => async (dispatch) => {
  try {
    const res = await PokemonDataService.getSpecies(id);
    dispatch({
      type: FETCH_DETAIL_POKEMON,
      payload: res,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// export const fetchAllPokemon = (pokemon) => (dispatch) => {
//   return axios
//     .get("https://pokeapi.co/api/v2/pokemon")
//     .then((responseAll) => {
//       dispatch({
//         type: FETCH_ALL_POKEMON,
//         payload: { [pokemon]: responseAll.data },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// async function fetchAll() {
//   let pokemons = [];
//   let start = performance.now();

//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
//     const json = await response.json();
//     const arr = json.results;
//     return Promise.all(
//       arr.map(async (poke) => {
//         const result = await fetchPokemon(poke);
//         pokemons.push(result);
//       })
//     ).then(() => {
//       let end = performance.now();
//       let timer = parseInt(end - start);
//       return { pokemons, timer };
//     });
//   } catch (e) {
//     throw new Error(`fetching list of pokemons went wrong`);
//   }
// }
