import React, { Component } from 'react';
import CurrentSholat from './CurrentSholat.js';
import TodaySchedule from './TodaySchedule';
import '../App.css';

class WaktuSholat extends Component{
    constructor(){
        super()
        this.state={
            isLoaded:false,
            isError:false,
            currentSholat:"",
            weekly:null,
            lat:"",
            long:""
        }
    }
    componentDidMount(){
        this.getLocation()
        this.timeListener = setInterval(()=>{
            if(this.state.isLoaded){
            this.getCurrentSholat()}
        },1000)    
    }
    
    componentWillUnmount(){
        clearInterval(this.timeListener)
    }

    getLocation=()=>{
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("Get location")
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            console.log("Lat : "+lat+" Long : "+long)
            localStorage.setItem("lat",lat.toString())
            localStorage.setItem("long",long.toString()) 
            this.setState({
                lat:lat,
                long:long
            })
            this.getCity()
        },(error)=>{
            if(localStorage.getItem("lat")){
                this.setState({
                    lat:localStorage.getItem("lat"),
                    long:localStorage.getItem("long")
                })
                console.log("Get location")
                this.getCity()
                }else{
                    this.setState({
                        isError:true
                    })
                    console.log(error.message)
                    this.getLocation()
                }
            },options);
    }

    getCity=()=>{
        console.log("Get City's Name")
        fetch('https://us1.locationiq.com/v1/reverse.php?key='+process.env.REACT_APP_API_KEY+'&lat='+this.state.lat+'&lon='+this.state.long+'&format=json')
        .then(res=>res.json())
        .then((result)=>{
            localStorage.setItem("city",result.address.city)
            this.setState({
                city:result.address.city
            })
            this.getApiData()
        },(error)=>{
            if(localStorage.getItem("city")){
                this.setState({
                    city:localStorage.getItem("city")
                })
                this.getApiData()
            }else{
                this.setState({
                    isError:true
                })
                console.log("Can't get city's name, retrying")
                this.getCity()
            }
        })
    }
    getApiData=()=>{
            console.log("Get API data")
            let d = new Date()
            let lat = this.state.lat
            let long = this.state.long
            fetch('http://api.aladhan.com/v1/calendar?latitude='+lat+'&longitude='+long+'&method=2&month='+(d.getMonth()+1)+'&year='+d.getFullYear(),{
                    method: 'GET'
                })
                .then(res=>res.json())
                .then((result)=>{
                    this.setState({
                        weekly:result.data,
                        isLoaded:true
                    })
                    localStorage.setItem("schedule",JSON.stringify(result.data))
                },(error)=>{
                        if(!localStorage.getItem("schedule")){
                            this.setState({
                                isError:true
                            })
                            console.log("Can't get the schedule")
                            this.getApiData()
                        }
                    }
                )
         
        
    }

    getCurrentSholat(){
        let d = new Date();
        let schedule = this.getAllToday();
        let current="";
        let sholat=["Fajr","Sunrise","Dhuhr","Asr","Maghrib","Isha"];
        sholat.forEach(e=>{
            let time=new Date(schedule["date"]["readable"]+" "+schedule["timings"][e]);
            if(e==="Fajr"&&time>d){
                current="Isya"
            }
            else if(time<=d){
                if(e==="Fajr"){
                    current="Subuh";
                }
                else if(e==="Sunrise"){
                    current="Terbit";
                }
                else if(e==="Dhuhr"){
                    current="Zuhur"
                }
                else if(e==="Asr"){
                    current="Asar"
                }
                else if(e==="Maghrib"){
                    current="Magrib"
                }
                else if(e==="Isha"){
                    current="Isya"
                }
            }
        });
        this.setState({
            currentSholat:current
        })
    }

    getAllToday(){
        let current;
        this.state.weekly.forEach(e=>{
            let d = new Date(e['date']['readable']);
            let today = new Date();
            if(today.getDate()===d.getDate()){
                current = e;
            }
        });
        return current;
    }
    
    render(){
        let element=this.state.isLoaded?<div className="Waktu-sholat">
                                            <CurrentSholat sholat={this.state.currentSholat} city={this.state.city}></CurrentSholat>
                                            <TodaySchedule schedule={this.getAllToday()}></TodaySchedule></div>
        :this.state.isError?<div>Something's wrong when trying to get the data<br/>Retrying</div>:<div>Getting Location</div>;
        return(<div>
            {element}
        </div>)
    }
}

export default WaktuSholat