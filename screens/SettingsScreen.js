import * as React from 'react';
import { Text, View } from 'react-native';

import CardView from '../components/Announcements.js/AnnouncementsList';

export default function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CardView/>
        </View>
    );
}