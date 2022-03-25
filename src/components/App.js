import React from "react";
import Navbar from "./Navbar";
import { data } from '../data';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from "../actions";


class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));

    // console.log('state', this.props.store.getState());

  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if (index !== -1) {
      return true;
    }
    return false;
  }

  // moviesAndFavourites = (str) => {
  //   if (str == "fav") {
  //     tab = favourites;
  //   }
  // }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val))
  }
  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();
    const displayMovies = showFavourites ? favourites : list;
    console.log('State', this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)} > Movies </div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)} >Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
