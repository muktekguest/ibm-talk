import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import request from 'superagent';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Movie from './components/Movie';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      movies: []
    };
  }

  searchMovie = e => {
    e.preventDefault();
    const query = encodeURI(e.target.value);

    if (query.length > 0) {
      request
        .get(`https://api.themoviedb.org/3/search/movie?api_key=b21e4e4688626d2b454b9bf55959a588&query=${ query }`)
        .then(response => {
          console.log(response.body.results)
          this.setState({
            movies: response.body.results
          });
        });
    } else {
      this.setState({
        movies: []
      });
    }
  }

  render() {
    return (
      <div className="app">
        <div className='search'>
          <input className='search__name' placeholder='Find a movie' onChange={ this.searchMovie } />
        </div>
        <Switch>
          <Route exact path='/' render={(props) => <Home movies={ this.state.movies } {...props} />} />
          <Route path='/movies/:movieId' component={Movie} />
        </Switch>
      </div>
    );
  }
}

export default App;
