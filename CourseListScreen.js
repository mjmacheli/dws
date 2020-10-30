import React,{useState,useEffect} from 'react'
import {
  Text
} from 'react-native'
import { Appbar } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'

const CourseList = () => {
    const ref = firestore().collection('courses')

    const [mcourse,setCourses] = useState([])

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
  
        setCourses(list);
      });
    }, []);
    
    return (
        <>
            <Appbar>
                <Appbar.Content title={'Courses'} />
            </Appbar>
            {
              mcourse.map(c => <Text key={c.id}>{c.course}{' - '} {c.points}</Text>)
            }
            
        </>
    )
}

export default CourseList