import React, { Component } from 'react';
import '../App.css';

class Sun extends Component{
    render(){
        return(<div className="Sun" style={{bottom:20+this.props.height+'vh'}}></div>)
    }
}

export default Sun;