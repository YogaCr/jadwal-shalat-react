import React, { Component } from 'react';
import mountain from './mountain.png';
import '../App.css';
class MountainImage extends Component{
    render(){
        return(<div className="Mountain"><img src={mountain} className="Mountain-pic" alt={'Gunung'}/></div>)
    }
}

export default MountainImage;