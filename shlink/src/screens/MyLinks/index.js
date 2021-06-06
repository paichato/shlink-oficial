import React, { useEffect, useState } from 'react'
import { View, Text, Modal } from 'react-native'
import StatusBarPage from '../../components/statusBar'
import {Container,Title,ListLinks} from './styles'
import Menu from '../../components/menu'
import ListItem from '../../components/listItem'
import {useIsFocused} from '@react-navigation/native';
import {getLinksSaved} from '../../utils/storeLinks'
import ModalLink from '../../components/modalLink'

export default function MyLinks() {

    const isFocused=useIsFocused();

    const [links,setLinks]=useState([]);
    const [data,setData]=useState({});
    const [modalVisible,setModalVisible]=useState(false);


    useEffect(()=>{
        async function getLinks(){
            const result= await getLinksSaved('@shLinks');
            setLinks(result);
            console.log(result);
        }
        getLinks();
    },[isFocused])

    function handleItem(item){
        setData(item);
        setModalVisible(true);
        console.log(item);
    }

    return (
        <Container>
            <StatusBarPage barStyle="light-content" backgroundColor="#172742"/>
            <Menu/>
            <Title>My Links</Title>
            <ListLinks data={links} 
            keyExtractor={(item)=> String(item.id)}
            renderItem={({item})=><ListItem selectedItem={handleItem} data={item}/>}
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
            />

<Modal visible={modalVisible} transparent onRequestClose={()=>setModalVisible(!modalVisible)}  animationType="slide"  >
                    <ModalLink data={data} onCLose={()=>{setModalVisible(!modalVisible)}} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </Modal>
        </Container>
    )
}
