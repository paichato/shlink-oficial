import React from 'react'
import { View, Text } from 'react-native'
import { Container, Message, OkButton, OkText } from './styles'
import {Feather} from '@expo/vector-icons'

export default function ModalError({errorMessage, onCLose}) {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
        <Container>
            
            <Feather name="info" color="#172742" size={75}/>
            <Message>
                {errorMessage}
            </Message>
            <OkButton onPress={onCLose}>
                <OkText>
                    Ok
                </OkText>
            </OkButton>
        </Container>
        </View>
    )
}
