import * as React from 'react';

import { Calendar } from 'react-native-calendars';
import { ChevronLeftIcon, ChevronRightIcon } from "native-base";

let rotationDates = {};

const one = { key: 'one', color: '#CC0404', day: 1 };
const two = { key: 'two', color: '#CC0404', day: 2 };
const three = { key: 'three', color: '#CC0404', day: 3 };
const four = { key: 'four', color: '#CC0404', day: 4 };
const five = { key: 'five', color: '#CC0404', day: 5 };
const six = { key: 'six', color: '#CC0404', day: 6 };
const seven = { key: 'seven', color: '#CC0404', day: 7 };

export default function CalendarSelect() {  
    return (
        <Calendar
            // Initially visible month. Default = now
            selected={'2022-04-11'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2022-01-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2022-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
                console.log('selected day', day);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
                console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
                console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={direction => {
                if (direction == 'left') return <ChevronLeftIcon/>;
                if (direction == 'right') return <ChevronRightIcon/>;
            }}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={false}
            // Replace default month and year title with custom one. the function receive a date as parameter

            // renderHeader={date => {
            //     /*Return JSX*/
            // }}

            markingType={'multi-dot'}
            markedDates={{
                '2022-04-11': { dots: [six] },
                '2022-04-12': { dots: [seven] },
                '2022-04-13': { dots: [one] },
                '2022-04-14': { dots: [two] },
                '2022-04-15': { dots: [three] },
                '2022-04-16': { disabled: true }
            }}

            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}

            theme={{
                backgroundColor: '#121212',
                calendarBackground: '#121212',
                dayTextColor: '#E2E2E2',
                header: '#1F1F1F',

                textSectionTitleColor: '#E2E2E2',
                textSectionTitleDisabledColor: '#E2E2E2',
                todayTextColor: '#E2E2E2',
                dayTextColor: '#E2E2E2',
                textDisabledColor: '#d9e1e8',
                
                monthTextColor: 'white',
            }}
        />
    );
}