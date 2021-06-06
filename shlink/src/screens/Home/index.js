import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, Modal, ActivityIndicator } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import StatusBarPage from '../../components/statusBar'
import Menu from '../../components/menu';
import { ContainerContent, ContainerLogo, Logo, SubTitle, Title,BoxIcon,ContainerInput,Input, ButtonLink, ButtonLinkText } from '../../components/menu/styles';
import {Feather} from '@expo/vector-icons'
import ModalLink from '../../components/modalLink';
import api from '../../services/api'
import ModalError from '../../components/modalError';


export default function Home() {

    const [url,setUrl]=useState('');
    // const [modalVisible,setModalVisible]=useState(false);
    const [modalVisible,setModalVisible]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const [isError,setIsError]=useState(false);
    const [isLoading,setIsLoading]=useState(false);
    const [data,setData]=useState({});

    async function handleShortLink(){

        setIsLoading(true);

        try {
            const response= await api.post('/shorten',{
                long_url: url
            })

            console.log(response.data);
            setData(response.data);
            setIsLoading(false);
            setModalVisible(true);
            setUrl('');

        } catch (error) {
            // console.log(error.response.data.description);
            // alert('Something wrong');
            setIsLoading(false);
            setIsError(true);
            Keyboard.dismiss();
            setErrorMessage(error.response.data.description);
            setUrl('');
            
            
        }
        // return <Text>Hello</Text>
    //    setModalVisible(true);
    }

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss() }>
  
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
                    <Input value={url} onChangeText={(txt)=>setUrl(txt)} autoCapitalize="none" autoCorrect={false} keyboardType="url" placeholderTextColor="white" placeholder="Paste your link here..."/>
                </ContainerInput>

                <ButtonLink onPress={handleShortLink} >
                    {
                        isLoading ? <ActivityIndicator color="black" size="large"/>
                        :
                        <ButtonLinkText>
                        Generate Link
                        </ButtonLinkText>
                    }
                    
                </ButtonLink>
                </ContainerContent>
               
                <Modal visible={modalVisible} transparent onRequestClose={()=>setModalVisible(!modalVisible)}  animationType="slide"  >
                    <ModalLink data={data} onCLose={()=>{setModalVisible(!modalVisible)}} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </Modal>
                <Modal  visible={isError} transparent onRequestClose={()=>setIsError(!isError)}   animationType="slide"  >
                    <ModalError errorMessage={errorMessage} onCLose={()=>{setIsError(!isError)}}  />
                </Modal>
            </LinearGradient>
           
            </TouchableWithoutFeedback>
            </>
    )
}
