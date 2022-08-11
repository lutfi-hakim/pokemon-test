import {
  FETCH_ALL_POKEMON,
  FETCH_DETAIL_POKEMON,
  FETCH_DETAIL_SPECIES,
} from "store/types";

const initialState = [];

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POKEMON:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_DETAIL_POKEMON:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_DETAIL_SPECIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default pokemonReducer;
