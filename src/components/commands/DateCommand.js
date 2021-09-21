import React, { useState } from 'react'
import DatePicker from 'react-date-picker';

function DateCommand({date}) {

    const year=date.substring(0, 4);

    const month= date.substring(5,7);

    const day= date.substring(8,10);
    

    const [value, onChange] = useState(new Date(year, month-1, day));


    return (
        <div>
            <div>
                <h2>Please choose a date:</h2>
            </div>
            <div>
                <DatePicker
                onChange={onChange}
                value={value}
                />
            </div>

        </div>
    )
}

export default DateCommand
