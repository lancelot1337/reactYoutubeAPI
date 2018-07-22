//import React
import React, {Component} from 'react'; //corelib, manage component
import ReactDOM from 'react-dom'; //domlib
import SearchBar from './components/search_bar'; //relative path is required
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

//for API search
import YTSearch from 'youtube-api-search'

const API_KEY = `AIzaSyB7ceLcVP5EK_kY4T2ixR65uLbpCmITf-M`

 //Demo video seach


//Creating a new component that returns html
class App extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: "Linus Tech Tips"}, (videos) => {
            //this.setState({videos: videos});
            //for ES6
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        //passing props
        return ( 
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

//instance of component class
//<App />
//update DOM
ReactDOM.render(<App />, document.querySelector('.container'));