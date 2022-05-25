
import React,{useState} from 'react';
import DateFnsUtils from '@date-io/date-fns'
import { DateTimePicker,MuiPickersUtilsProvider  } from "@material-ui/pickers";


export default function Calendar(){

    const [selectedDate, handleDateChange] = useState(new Date());

    return (

    <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                label='DateTimePicker'
                value={selectedDate}
                onChange={handleDateChange}
            />

            <DateTimePicker
                autoOk
                ampm={false}
                value={selectedDate}
                onChange={handleDateChange}
                label="24h clock"
            />
            <DateTimePicker
                value={selectedDate}
                disablePast
                onChange={handleDateChange}
                label="With Today Button"
                showTodayButton
            />

        </MuiPickersUtilsProvider>

    </div>
    )
}