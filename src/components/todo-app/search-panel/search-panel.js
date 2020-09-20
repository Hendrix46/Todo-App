import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./search-panel.css"


class SearchPanel extends Component{
    state={
        term: ''
    };
    onSearchChange=(e)=>{
        const term=e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };
    render() {
        const searchText="Type here to search";
        return (
            <input type="text"
                   className="form-control mb-3 col-md-7"
                   placeholder={searchText}
                   value={this.state.term}
                   onChange={this.onSearchChange}/>
        );
    };

}

export default SearchPanel;