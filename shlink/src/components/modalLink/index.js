import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
// import ModalContainer, { Container, Header,Title,LongUrl,LinkArea,ShortLinkArea,ShortLinkUrl } from './styles'
import {Feather} from '@expo/vector-icons'
import { Container, Header, LinkArea, LongUrl, ModalContainer, ShortLinkArea, ShortLinkUrl, Title } from './styles'
             



export default function ModalLink({onCLose}) {
    return (
        <ModalContainer>
            <TouchableWithoutFeedback onPress={onCLose}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>
            
            <Container>
                <Header>
                    <TouchableOpacity onPress={onCLose}>
                        <Feather name="x" color="#274143" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="share" color="#274143" size={30}/>
                    </TouchableOpacity>

                </Header>

                <LinkArea>
                <Title>Link encurtado</Title>
                <LongUrl numberOfLines={1}>https://ustro.co.mz</LongUrl>

                <ShortLinkArea activeOpacity={1}>
                    <ShortLinkUrl numberOfLines={1} >https://bit.ly/abc</ShortLinkUrl>
                    <TouchableOpacity>
                        <Feather name="copy" color="#fff" size={25}/>
                    </TouchableOpacity>
                </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}
