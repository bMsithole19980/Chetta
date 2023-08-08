import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, Pressable} from 'react-native'


export default function HomeScreen() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [books, setBooks] = useState(['Black root Science', 'The secret']);
 
    
    const addBook=(title)=>{
        setBooks(books=>{
            return[...books, title.trim()]
        })

    }
    const clearState=()=>{
        setName(''),
        setAge(0),
        setBooks(['Black root Science', 'The secret'])
    }

    const removeBook=(index)=>{
        if (books[index]) {
            const newBooks =[...books];
            newBooks.splice(index, 1)
            setBooks(newBooks)
            
        }
    }
    useEffect(()=>{
        console.log(name);
    },[name])
    useEffect(()=>{
        console.log(age);
    },[age])
    useEffect(()=>{
        console.log(books);
    },[books])

    useEffect(()=>{
        
    },[name ,books, age])
    




    return (

        
        <View>
            {
                books.map((item,index)=>{
                    return(<Text key={index}>{item}</Text>)
                })
            }
            
            <TextInput
                style={{ borderBlockColor: 'grey', borderWidth: 1, borderRadius: 5 }}
                onChange={(event) => setName(event.target.value)} 
                placeholder='Name'
                /><br></br>
            <TextInput
                style={{ borderBlockColor: 'grey', borderWidth: 1, borderRadius: 5 }}
                onChange={(event) => setAge(event.target.value)}
                placeholder='Age'

            /><br></br>
            <TextInput
                style={{ borderBlockColor: 'grey', borderWidth: 1, borderRadius: 5 }}
                onBlur={(event)=>setBooks(event.target.value)} // it will get triggered the moment you move away from that specific input 
                placeholder='Book'
            /><br></br>
            <TextInput
                style={{ borderBlockColor: 'grey', borderWidth: 1, borderRadius: 5 }}
                onBlur={(event)=>removeBook(event.target.value)} // it will get triggered the moment you move away from that specific input 
                
            /><br></br>
            <Pressable
              style={{backgroundColor:'rbg(150, 180, 190)' ,
              borderRadius: 10,
               color:'#fff'}}
               onPress={()=>{clearState()}}
               title='Clear'
            >Clear</Pressable>

        </View>
    )
}
