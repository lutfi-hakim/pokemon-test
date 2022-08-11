import http from "../http-common";

class PokemonDataService {
  getAll() {
    return http.get("/pokemon");
  }
  get(id) {
    return http.get(`/pokemon/${id}`);
  }
  getSpecies(id) {
    return http.get(`/pokemon-species/${id}`);
  }
}

export default new PokemonDataService();
