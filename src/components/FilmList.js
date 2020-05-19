import React, {Component} from "react";
import Film from './Film';

class FilmList extends Component {

render(){
    const filmArray = this.props.films.map(film => {
        return (
        <Film url={film.url} key={film.id}>{film.name}</Film>
        )
    })
    return(
        <div>
            <ul>
            {filmArray}
            </ul>
        </div>
         )
    }   
}

export default FilmList;