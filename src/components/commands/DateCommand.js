import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';
import FancyButton from '../FancyButton';
import "./Commands.css"

//A datepicker wich displays at the beginning the date which was sent by the server

function DateCommand({date}) {

    const year=date.substring(0, 4);
    const month= date.substring(5,7);
    const day= date.substring(8,10);
    

    const [value, onChange] = useState(new Date(year, month-1, day));


    return (
        <div id="App">

            <div id="form">
                <div id="form-inner">
                    <h2>Please choose a date:</h2>
                    
                    <div >
                        <DatePicker
                        onChange={onChange}
                        value={value}
                        />
                    </div>
                    <div id="form-group">
                    <Link to="/">
                        <FancyButton Text="Go back to Login"/>
                    </Link>
              </div>

                </div>
            </div>
            

        </div>
    )
}

export default DateCommand
