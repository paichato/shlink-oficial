import React from 'react'
import { View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import StatusBarPage from '../../components/statusBar'

export default function Home() {
    return (
        <LinearGradient style={{flex:1,justifyContent:'center'}} colors={['#89f7fe','#66a6ff']}>
            <StatusBarPage barStyle="light-content" backgroundColor="#89f7fe"/>
            <Text>Home</Text>
        </LinearGradient>
    )
}
