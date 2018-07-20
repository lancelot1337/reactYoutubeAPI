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
    //declare event handeler
    onInputChange(event) {
        //the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked.
        //event.persist() will remove the synthetic event from the pool and allow references to the event to be retained by user code.
        event.persist();
        console.log(event);
    }
    
    // //declare event handeler
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
    //every class component has a function to render

    render() {
        return(
            //onChange is emitted when input changes, it is not UD
            <input onChange = {this.onInputChange} />
        );
    }
}

//export
export default SearchBar;