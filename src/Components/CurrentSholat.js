import React, { Component } from 'react';

class CurrentSholat extends Component{
    

    render(){
        return(<div>Waktu Sholat Saat Ini Adalah
            <h1>{this.props.sholat}</h1>
            <span>Lokasi anda saat ini adalah kota {this.props.city}</span>
        </div>)
    }
}

export default CurrentSholat;