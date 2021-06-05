import React from 'react'
import { View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import StatusBarPage from '../../components/statusBar'
import Menu from '../../components/menu';
import { ContainerContent, ContainerLogo, Logo, SubTitle, Title } from '../../components/menu/styles';

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
            </ContainerContent>
        </LinearGradient>
    )
}
