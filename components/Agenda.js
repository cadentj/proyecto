import * as React from 'react';
import { Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Event from './AgendaSchedule/AgendaEvent';
import AgendaDate from './AgendaSchedule/AgendaDate';
import { Box, ChevronDownIcon, ChevronUpIcon, Divider } from "native-base";

import Data from './data/ScheduleData.json';

const one = { key: 'one', color: '#CC0404', day: 1 };
const two = { key: 'two', color: '#CC0404', day: 2 };
const three = { key: 'three', color: '#CC0404', day: 3 };
const four = { key: 'four', color: '#CC0404', day: 4 };
const five = { key: 'five', color: '#CC0404', day: 5 };
const six = { key: 'six', color: '#CC0404', day: 6 };
const seven = { key: 'seven', color: '#CC0404', day: 7 };

let rotationDates = {};

function updateAgendaDates() {
    const dat = Data;

    for (let i in dat) {
        let day = dat[i];
        if (day == "one") {
            rotationDates[i] = { dots: [one] }
        } else if (day == "two") {
            rotationDates[i] = { dots: [two] }
        } else if (day == "three") {
            rotationDates[i] = { dots: [three] }
        } else if (day == "four") {
            rotationDates[i] = { dots: [four] }
        } else if (day == "five") {
            rotationDates[i] = { dots: [five] }
        } else if (day == "six") {
            rotationDates[i] = { dots: [six] }
        } else if (day == "seven") {
            rotationDates[i] = { dots: [seven] }
        }
    }
}

let agendaItems = {}
function createAgendaItems() {
    const dat = Data;

    for (let i in dat) {
        let day = dat[i];
        if (day == "one") {
            agendaItems[i] = [{ name: "one" }]
        } else if (day == "two") {
            agendaItems[i] = [{ name: "two" }]
        } else if (day == "three") {
            agendaItems[i] = [{ name: "three" }]
        } else if (day == "four") {
            agendaItems[i] = [{ name: "four" }]
        } else if (day == "five") {
            agendaItems[i] = [{ name: "five" }]
        } else if (day == "six") {
            agendaItems[i] = [{ name: "six" }]
        } else if (day == "seven") {
            agendaItems[i] = [{ name: "seven" }]
        } else if (day == "") {
            agendaItems[i] = []
        }
    }
}

function getTodayDate() {
    const date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1; //months are zero-based

    return [date.getFullYear(),
    (month > 9 ? '' : '0') + month,
    (day > 9 ? '' : '0') + day
    ].join('-');

}


export default function AgendaComponent() {

    let isOpened = false;

    updateAgendaDates();
    createAgendaItems();

    console.log(agendaItems);

    const todayString = getTodayDate();

    return (
        <Agenda
            // The list of items that have to be displayed in agenda. If you want to render item as empty date
            // the value of date key has to be an empty array []. If there exists no value for date key it is
            // considered that the date in question is not yet loaded
            items={
                agendaItems

            }
            // Callback that gets called when items for a certain month should be loaded (month became visible)
            loadItemsForMonth={month => {
                console.log('trigger items loading');
            }}
            // Callback that fires when the calendar is opened or closed
            onCalendarToggled={calendarOpened => {
                console.log(calendarOpened);
                isOpened = calendarOpened;
            }}
            // Callback that gets called on day press
            onDayPress={day => {
                console.log('day pressed');
            }}
            // Callback that gets called when day changes while scrolling agenda list
            onDayChange={day => {
                console.log(day);
            }}
            // Initially selected day
            selected={todayString}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2022-01-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2022-05-30'}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={2}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={2}
            // Specify how each item should be rendered in agenda
            renderItem={(item, firstItemInDay) => {
                return <Event name={item.name} isFirst={firstItemInDay}/>;
            }}
            // Specify how each date should be rendered. day can be undefined if the item is not first in that day
            renderDay={(day, item) => {
                const d = day.toString("dd");
                return <AgendaDate day={d} />;
            }}
            // Specify how empty date content with no items should be rendered
            renderEmptyDate={() => {
                return <View></View>;
            }}
            // Specify how agenda knob should look like
            renderKnob={() => {
                return isOpened ? <ChevronUpIcon size="6" /> : <ChevronDownIcon size="6" />;
            }}
            // Specify what should be rendered instead of ActivityIndicator

            renderEmptyData={() => {
                return <Box style={{ bg: "red.500", h: 200 }}><Text>"HELLO"</Text></Box>;
            }}
            // Specify your item comparison function for increased performance
            rowHasChanged={(r1, r2) => {
                return r1.text !== r2.text;
            }}
            // Hide knob button. Default = false
            hideKnob={false}
            // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
            showClosingKnob={true}
            // By default, agenda dates are marked if they have at least one item, but you can override this if needed



            markingType={'multi-dot'}


            markedDates={
                rotationDates
            }
            // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
            disabledByDefault={false}
            // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
            onRefresh={() => console.log('refreshing...')}
            // Set this true while waiting for new data from a refresh
            refreshing={false}
            // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
            refreshControl={null}
            // Agenda theme
            theme={{
                backgroundColor: '#121212',
                calendarBackground: '#121212',
                dayTextColor: '#E2E2E2',
                header: '#1F1F1F',

                textSectionTitleColor: '#E2E2E2',
                textSectionTitleDisabledColor: '#E2E2E2',
                todayTextColor: '#E2E2E2',
                textDayFontSize: 13,
                dayTextColor: '#E2E2E2',
                textDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: "#FF0000",

                monthTextColor: 'white',
            }}
            // Agenda container style
            style={{}}
        />
    );
}