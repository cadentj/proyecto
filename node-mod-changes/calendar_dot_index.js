//C:\Users\caden\Programming\proyecto\node_modules\react-native-calendars\src\calendar\day\dot\index.js

import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import styleConstructor from './style';
const Dot = ({ theme, marked, disabled, inactive, color, today, selected, day }) => {
    if(day != undefined) {
        console.log(day);
    }
    const style = useRef(styleConstructor(theme));
    const dotStyle = [style.current.dot];
    if (marked) {
        dotStyle.push(style.current.visibleDot);
        if (today) {
            dotStyle.push(style.current.todayDot);
        }
        if (disabled) {
            dotStyle.push(style.current.disabledDot);
        }
        if (inactive) {
            dotStyle.push(style.current.inactiveDot);
        }
        if (selected) {
            dotStyle.push(style.current.selectedDot);
        }
        if (color) {
            dotStyle.push({ backgroundColor: color });
        }
    }
    return <View style={dotStyle}><Text>{day}</Text></View>;
};
export default Dot;
Dot.propTypes = {
    theme: PropTypes.object,
    color: PropTypes.string,
    marked: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    inactive: PropTypes.bool,
    today: PropTypes.bool,
    day: PropTypes.number,
};
