import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='block'>
        <h1 className='block__title'>Found for you</h1>
        <ul className='movie__list'>
          { this.props.movies.map(movie => (
            <li className='movie__item'>
              <Link to={'/movies/' + movie.id}>
                <img className='movie__poster' src={ 'https://image.tmdb.org/t/p/w500/' + movie.poster_path } alt='Name' />
                <h5 className='movie__title'>{ movie.title }</h5>
                <p className='movie__stats'>
                  { movie.release_date }
                </p>
              </Link>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default Home;
