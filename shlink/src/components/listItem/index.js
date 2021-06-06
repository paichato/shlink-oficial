import React from 'react'
import { View, Text } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { ActionContainer, ContainerButton, ItemLink } from './styles'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem({data,selectedItem,deleteItem}) {
    
    function rightAction(){
        return (
            <ActionContainer onPress={()=>deleteItem(data.id)}>
                <Feather name="trash" color="white" size={24} />
            </ActionContainer>
        )
    }

   
    return (
        <View>
            <Swipeable renderRightActions={rightAction} >
                <ContainerButton activeOpacity={0.9} onPress={()=> selectedItem(data)} >
                    <Feather name="link" color="#fff" size={24}/>
                    <ItemLink numberOfLines={1} >{data.long_url}</ItemLink>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}
