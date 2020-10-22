import React, {Component} from "react";

class Todo extends Component {
    constructor(){
        super();
    }
    render(){

    return(
        <div>
    <h2>{this.props.task}</h2> 
    </div>
    )
};

}

export default Todo;