import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TodaySchedule extends Component{
    constructor(){
      super()
      this.state={
        waktu : ""
      }
    }

    componentDidMount(){
      setInterval(()=>{
        let d=new Date()
        let hour=d.getHours()<10?"0"+d.getHours():d.getHours()
        let minute = d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes()
        this.setState({
          waktu:hour+":"+minute
        })
      },1000)
    }
    render(){
    return(<Table borderless cellPadding={10} style={{margin:'auto'}}>
        <thead>
          <tr>
            <th>Subuh</th>
            <th>Terbit</th>
            <th>Zuhur</th>
            <th>Asar</th>
            <th>Magrib</th>
            <th>Isya</th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <td style={{margin:10+'px'}}>{this.props.schedule['timings']['Fajr']}</td>
            <td style={{margin:10+'px'}}>{this.props.schedule['timings']['Sunrise']}</td>
            <td style={{margin:10+'px'}}>{this.props.schedule['timings']['Dhuhr']}</td>
            <td>{this.props.schedule['timings']['Asr']}</td>
            <td>{this.props.schedule['timings']['Maghrib']}</td>
            <td>{this.props.schedule['timings']['Isha']}</td>
            </tr>
            <tr>
              <td colSpan="6">Pukul {this.state.waktu}</td>
            </tr>
        </tbody>
      </Table>)
    }
}

export default TodaySchedule;