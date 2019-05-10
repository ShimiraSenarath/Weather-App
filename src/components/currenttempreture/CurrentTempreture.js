import React from 'react';
import { getWeatherIcon} from '../../help/help';

import './css/CurrentTempreture.css';

function getDay(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function getFormattedDate(date) {
    // var months = ['Jan', 'Feb', 'March', 'April'];
    let day = date.getDate();
    return day;
}

function getCurrentTime(date) {
    let minutes
    minutes = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return minutes
}

function getTime(date) {

    if (date.getHours() <= 15 && date.getHours() > 6) 
    {
        return 'morning';
    } 
    if(date.getHours() > 15 && date.getHours() <= 24) {
        return 'night';
    }
    if(date.getHours() >= 0 && date.getHours() < 6) {
        return 'night';
    }

}

function getTimeofDay(date) {

    if (date.getHours() < 17 && date.getHours() >= 6) 
    {
        return 'day';
    } 
    if(date.getHours() >= 17  && date.getHours() < 24) {
        return 'night';
    }
    if(date.getHours() >=0  && date.getHours() < 6) {
        return 'night';
    }

}

function getWeatherCondition(condition, timeofDay) {

    var weatherCondition;

    switch (condition) {
        case "Clear":
            if (timeofDay == 'day') {
                weatherCondition = "sunny";
            } else {
                weatherCondition = "clear";
            }
            break;
            case "Clouds":
            weatherCondition = "cloudy";
            break;
        case "Rain":
            weatherCondition = "rain";
            break;
        case "Drizzle":
            weatherCondition = "showers";
            break;
        case "Thunderstorm":
            weatherCondition = "thunderstorm";
            break;
        case "Snow":
            weatherCondition = "snow";
            break;
        case "Fog":
            weatherCondition = "fog";
            break;
        
    }

    console.log(condition)
    return weatherCondition;

}

 function getDayIcon(date, weatherCondition) {

    var timeofDay = getTimeofDay(date);
    var condition = getWeatherCondition(weatherCondition, timeofDay);
    console.log(timeofDay)
    if(timeofDay === 'day'){
        
        return timeofDay + '-' + condition + ' saturn';
    }
    if(timeofDay === 'night'){
        // console.log(timeofDay + '-' + condition + ' night','time****')
        return timeofDay + '-' + condition + ' night';
    }
    

}

export default function CurrentTempreture(props) {
    return (
        <React.Fragment>
            <div className="time">
            <i className={"wi wi-" + getDayIcon(props.date, props.label)}></i>
            {/* <img className="saturn" src="./sun.png" alt="logo"/> */}
                <div className="container">
                    <div className="row">
                    {/* <div class="a"> */}
                    {/* <img class="saturn" src="sun.png" alt="logo"/> */}
                    
                        <div className="col-2 sunrise">
                            <i className="wi wi-sunrise"></i>
                            <p className="today-time sunrise-time">6.00 A.M.</p>
                        </div>
                        <div className="col-8 today">
                            <div className="today-detail">
                                <div className={"today-img-" + getTime(props.date)}>
                                    <i className={"wi wi-" + getWeatherIcon(props.date, props.label)}></i>

                                </div>
                                <div className={"today-status-" + getTime(props.date)}>
                                    <p className="day">{props.label}</p>
                                </div>

                            </div>
                            <div className="today-details">
                                <p className={"today-day-" + getTime(props.date)}>{getDay(props.date)} {getFormattedDate(props.date)}</p>
                                <p className={"today-time-" + getTime(props.date)}>{getCurrentTime(props.date)}</p>
                                <p className={"today-c-" + getTime(props.date)}>{props.tempreture}°C</p>
                            </div>

                        </div>
                        <div className="col-2 sunset">
                            <i className="wi wi-sunset"></i>
                            <p className="today-time sunrise-time">6.00 P.M.</p>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </React.Fragment>


    );
}