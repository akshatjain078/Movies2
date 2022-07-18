import React, { Component } from 'react'
import {movies} from "../Moviesdata"
import axios from 'axios';

export class Banner extends Component {
  constructor(){
    super();
    this.state = {
        movie:""
    }
}
async componentDidMount(){
  let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=24b93fcc09802cae13a3f1532a6f1062');
  console.log("Banner");
  console.log(res);
  this.setState({
      movie:res.data.results[0]
  })

}
  render() {
    let backdrop_path = this.state.movie.backdrop_path;
    return (
      <div className="card banner-card">
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                <h1 className="card-title banner-title">{this.state.movie.title}</h1>
                <p className="card-text banner-text">{this.state.movie.overview}</p>
            </div>
    )
  }
}

export default Banner