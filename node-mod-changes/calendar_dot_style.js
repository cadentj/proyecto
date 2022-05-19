//C:\Users\caden\Programming\proyecto\node_modules\react-native-calendars\src\calendar\day\dot\style.js

import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../../style';
export default function styleConstructor(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        dot: {
            width: 17,
            height: 17,
            marginTop: 0,
            marginRight: -25,
            borderRadius: 16,
            paddingLeft: 4.5,
            paddingTop:1.5,
            opacity: 0,
            textDecorationColor: "#FFFFFF",
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
