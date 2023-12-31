import axios from "axios";

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL
} from "../api";

export const loadGames = () => async dispatch => {
  const popularData = await axios.get(popularGamesURL(), {
    params: {
      key: process.env.VITE_APP_RAWG_API
    }
  });

  const newGamesData = await axios.get(newGamesURL(), {
    params: {
      key: process.env.VITE_APP_RAWG_API
    }
  });

  const upcomingGamesData = await axios.get(upcomingGamesURL(), {
    params: {
      key: process.env.VITE_APP_RAWG_API
    }
  });

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results
    }
  });
};

export const fetchSearch = game_name => async dispatch => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results
    }
  });
};
