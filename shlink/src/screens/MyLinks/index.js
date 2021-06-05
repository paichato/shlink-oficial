import React from 'react'
import { View, Text } from 'react-native'
import StatusBarPage from '../../components/statusBar'
import {Container,Title,ListLinks} from './styles'
import Menu from '../../components/menu'
import ListItem from '../../components/listItem'

export default function MyLinks() {
    return (
        <Container>
            <StatusBarPage barStyle="light-content" backgroundColor="#172742"/>
            <Menu/>
            <Title>My Links</Title>
            <ListLinks data={[{id:1,link:'test.com'}]} 
            keyExtractor={(item)=> String(item.id)}
            renderItem={({item})=><ListItem data={item}/>}
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}
