import { Pressable, StyleSheet, Image, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmojiPicker, { EmojiKeyboard } from 'rn-emoji-keyboard'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { EvilIcons , MaterialIcons } from '@expo/vector-icons';

const KeyboardComponent = ({isBoardVisible, handleGif, handleEmoji}) => {
    const [emoji, setEmoji] = useState('');
    const [showEmBoard, setShowEmoBoard] = useState(false);
    const [gifs, setGifs] = useState([]);
    const [showGifBoard, setShowGifBoard] = useState(true);
    const [showSearchInput, setShowSearchInput] = useState(false);
    // const [selectedGif, setSelectedGif]= useState('');
    const [query, setQuery]= useState('');


    const capturedEmoji = (event) => {
        console.log(event);
        setEmoji(event.emoji)
    }
    // console.log(selectedGif);

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=OuDQBT1p49n7eci2i8V9DvZM4uqPjhWZ')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setGifs(res.data)
            })
    }, [])

    useEffect(() => {
        fetch ('https://api.giphy.com/v1/gifs/search?api_key=OuDQBT1p49n7eci2i8V9DvZM4uqPjhWZ&q='+query)
        .then(res => res.json())
        .then(res => {
            setGifs(res.data)

        })

    },[query])


    return (
        <>
           {
            isBoardVisible &&(
                <View style={styles.container}>
                {
                    showEmBoard && (
                        <EmojiKeyboard
                            onEmojiSelected={handleEmoji}
                            enableSearchBar
                            styles={{
                                container: {
                                    borderRadius: 0
                                }
                            }} />
                    )
                }
                {
                    showGifBoard && (
                        <FlatList
                            data={gifs}
                            numColumns={3}
                            renderItem={(item) => (
                                <View style={styles.gifContainer}>
                                    <Pressable
                                        onPress={() => handleGif(item.item.images.original.url)}>
                                        <Image
                                            source={{ uri: item.item.images.original.url }}
                                            style={styles.gif} />
                                    </Pressable>
                                </View>
    
                            )} />
    
                    )
                }
    
    
                {
                    !showSearchInput ? (
                        <View style={styles.keyboadToggle}>
                            <View style={styles.searchIcon}>
                                <Pressable onPress={() => { setShowSearchInput(true) }}>
                                    <MaterialIcons name='search' size={24} color={'white'} style={[styles.icon]} />
                                </Pressable>
                            </View>
    
                            <Pressable onPress={() => { setShowEmoBoard(true); setShowGifBoard(false) }}>
                                <MaterialIcons name='emoji-emotions' size={24} color={'white'} style={styles.icon} />
                            </Pressable>
                            <Pressable onPress={() => { setShowEmoBoard(false); setShowGifBoard(true) }}>
                                <MaterialIcons name='gif' size={24} color={'white'} style={styles.icon} />
                            </Pressable>
    
                        </View>
    
                    ) : (
                        <View style={styles.keyboadToggle}>
                            <TextInput placeholder='Search emoji' style={styles.input} onChangeText={(text) => setQuery(text)}/>
                            <View style={styles.closeIcon}>
                                <Pressable onPress={() => setShowSearchInput(false)}>
                                    <EvilIcons name='close' size={24} color="rgb(230, 230, 230" />
    
                                </Pressable>
    
                            </View>
    
                        </View>
                    )
                }
    
    
            </View>

            )
           }
        </>

    )
}

export default KeyboardComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '40%'
    },
    keyboadToggle: {
        height: 50,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'


    },
    searchIcon: {
        position: 'absolute',
        left: 5
    },
    icon: {
        margin: 10
    },
    gifContainer: {
        height: 110,
        padding: 5,
        width: '30%'
    },
    gif: {
        height: 100,
        width: (Dimensions.get('window').width - 30) / 3
    },
    input: {
        height: 46,
        width: '100%',
        backgroundColor: 'rgba(50, 50, 50, 0.1)',
        padding: 10,
        color: 'rgb(20)'

    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        top: 10

    }

})