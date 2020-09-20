import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./todo-list-item.css";

class TodoListItem extends Component{
    constructor() {
        super();


    }


    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, important, done}= this.props;


        let classNames='todo-list-item';
        if (done){
            classNames += ' done';
        }

        if (important){
            classNames += ' important';
        }

        return(
            <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={ onToggleDone }>
                    {label}
            </span>
       <button className="fa fa-trash  btn btn-outline-danger float-right" onClick={onDeleted}></button>
                <button className="fa fa-exclamation btn btn-outline-success float-right"
                onClick={ onToggleImportant }
                ></button>
            </span>
        );
    };
}


export default TodoListItem;