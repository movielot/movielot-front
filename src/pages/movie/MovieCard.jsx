import React from 'react';
import { Card, Typography } from 'antd';

function MovieCard({ movie }) {
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  console.log(movie);
  return (
    <div className="movie-card-wrapper">
      <Card
        title={
          <div className="image-wrapper" onClick={() => alert('hoho~')}>
            <img src={imagePath + movie.poster_path} />
          </div>
        }
      >
        <Typography.Text ellipsis>{movie.title}</Typography.Text>
        <p>
          <Typography.Text ellipsis>
            {movie.overview && movie.overview !== '' ? movie.overview : ' '}
          </Typography.Text>
        </p>
      </Card>
    </div>
  );
}

export default MovieCard;
