//import React
import React, {Component} from 'react'

/*
//define the component class
const SearchBar = () => {   //functional component
    return <input />;
}
*/

//ES6 class based component
class SearchBar extends Component{
    //every class component has a function to render
    render() {
        return(
            <input />
        );
    }
}


//export
export default SearchBar;