import { useIsFocused } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'

export default function StatusBarPage(props) {

    const isFocused= useIsFocused();


    return isFocused ? <StatusBarPage {...props} /> : null
}
