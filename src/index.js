import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
import _ from 'lodash';

import '../public/css/index.css';

const API_KEY = 'AIzaSyDo-b7nNMczPim3FcqVG8vOnh2DNfwJYs4';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch (term){
    YTSearch({key: API_KEY , term: term}, (videos) =>{
       this.setState({
         videos: videos,
         selectedVideo: videos[0]
        }) // Si se llama igual el estado que la varialbe que pasamos
    });    // se puede simplificar --> { videos } en ES6
  }




  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

      //onSearchTermChanges={term => this.videoSearch(term)}/>

    return (
     <div>
       <SearchBar onSearchTermChanges={videoSearch} />
       <VideoDetail video={this.state.selectedVideo}/>
       <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
     </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('root')
ReactDOM.render(<App />, document.querySelector('.container'));
