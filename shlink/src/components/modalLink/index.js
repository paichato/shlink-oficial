import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ModalContainer, { Container, Header } from './styles'
import {Feather} from '@expo/vector-icons'


export default function ModalLink() {
    return (
        <ModalContainer>
            <Container>
                <Header>
                    <TouchableOpacity>
                        <Feather name="x" color="#274143" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="share" color="#274143" size={30}/>
                    </TouchableOpacity>

                </Header>
            </Container>
        </ModalContainer>
    )
}
