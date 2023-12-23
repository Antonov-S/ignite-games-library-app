import axios from "axios";

import { popularGamesURL } from "../api";

export const loadGames = () => async dispatch => {
  const data = await axios.get(popularGamesURL(), {
    params: {
      key: process.env.VITE_APP_RAWG_API
    }
  });

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: data.data.results
    }
  });
};
