import React from 'react'
import { View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

export default function Home() {
    return (
        <LinearGradient style={{flex:1,justifyContent:'center'}} colors={['#89f7fe','#66a6ff']}>
            <Text>Home</Text>
        </LinearGradient>
    )
}
