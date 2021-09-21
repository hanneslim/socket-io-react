import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import "./Commands.css"

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

                </div>
            </div>
            

        </div>
    )
}

export default DateCommand
