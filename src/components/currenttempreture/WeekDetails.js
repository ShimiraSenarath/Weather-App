import React from 'react';
import { getWeatherIcon} from '../../help/help';

function getDay(date){
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
// function getFormattedDate(date){
//     // var months = ['Jan', 'Feb', 'March', 'April'];
//     let day = date.getDate();
//     return day[date.getMonth()];
// }
function getNextDay(date){
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // return days[date.getDay()+1];
    var CurrentDay = days[date.getDay()];
    var index = days.indexOf(CurrentDay);
    var count = index+1;
    if( count <= 6){
        return days[date.getDay()+1];
    }
    if(count == 7){
        return days[date.getDay()-6];
    }
}
function getNext2Day(date){
    var days = ['0Sun', '1Mon', '2Tue', '3Wed', '4Thu', '5Fri','6Sat'];
    // return days[date.getDay()+2];
    var CurrentDay = days[date.getDay()];
    var index = days.indexOf(CurrentDay);
    var count = index;
    if( count <= 4){
        return days[date.getDay()+2];
    }
    if(count == 5){
        return days[date.getDay()-5];
    }
    if(count == 6){
        return days[date.getDay()-6];
    }
}
function getNext3Day(date){
    var days = ['0Sun', '1Mon', '2Tue', '3Wed', '4Thu', '5Fri','6sat'];
    var CurrentDay = days[date.getDay()];
    var index = days.indexOf(CurrentDay);
    var count = index;
    var x;
    if( count <= 3){
        return days[date.getDay()+3];
    }
    if(count == 4){
        console.log(count);
        x = days[0];
        return x;
        // return days[date.getDay()-7];
    }
    if(count == 5){
        x = days[1];
        return x;
    }
    if(count == 6){
        x = days[2];
        return x;
    }
}
function getNext4Day(date){
    var days = ['0Sun', '1Mon', '2Tue', '3Wed', '4Thu', '5Fri','*6sat'];
    var CurrentDay = days[date.getDay()];
    var index = days.indexOf(CurrentDay);
    var count = index;
    var x;
    if( count <= 2){
        return days[date.getDay()+4];
    }
    if(count == 3){
        // console.log(count);
        x = days[0];
        return x;
        // return days[date.getDay()-7];
    }
    if(count == 4){
        x = days[1];
        return x;
    }
    if(count == 5){
        x = days[2];
        return x;
    }
    if(count == 6){
        x = days[3];
        return x;
    }
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

export default function WeekDetails (props){
    return(
        <React.Fragment>
            <div className="footer">
                <div className="container footer-dates">
                    <div className="row footer-dates-row">
                            
                            <div className={"col-"+ getTime(props.date)+" col-border active-" + getTime(props.date)}>
                                <p className="col-date">{getDay(props.date)}</p>
                                <p className="col-temp">{props.tempreture}°C</p>
                                {/* <i className="wi wi-day-sunny"></i> */}
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label)}></i>
                            </div>
                        
                            <div className={"col-"+ getTime(props.date)+" "+ "col-border"}>
                                <p className="col-date">{getNextDay(props.date1)}</p>
                                <p className="col-temp">{props.tempreture1}°C</p>
                                {/* <i className="wi wi-day-cloudy"></i> */}
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label1)}></i>
                            </div>
                        
                            <div className={"col-"+ getTime(props.date)+" "+ "col-border"}>
                                <p className="col-date">{getNext2Day(props.date2)}</p>
                                <p className="col-temp">{props.tempreture2}°C</p>
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label2)}></i>
                            </div>
                        
                            <div className={"col-"+ getTime(props.date)+" "+ "col-border"}>
                                <p className="col-date">{getNext3Day(props.date)}</p>
                                <p className="col-temp">{props.tempreture3}°C</p>
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label3)}></i>
                            </div>
                            <div className={"col-"+ getTime(props.date)+" "+ "col-border"}>
                                <p className="col-date">{getNext4Day(props.date)}</p>
                                <p className="col-temp">{props.tempreture4}°C</p>
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.label4 )}></i>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
           
        
    );
}