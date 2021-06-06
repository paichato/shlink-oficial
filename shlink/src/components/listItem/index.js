import React from 'react'
import { View, Text } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { ContainerButton, ItemLink } from './styles'

export default function ListItem({data,selectedItem}) {
    return (
        <View>
            <ContainerButton activeOpacity={0.9} onPress={()=> selectedItem(data)} >
                <Feather name="link" color="#fff" size={24}/>
                <ItemLink numberOfLines={1} >{data.long_url}</ItemLink>
            </ContainerButton>
    
        </View>
    )
}
