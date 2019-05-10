import React, { Component } from 'react';
import CurrentTempreture from './components/currenttempreture/CurrentTempreture';
import CurrentDetails from './components/currenttempreture/CurrentDetails';
import WeekDetails from './components/currenttempreture/WeekDetails';
import './App.css';
import axios from 'axios';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {
        currentLocation: {},
        currentDate: new Date(),
        // currentTempreture: 26,
        // currentWeatherLabel: 'Clear',
        // currentWind: 12,
        // currentHumidity: 53,
        // currentPressure: '',

      },
      // day1Weather: {
      //   day1Date: new Date(),
      //   day1Tempreture: 21,
      //   day1WeatherLabel: 'Clouds',

      // },
      // day2Weather: {
      //   day2Date: new Date(),
      //   day2Tempreture: 27,
      //   day2WeatherLabel: 'Drizzle',

      // },
      // day3Weather: {
      //   day3Date: new Date(),
      //   day3Tempreture: 24,
      //   day3WeatherLabel: 'Thunderstorm',

      // },
      // day4Weather: {
      //   day4Date: new Date(),
      //   day4Tempreture: 27,
      //   day4WeatherLabel: 'Clouds',

      // },
      persons: {
        newTest: '',
      },
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.Apicall('Matara');
  }

  Apicall(city) {
    console.log("testing"+city)
    const API_KEY = "af6e050576cc202c16e58c8d91489738"
    const Bcity = city
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + Bcity + ',LK&?&APPID=' + API_KEY + '&units=metric')
      .then(res => {
        const currentWeather = res.data;
        console.log(currentWeather, "aaaaaaaaaa")
        this.setState({

          currentLocation: currentWeather.name,           
          currentTempreture: (currentWeather.main.temp).toFixed(0),
          currentWeatherLabel: currentWeather.weather[0].main,
          currentWind: currentWeather.wind.speed,
          currentHumidity: currentWeather.main.humidity,
          currentPressure: currentWeather.main.pressure,
        });

      })

      axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + Bcity + ',LK&?&APPID=' + API_KEY + '&units=metric')
        .then(res=>{
        const day1Weather=res.data;
        const day2Weather=res.data;
        const day3Weather=res.data;
        const day4Weather=res.data;

          this.setState({

            day1Tempreture:(day1Weather.list[10].main.temp).toFixed(0),
            day1WeatherLabel:day1Weather.list[10].weather[0].main,
              
            day2Tempreture:(day2Weather.list[18].main.temp).toFixed(0),
            day2WeatherLabel:day2Weather.list[18].weather[0].main,
               
            day3Tempreture:(day3Weather.list[26].main.temp).toFixed(0),
            day3WeatherLabel:day3Weather.list[26].weather[0].main,

            day4Tempreture:(day4Weather.list[34].main.temp).toFixed(0),
            day4WeatherLabel:day4Weather.list[34].weather[0].main,

          })

      })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.Apicall(this.state.value);
    event.preventDefault();
    
  }

  render() {

    // var handleToUpdate = this.handleToUpdate;
    let { currentDate } = this.state.currentWeather;
    // let {currentLocation, currentDate, currentTempreture, currentWeatherLabel, currentWind, currentHumidity } = this.state.currentWeather;
    // let { day1Date} = this.state.day1Weather;
    // let { day2Date} = this.state.day2Weather;
    // let { day3Date} = this.state.day3Weather;
    // let { day4Date} = this.state.day4Weather;

    function getTimeofDay(currentDate) {

      if (currentDate.getHours() <= 11) {
        return 'dayMorning';
      }
      if (currentDate.getHours() <= 15) {
        return 'dayAfternoon';
      }
      if (currentDate.getHours() <= 18) {
        return 'dayEvening';
      }
      if (currentDate.getHours() > 18 && currentDate.getHours() <= 24) {
        return 'dayNight';
      }
      if (currentDate.getHours() >= 0 && currentDate.getHours() <= 5) {
        return 'dayNight';
      }

    }


    return (
      <React.Fragment>
        <div className={document.body.style.backgroundImage = getTimeofDay(currentDate)}>



          <div className="location">
            <div className="container">
              <div className={"location-set-" + getTimeofDay(currentDate)}>
                <form className="formSearch" onSubmit={this.handleSubmit}>
                  <i className="fas fa-map-marker-alt icon"></i>
                  <input value={this.state.value} type="text" className='location-p' name="city" id="address-input" placeholder="Matara" onChange={this.handleChange} list="list" />
                  <datalist id="list">
                    <option>Borella</option>
                    <option>Colombo</option>
                    <option>Kandy</option>
                    <option>Dehiwala</option>
                    <option>London</option>
                    <option>Jaffna</option>
                    <option>Rathnapura</option>
                  </datalist>
                </form>


                {/* <i className="fas fa-map-marker-alt icon"></i> */}
                {/* <p className="location-p"><span className="location-span">Matara</span>- Sri Lanka</p> */}
              </div>
            </div>
          </div>


          <CurrentTempreture location={this.state.currentLocation} date={currentDate} tempreture={this.state.currentTempreture} label={this.state.currentWeatherLabel} />
          <CurrentDetails wind={this.state.currentWind} humidity={this.state.currentHumidity} pressure={this.state.currentPressure} date={currentDate} />
          <WeekDetails date={currentDate} date1={currentDate} date2={currentDate} date3={currentDate} date4={currentDate} tempreture={this.state.currentTempreture} tempreture1={this.state.day1Tempreture} tempreture2={this.state.day2Tempreture} tempreture3={this.state.day3Tempreture} tempreture4={this.state.day4Tempreture} label={this.state.currentWeatherLabel} label1={this.state.day1WeatherLabel} label2={this.state.day2WeatherLabel} label3={this.state.day3WeatherLabel} label4={this.state.day4WeatherLabel} />
        </div>
      </React.Fragment>
    );

    // updateInputValue: function(evt) {
    //   this.setState({
    //     inputValue: evt.target.value
    //   });
    // }
  }
}

export default App;
