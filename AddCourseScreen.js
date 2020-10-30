import React,{useState} from 'react'
import {
    Text
} from 'react-native'
import { Appbar, TextInput, Button } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'

const AddCourseScreen = ({navigation}) => {

    const ref = firestore().collection('courses')

    const [english,setEnglish] = useState(0)
    const [maths,setMaths] = useState(0)
    const [physics,setPhysics] = useState(0)
    const [lifeScience,setLifeSceince] = useState(0)
    const [points,setPoints] = useState(0)
    const [ course, setCourse ] = useState('')

    async function addStream() {
        await ref.add({
            course:course,
            english:english,
            maths:maths,
            physics:physics,
            lifeScience :lifeScience,
            points:points,
        });
      }
    
    return (

        <>
        <Appbar>
            <Appbar.Content title={'Add New Course Stream'} />
        </Appbar>
        <TextInput
            label="Course Stream"
            mode='flat'
            // value={english}
            onChangeText={setCourse}
            // error={isValid}
        />
        <TextInput
            label="English Aps"
            mode='flat'
            value={english}
            onChangeText={setEnglish}
            // error={isValid}
        />
        <TextInput
            label="Maths Aps"
            mode='flat'
            value={maths}
            onChangeText={setMaths}
            // error={isValid}
        />
        <TextInput
            label="Physics Aps"
            mode='flat'
            value={physics}
            onChangeText={setPhysics}
            // error={isValid}
        />
        <TextInput
            label="Life Science Aps"
            mode='flat'
            value={lifeScience}
            onChangeText={setLifeSceince}
            // error={isValid}
        />
        <TextInput
            label="Total APS"
            mode='flat'
            value={points}
            onChangeText={setPoints}
            // error={isValid}
        />
        <Button
            mode='outlined'
            dark={true}
            onPress={() => addStream()}
        >Add</Button>
        </>

    )
}

export default AddCourseScreen