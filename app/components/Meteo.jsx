import React, {createClass} from 'react'

let Meteo = createClass({
    getInitialState(){
        return {data:{weather:[], main:{}}}
    },
    componentDidMount(){
        socket.on('forecast', (data)=>{
            this.setState({data})
        })
    },
    render(){
        const {data} = this.state
        let icon = data.weather && data.weather[0] && data.weather[0].icon && iconMap[data.weather[0].icon] || "wi-meteor" 
        return (
            <div className="meteo-box component">
                <i className={"wi wi-fw "+ icon} />
                <span>{data.main.temp} °C</span>
            </div>
        )
    }
})


let iconMap = {
  "01d": "wi-day-sunny",
  "02d": "wi-day-cloudy",
  "03d": "wi-cloud",
  "04d": "wi-cloudy",
  "09d": "wi-showers",
  "10d": "wi-day-rain",
  "11d": "wi-day-thunderstorm",
  "13d": "wi-day-snow",
  "50d": "wi-day-fog",
  
  "01n": "wi-night-clear",
  "02n": "wi-night-alt-cloudy",
  "03n": "wi-cloud",
  "04n": "wi-cloudy",
  "09n": "wi-showers",
  "10n": "wi-night-alt-rain",
  "11n": "wi-night-alt-thunderstorm",
  "13n": "wi-night-alt-snow-wind",
  "50n": "wi-night-fog",
};


export default Meteo