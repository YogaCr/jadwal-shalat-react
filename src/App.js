import React,{Component} from 'react';
import {getBackgroundColor} from './Components/bgcolor.js';
import './Components/WaktuSholat.js';
import './App.css';
import Sun from './Components/Sun.js';
import Star from './Components/Star.js';
import WaktuSholat from './Components/WaktuSholat.js';
import MountainImage from './Components/MountainImage.js';

class App extends Component{
  
  constructor(props){
    super(props);
    let d = new Date();
      if(d.getHours()>=5&&d.getHours()<12){
          this.state = {
          warna:getBackgroundColor(),
          height:60-((12-d.getHours())*10),
          sun:true
        }
      }
      else if(d.getHours()>12&&d.getHours()<18){
        this.state = {
          warna:getBackgroundColor(),
          height:((18-d.getHours())*10),
          sun:true
        }
      }else{
        this.state = {
          warna:getBackgroundColor(),
          sun:false,
        }
      }
  }
  
  
  componentDidMount(){
    setInterval(()=>{
      let d = new Date();
      if(d.getHours()>=5&&d.getHours()<12){
          this.setState({
          height:60-((12-d.getHours())*10),
          sun:true
        })
      }
      else if(d.getHours()>=12&&d.getHours()<18){
          this.setState({
          height:((18-d.getHours())*10),
          sun:true
        })
      }else{
        if(this.state.sun){
          this.setState({
            sun:false,
          })
        }
      }
      this.setState({
        "warna":getBackgroundColor()
      })
    },10000);
  }
  
  
  render(){
    let sky
    if(this.state.sun){
      sky = <Sun height={this.state.height}></Sun>
    }else{
      sky = <Star></Star>
    }
    return (
      <div className="App" style={{background:'linear-gradient(0deg, rgba('+this.state.warna['b']['r']+','+this.state.warna['b']['g']+','+this.state.warna['b']['b']+',1) 36%, rgba('+this.state.warna['t']['r']+','+this.state.warna['t']['g']+','+this.state.warna['t']['b']+',1) 100%)'}}>        
        <div className="App-header">
          <MountainImage></MountainImage>
          {sky}
          <WaktuSholat></WaktuSholat>
        </div>
      </div>
    );
  }
}

export default App;
