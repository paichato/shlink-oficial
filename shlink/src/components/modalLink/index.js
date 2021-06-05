import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Share } from 'react-native'
// import ModalContainer, { Container, Header,Title,LongUrl,LinkArea,ShortLinkArea,ShortLinkUrl } from './styles'
import {Feather} from '@expo/vector-icons'
import { Container, Header, LinkArea, LongUrl, ModalContainer, ShortLinkArea, ShortLinkUrl, Title } from './styles'
import Clipboard from 'expo-clipboard' ;  



export default function ModalLink({onCLose,data}) {

    function copyLink(){
        Clipboard.setString(`${data.link}`);
        alert('Link has been copied!')
    }

    async function handleShare(){
        try {
            const result= await Share.share({
                message: `Link: ${data.link}`
            })
            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('ActivityType')
                }else{
                    console.log('Compartilhado com sucesso');
                }
            }else if(result.action === Share.dismissedAction){
                console.log('Modal fechado');
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                    <TouchableOpacity onPress={handleShare}>
                        <Feather name="share" color="#274143" size={30}/>
                    </TouchableOpacity>

                </Header>

                <LinkArea>
                <Title>Link encurtado</Title>
                <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

                <ShortLinkArea onPress={copyLink} activeOpacity={1}>
                    <ShortLinkUrl numberOfLines={1} >{data.link}</ShortLinkUrl>
                    <TouchableOpacity onPress={copyLink}>
                        <Feather name="copy" color="#fff" size={25}/>
                    </TouchableOpacity>
                </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}
