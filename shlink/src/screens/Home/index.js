import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import StatusBarPage from '../../components/statusBar'
import Menu from '../../components/menu';
import { ContainerContent, ContainerLogo, Logo, SubTitle, Title,BoxIcon,ContainerInput,Input, ButtonLink, ButtonLinkText } from '../../components/menu/styles';
import {Feather} from '@expo/vector-icons'
import ModalLink from '../../components/modalLink';


export default function Home() {

    const [url,setUrl]=useState('');
    // const [modalVisible,setModalVisible]=useState(false);
    const [modalVisible,setModalVisible]=useState(false);

    function handleShortLink(){
        // return <Text>Hello</Text>
       setModalVisible(true);
    }

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
  
        <LinearGradient style={{flex:1,justifyContent:'center'}} colors={['#243949','#517fa4']}>
                <StatusBarPage barStyle="light-content" backgroundColor="#243949"/>
            
                <Menu/>
                <ContainerLogo>
                    <Logo source={require('../../assets/shLink-logo.png')}/>
                </ContainerLogo>

                <ContainerContent>
                    <Title>Sh Link</Title>
                    <SubTitle>Paste your link to shorten</SubTitle>

                    <ContainerInput>
                    <BoxIcon>
                    <Feather name="link" size={22} color="#fff"/>
                    </BoxIcon>
                    <Input value={url} onChangeText={(txt)=>setUrl(txt)} autoCapitalize="none" autoCorrect={false} keyboardType="url" placeholderTextColor="white" placeholder="Cole o seu link aqui..."/>
                </ContainerInput>

                <ButtonLink onPress={handleShortLink} >
                    <ButtonLinkText>
                        Generate Link
                    </ButtonLinkText>
                </ButtonLink>
                </ContainerContent>
               
                <Modal visible={modalVisible} onRequestClose={()=>setModalVisible(!modalVisible)}  animationType="slide"  >
                    <ModalLink/>
                </Modal>
            </LinearGradient>
           
            </TouchableWithoutFeedback>
            </>
    )
}
