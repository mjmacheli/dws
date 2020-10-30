import React,{useState} from 'react'
import {
  View,
  Text
} from 'react-native'
import { Appbar, List, } from 'react-native-paper'

const QualifyScreen = ({ route }) => {

    const {english,maths,physics,lifeScience,points,courses} = route.params

    const[mEnglish,setEnglish] = useState(english)
    const[mMaths,setMaths] = useState(maths)
    const[mPhysics,setPhysics] = useState(physics)
    const[mLifeSceince,setLifeSceince] = useState(lifeScience)
    const[mpoints,setPoints] = useState(points)
    const [mcourse,setCourses] = useState(courses)
    
    return (
        <>
            <Appbar>
                <Appbar.Content title={'Courses'} />
            </Appbar>
            {
              mcourse.map(c => 
                    (mEnglish && mEnglish >= c.english) 
              &&    (mMaths && mMaths >= c.maths ) 
              &&    (mPhysics && mPhysics >= c.physics ) 
            //   &&    (mLifeSceince && mLifeSceince >= c.lifeScience ) 
              &&    (mpoints >= c.points ) &&
                <Text key={c.id}>{c.course}{' - '}{c.english}</Text>)
            }
            
        </>
    )
}

export default QualifyScreen