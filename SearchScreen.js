import React,{useState,useEffect} from 'react'
import { Appbar, TextInput, Button } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'

const SearchScreen = ({ route, navigation }) => {

    const ref = firestore().collection('courses')

    const [english,setEnglish] = useState(0)
    const [maths,setMaths] = useState(0)
    const [physics,setPhysics] = useState(0)
    const [lifeScience,setLifeSceince] = useState(0)
    const [points,setPoints] = useState(0)
    const [ courses, setCourses ] = useState([])

    useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
          const list = [];
          querySnapshot.forEach(doc => {
            const { english, maths, physics, lifeSceince,course, points } = doc.data();
            list.push({
              id: doc.id,
              english,
              maths,
              physics,
              lifeSceince,
              points,
              course
            });
          });
    
          setCourses(list)
        })
      }, [])
    
    return (
        <>
        <Appbar>
            <Appbar.Content title={'Find Courses'} />
        </Appbar>
        <TextInput
            label="English"
            mode='flat'
            value={english}
            onChangeText={setEnglish}
            // error={isValid}
        />
        <TextInput
            label="Maths"
            mode='flat'
            value={maths}
            onChangeText={setMaths}
            // error={isValid}
        />
        <TextInput
            label="Physics"
            mode='flat'
            value={physics}
            onChangeText={setPhysics}
            // error={isValid}
        />
        <TextInput
            label="Life Science"
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
            onPress={() => navigation.navigate('Qualify',{
                english:english,
                maths:maths,
                physics:physics,
                lifeScience :lifeScience,
                points:points,
                courses: courses
            })}
        >Search</Button>
        </>
    )
}

export default SearchScreen