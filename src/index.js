//import React
import React, {Component} from 'react'; //corelib, manage component
import ReactDOM from 'react-dom'; //domlib
import SearchBar from './components/search_bar'; //relative path is required

//for API search
import YTSearch from 'youtube-api-search'

const API_KEY = `AIzaSyB7ceLcVP5EK_kY4T2ixR65uLbpCmITf-M`

 //Demo video seach


//Creating a new component that returns html
class App extends Component{
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: "Linus Tech Tips"}, (videos) => {
            //this.setState({videos: videos});
            //for ES6
            this.setState({videos});
        });
    }

    render(){
        return ( 
            <div>
                <SearchBar />
            </div>
        );
    }
}

//instance of component class
//<App />
//update DOM
ReactDOM.render(<App />, document.querySelector('.container'));