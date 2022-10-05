import { get } from '../utils/request';

const MovieService = {};

MovieService.getNowPlayingMovies = (page, successCB) => {
  get('/v1/movies/now', { page }, (response) => {
    successCB(response.contents);
  });
};

export default MovieService;
