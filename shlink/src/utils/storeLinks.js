import AsyncStorage from '@react-native-async-storage/async-storage'

export async function geLinksSaved(key){
    const myLinks= await AsyncStorage.getAllKeys(key);

    let linksaveds=JSOn.parse(myLinks) || [] ;

    return linksaveds;
}


export async function saveLink(key,newLink){

    let linksStored= await getLinksSaved(key);

    const hasLink = linksStored.some(link=>link.id === newLink.id);

    if(hasLink){
        console.log('Link ja existe na lista');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem( key,JSON.stringify(linksStored));

}

export async function deleteLink(links,id){

}
