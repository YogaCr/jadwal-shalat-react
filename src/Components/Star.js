import React, { Component } from 'react';
import '../App.css';
class Star extends Component{

    render(){
        let element=[];
        for(var i=0;i<500;i++){
            element.push(<div className="Star" key={i} style={{top:Math.random()*35+'vh',left:Math.random()*100+'vw'}}></div>)
        }
        return(<div>{element}</div>)
    }
}

export default Star