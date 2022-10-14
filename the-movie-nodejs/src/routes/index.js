const movieRouter = require('./movie');
const trendingRouter = require('./trending');
const tvRouter = require('./tv');
const searchRouter = require('./search');
const discoverRouter = require('./discover');
const genreRouter = require('./genre');
const countryRouter = require('./country');
const yearRouter = require('./year');
const listRouter = require('./list');
const watchlistRouter = require('./watchlist');
const imageRouter = require('./image');
const athRouter = require('./auth');
// var allmovie = require('../public/responseTV');
const axios = require('axios');

// const getDataMovie = (item, season_number) => {
//   return new Promise((resolve) => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/tv/${item.id}/season/${season_number}}?api_key=fe1b70d9265fdb22caa86dca918116eb`
//       )
//       .then((season) => {
//         resolve(season.data);
//       });
//   });
// };

// const getData = (item) => {
//   return new Promise((resolve) => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/tv/${item.id}?api_key=fe1b70d9265fdb22caa86dca918116eb`
//       )
//       .then(async (response) => {
//         let promiseListSS = {};
//         var promiseListSSTemp = [];

//         for (const season of response.data.seasons) {
//           const a = await getDataMovie(item, season.season_number);
//           promiseListSS = { ...promiseListSS, ...a };
//           promiseListSSTemp.push(
//             await getDataMovie(item, season.season_number)
//           );
//         }

//         resolve(promiseListSSTemp);
//         // return promiseListSS;
//       });
//   });
// };

function route(app) {
  app.use('/movie', movieRouter);
  app.use('/tv', tvRouter);
  app.use('/search', searchRouter);
  app.use('/discover', discoverRouter);
  app.use('/trending', trendingRouter);
  app.use('/genre', genreRouter);
  app.use('/country', countryRouter);
  app.use('/year', yearRouter);
  app.use('/list', listRouter);
  app.use('/watchlist', watchlistRouter);
  app.use('/image', imageRouter);
  app.use('/auth', athRouter);
  // app.get('/getallmovie', async (req, res, next) => {
  //   // 1609
  //   var promiseList = [];
  //   for (const item of allmovie) {
  //     // res.json(await getData(item));
  //     // return data;
  //     promiseList.push(await getData(item));
  //   }
  //   // console.log(promiseList);
  //   res.json(promiseList);

  //   // res.json(promiseList);
  //   // Promise.all(promiseList)
  //   //   .then((response) => {
  //   //     res.json(response);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // });
}

module.exports = route;
