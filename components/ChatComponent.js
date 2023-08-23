import { FlatList, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function ChatComponent() {
    const userID = 'bongza1234';

    const renderItem=({item , index})=>{
       //console.log(par);
       return(    
         <View >
           <View style={[
            styles.contentHolder,
            item.userID === userID ? styles.rightContent: styles.leftContent,
            texts[index - 1]?.userID === item.userID ? { marginBottom: -5 } : null
            ]}>
             <View style={[
               styles.textBox,
               item.userID === userID ? styles.rightText : styles.leftText,
               texts[index - 1]?.userID === item.userID ? { borderRadius: 15 } : null]}
             >
               <Text style={styles.text}>{item.text}</Text>
             </View>
             <View style={styles.timeSent}>
              <Text style={styles.whiteText}>1:36 AM</Text>
              {
                 item.userID === userID && (<>
                   <Entypo name='dot-single' color={'#FFF'} size={16} />
                   <Text style={styles.whiteText}>Sent</Text>
                 </>)
              }
             
             </View>
           </View>

         </View>
       )
    }

    const texts =[
        {
        text : 'Hi there' , userID: userID
        },
        {
        text : 'Hello Buddy , How  are you?' , userID: 'asdfg321654'
        },
        {
        text : 'Good and yourself?, why were you absent today?' , userID: userID
        },
        {
        text : 'Ke Xap , i was sick today' , userID: 'asdfg321654'
        },
        {
        text : 'Cool hope you catched up  , with react Native' , userID: userID
        },
        {
        text : 'Did you finish all the tutorials' , userID: userID
        },
        {
        text : 'I have an idea lets just into social media app' , userID: userID
        },
        {
        text : 'Ok buddy i am done with all the tutorials' , userID: 'asdfg321654'
        },
        {
        text : 'I was also thinking that we develop a clone of facebook or whatsapp to boost our profile' , userID: 'asdfg321654'
        },
        {
        text : 'The most interesting is that we will use it to utilize in getting more skilss from the seniors Developer' , userID: 'asdfg321654'
        },
        {
        text : 'Ke Xap , i was sick today' , userID: 'asdfg321654'
        },
        {
        text : 'Ke Xap , i was sick today' , userID: 'asdfg321654'
        }

        ]
  return (
    <View style={styles.container}>
      <FlatList
      data={texts}
      renderItem={renderItem}
      contentContainerStyle={{flexDirection: 'column-reverse'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    overflow: 'hidden'
  },
  contentHolder:{
    width: 280,
    marginVertical: 10
  },
  rightContent:{
    alignSelf: 'flex-end',

  },
  leftContent:{

  },
  text:{
    color: '#EBEBEB',
    fontSize: 15
  },
  textBox:{
    padding: 10,
    width: 280,
    //margin: 10
  },
  rightText:{
    borderRadius: 15,
    borderBottomRightRadius: 0,
    backgroundColor: '#3F5973',
     alignSelf: 'flex-end'
  },
  leftText:{
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    backgroundColor: '#1EA0E5'

  },
  timeSent:{
  flexDirection: 'row',
  alignSelf: 'flex-end'
  },
  whiteText:{
    color: '#E4E4E4',
    fontSize: 12
  }
})