import React, {Component} from 'react';
import FilmBox from './containers/FilmBox';


class App extends Component {
  render(){
      return(
        <div>
        <FilmBox/>
        
          <button onClick={event => window.location.href = "https://www.imdb.com/calendar/?region=gb"}>View More Upcoming Releases</button>
        </div>
      )
  } 
}; 


export default App;
