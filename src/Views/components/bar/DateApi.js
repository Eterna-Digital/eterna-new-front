import React, { Component, useEffect } from 'react'
import axios from 'axios'
import './Sidebar.css'

class DateApi extends Component{
    constructor(props){
        super(props);
        this.state = {
            dateDate: [],
            date: "",
        };
    }

    componentDidMount(){
        fetch("https://jsonmock.hackerrank.com/datetime")
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({
                date: data.date
            });
        });
    };
   

    render(){
        const dateChange = this.state.date
        const dateNew = dateChange.replaceAll("-", " ")
        return(
            <div className="date-cont">
            <p className="date-text">{dateNew}</p>
            </div>
        )
    }
}

export default DateApi;