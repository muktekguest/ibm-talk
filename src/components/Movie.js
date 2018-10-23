import React, { Component } from 'react';

import request from 'superagent';

class Movie extends Component {
  constructor() {
    super();

    this.state = {
      details: ''
    };
  }
  componentDidMount() {
    const { movieId } = this.props.match.params;

    request
      .get(`https://api.themoviedb.org/3/movie/${ movieId }?api_key=b21e4e4688626d2b454b9bf55959a588&language=en-US`)
      .then(response => {
        console.log(response.body);
        this.setState({ details: response.body })
      });
  }

  render() {
    

    return (
      <div className='movie'>
        <div className='grid'>
          <div className='grid__column'>
            <img src={'https://image.tmdb.org/t/p/w500/' + this.state.details.poster_path} />
          </div>
          <div className='grid__column movie__details'>
            <h2>{ this.state.details.title }</h2>
            <p>{ this.state.details.overview }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
