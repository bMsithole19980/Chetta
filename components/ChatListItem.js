import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';


const ChatListItem = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.img} />
            <Pressable
            style={styles.touchable}
            onPress={()=> navigation.navigate('Chat')}>
                <View style={styles.rightContent}>
                    <View style={styles.topText}>
                        <Text style={styles.contactName}>Bongza</Text>
                        <Text style={styles.time}> 09:54</Text>

                    </View>
                    <View style={styles.bottomText}>
                        <Text numberOfLines={1} style={styles.message}>Hey , how about we jump on python project to boost our personal portfolio?</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counter}>3</Text>
                        </View>
                    </View>

                </View>
            </Pressable>


        </View>
    )
}

export default ChatListItem

const styles = StyleSheet.create({
    container: {
        height: 70,
        padding: 10,
        backgroundColor: '#',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'

    },
    img: {
        height: 48,
        width: 48,
        borderRadius: 24,
        backgroundColor: '#FFF'
    },
    touchable:{
        flex: 1
    },
    rightContent: {
        flex: 1,
        paddingVertical: 5,
        marginLeft: 10,
        justifyContent: 'space-evenly',


    },
    topText: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    contactName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E6E6E6'
    },
    time: {
        fontSize: 12,
        color: '#FFF'
    },
    bottomText: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    message: {
        color: '#CACACA',
        fontSize: 14

    },
    counterContainer: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10


    },
    counter: {
        fontSize: 12,
        color: '#26394D'

    }

})