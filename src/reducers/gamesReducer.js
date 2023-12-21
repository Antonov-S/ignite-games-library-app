const initState = {
  popular: [],
  newGames: [],
  upcoming: []
};

const gamesReduser = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReduser;
