import React from 'react'
import { View, Text } from 'react-native'
import { ButtonMenu } from './styles'
import {Feather} from '@expo/vector-icons'

export default function Menu() {
    return (
       
            <ButtonMenu>
                <Feather name="menu" size={40} color="#fff"/>
            </ButtonMenu>
      
    )
}
