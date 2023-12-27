const BASE_URL = `https://api.rawg.io/api/`;

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentYear}&ordering=-rating&page_size=10&?`;
export const popularGamesURL = () => BASE_URL + popular_games;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const upcomingGamesURL = () => BASE_URL + upcoming_games;
export const newGamesURL = () => BASE_URL + newGames;

//GAME DETAILS
export const gameDetailsURL = game_id =>
  `${BASE_URL}games/${game_id}.json?&key=${process.env.VITE_APP_RAWG_API}`;
// Games Screenshots
export const gameScreenshotURL = game_id =>
  `${BASE_URL}games/${game_id}/screenshots?&key=${process.env.VITE_APP_RAWG_API}`;
//Searched game
export const searchGameURL = game_name =>
  `${BASE_URL}games?search=${game_name}&page_size=9`;
