import React, {Component} from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "bootstrap/dist/css/bootstrap.css";

class TodoList extends Component{
    render() {
        const {todos, onDeleted, onToggleDone, onToggleImportant}=this.props;
        const  elements = todos.map((item)=>{
            const {id, ...itemProps}=item;
            return (
                <li key={id} className="list-group-item ">
                    <TodoListItem
                        /*
                        pastdagi kodni spread operatorisiz yozilgan shakli
                        label={item.label}
                        important={item.important}
                        id={item.id}
                        */

                        {...itemProps}
                        onDeleted={()=>onDeleted(id)}
                        onToggleDone ={()=> onToggleDone(id)}
                        onToggleImportant ={()=> onToggleImportant(id)}
                    />

                </li>
            );
        });
        return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
        );
    };
}


export default TodoList;