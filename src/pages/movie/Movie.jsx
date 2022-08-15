import React, { useEffect, useState } from 'react';
import MovieService from '../../services/MovieService';
import { Pagination, Space } from 'antd';
import './Movie.scss';
import MovieCard from './MovieCard';

function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = () => {
    MovieService.getNowPlayingMovies(page, (res) => {
      setMovies(res);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div className="movie-wrapper">
      {movies.results &&
        movies.results.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      <Space className="movie-pagination" align="center" direction="horizontal">
        <Pagination
          current={page}
          total={movies.total_results}
          onChange={(currentPage) => {
            setPage(currentPage);
          }}
          showSizeChanger={false}
          pageSize={1}
        />
      </Space>
    </div>
  );
}

export default Movie;
