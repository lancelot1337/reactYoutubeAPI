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
            //onChange is emitted when input changes, it is not UD
            <input onChange = {this.onInputChange} />
        );
    }
    
    //declare event handeler
    onInputChange(event) {
        console.log(event.target.value)
    }
}

//export
export default SearchBar;