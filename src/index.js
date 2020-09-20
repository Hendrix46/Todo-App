import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import AppHeader from "./components/todo-app/app-header/App-header";
import TodoList from "./components/todo-app/todo-list/todo-list";
import SearchPanel from "./components/todo-app/search-panel/search-panel";
import ItemStatusFilter from "./components/todo-app/item-status-filter/item-status-filter";
import ItemAddForm from "./components/todo-app/item-add-form/item-add-form";



export default class App extends Component{
    maxId=1;
    state={
        todoData:[
            this.createToDoItem("Drink Coffe"),
            this.createToDoItem("Make Awesome App"),
            this.createToDoItem("Learn React"),
            this.createToDoItem("Watch Movie"),
        ],
        term: '',
        filter: 'all'
    };
    createToDoItem(label){
        return{
            label,
            important: false,
            done:false,
            id: this.maxId++
        }
    };
    deleteItem=(id)=>{
       this.setState(({ todoData })=>{
           const idx = todoData.findIndex((el)=> el.id === id);

           const newArray = [
               ...todoData.slice(0 , idx),
               ...todoData.slice(idx +1)
           ];

           return{
               todoData: newArray
           }
       })
    };
    addItem =(text)=>{
        const newItem= this.createToDoItem(text);
        this.setState(({todoData})=>{
            const newArr=[
                ...todoData,
                newItem
            ];
            return{
                todoData:newArr
            }
        })

    };

    onToggleImportant=(id)=>{
        this.setState(({ todoData })=>{
            return{
                todoData: this.ToggleProperty(todoData, id, 'important')
            };
        })
    };

    ToggleProperty=(arr, id, propName)=>{
        const idx = arr.findIndex((el)=>el.id === id);

        const oldItem =arr[idx];
        const newItem ={...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    };
    onToggleDone=(id)=>{
        this.setState(({ todoData })=>{
            return{
                todoData: this.ToggleProperty(todoData, id, 'done')
            };
        })
    };

    onSearchChange=(term) =>{
        this.setState({term});
    };

    onFilterChange=(filter) =>{
        this.setState({filter});
    };

    search(items, term){
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=> !item.done);
            case 'done':
                return items.filter((item)=> item.done);
            default :
                return items;
        }
    };

    render(){
        const {todoData, term, filter}=this.state;

        const visibleItems= this.filter(this.search(todoData, term), filter);

        const doneCount= todoData.filter((el)=>el.done).length;

        const todoCount= todoData.length- doneCount;
    return (
        <div className="row">
            <div className="col-md-4 mx-auto mt-5">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="d-flex">
                    <SearchPanel  onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdd={this.addItem}/>
            </div>
        </div>
    );
}

}

ReactDOM.render(<App />, document.getElementById("root"));