// import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinksSaved(key){
  
        const myLinks= await AsyncStorage.getItem(key);

        let linksaveds=JSON.parse(myLinks) || [] ;
    
        return linksaveds;

 
   
}


export async function saveLink(key,newLink){
try {
    let linksStored= await getLinksSaved(key);

    const hasLink = linksStored.some(link=>link.id === newLink.id);

    if(hasLink){
        console.log('Link ja existe na lista');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem( key,JSON.stringify(linksStored));
    console.log('sucesso');
} catch (error) {
    console.log(error);
}
    

}

export async function deleteLink(links,id){

    let myLinks=links.filter((item)=>{
        return (item.id !== id)
    })
    await AsyncStorage.setItem('@shLinks',JSON.stringify(myLinks));
    console.log('link deletado');

    return myLinks;
}
