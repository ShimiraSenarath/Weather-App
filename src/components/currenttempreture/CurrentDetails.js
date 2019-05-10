import React from 'react';

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

export default function CurrentDetails (props){
    return(
        <React.Fragment>
            <div className={"details-" + getTime(props.date)}>
                <div className="container">
                    <div className="row">
                        <div className="col-4 details-humidity">
                            <p>{props.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                        <div className="col-4 details-air-quality">
                            <p>{props.pressure}Pa</p>
                            <p>Air pressure</p>
                        </div>
                        <div className="col-4 details-wind">
                            <p>{props.wind}m/s</p>
                            <p>wind</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
           
        
    );
}