import React, {Component} from 'react';
import "./item-add-form.css";

import PropTypes from 'prop-types';

export default class ItemAddForm extends Component{
    state={
      label: ''
    };

    onLabelChange=(e)=>{
      this.setState({
          label:e.target.value
      })
    };
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        this.setState({
            label: " "
        });
    };
    render() {
        return(
            <form className=" d-flex item-add-form was-validated"
            onSubmit={this.onSubmit}>

                <input type="text"
                        className="col-md-9 mt-2 form-control"
                        onChange={this.onLabelChange}
                        placeholder="Type here "
                        value={this.state.label}
                       required
                />

                <button
                    className="mx-auto mt-2 btn btn-outline-info">
                    <i className="fa fa-plus"></i> Add New</button>
            </form>     
        )
    }
}