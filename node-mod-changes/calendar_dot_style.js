//C:\Users\caden\Programming\proyecto\node_modules\react-native-calendars\src\calendar\day\dot\style.js

import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../../style';
export default function styleConstructor(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        dot: {
            width: 15,
            height: 15,
            marginTop: -6,
            marginHorizontal: 1,
            marginRight: -20,
            borderRadius: 16,
            paddingLeft: 3,
            opacity: 0,
            ...appStyle.dotStyle
        },
        visibleDot: {
            opacity: 1,
            backgroundColor: appStyle.dotColor
        },
        selectedDot: {
            backgroundColor: appStyle.selectedDotColor
        },
        disabledDot: {
            backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
        },
        inactiveDot: {
            backgroundColor: appStyle.inactiveDotColor || appStyle.dotColor
        },
        todayDot: {
            backgroundColor: appStyle.todayDotColor || appStyle.dotColor
        },
        // @ts-expect-error
        ...(theme['stylesheet.dot'] || {})
    });
}
