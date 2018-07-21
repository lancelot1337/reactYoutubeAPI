//import React
import React from 'react'; //corelib, manage component
import ReactDOM from 'react-dom'; //domlib
import SearchBar from './components/search_bar'; //relative path is required

//for API search
import YTSearch from 'youtube-api-search'

const API_KEY = `AIzaSyB7ceLcVP5EK_kY4T2ixR65uLbpCmITf-M`

 //Demo video seach
 YTSearch({key: API_KEY, term: "Linus Tech Tips"}, (data) => {
    console.log(data);
 });
//Creating a new component that returns html
const App = () => {
    return ( 
        <div>
            <SearchBar />
        </div>
    );
}

//instance of component class
//<App />
//update DOM
ReactDOM.render(<App />, document.querySelector('.container'));