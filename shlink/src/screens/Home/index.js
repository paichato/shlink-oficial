import React from 'react'
import { View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import StatusBarPage from '../../components/statusBar'
import Menu from '../../components/menu';
import { ContainerContent, ContainerLogo, Logo, SubTitle, Title,BoxIcon,ContainerInput,Input, ButtonLink, ButtonLinkText } from '../../components/menu/styles';
import {Feather} from '@expo/vector-icons'


export default function Home() {
    return (
        <LinearGradient style={{flex:1,justifyContent:'center'}} colors={['#243949','#517fa4']}>
            <StatusBarPage barStyle="light-content" backgroundColor="#243949"/>
            <Text>Home</Text>
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
                <Input placeholderTextColor="white" placeholder="Cole o seu link aqui..."/>
            </ContainerInput>

            <ButtonLink>
                <ButtonLinkText>
                    Generate Link
                </ButtonLinkText>
            </ButtonLink>
            </ContainerContent>

           
        </LinearGradient>
    )
}
