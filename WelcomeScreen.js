import React, { useState,useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'
import { FlatList } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper'

const App = () => {
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

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  const ref = firestore().collection('courses')
  const [ english, setEnglish ] = useState('');
  const [ maths, setMaths ] = useState('');
  const [ physics, setPhysics ] = useState('');
  const [ lifeSceince, setLifeSceince ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ courses, setCourses ] = useState([])

  

  async function addCourse() {
    await ref.add({
      english: english,
      maths: maths,
      lifeSceince: lifeSceince,
      physics:physics,
    });
    setEnglish('')
    setLifeSceince('')
    setMaths('')
    setPhysics('')
  }

  return (
    <>
      <Appbar>
        <Appbar.Content title={'TODOs List'} />
      </Appbar>
      <FlatList 
        style={{flex: 1}}
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Course {...item} />}
      />
      <TextInput label={'English Score'} value={english} onChangeText={setEnglish} />
      <TextInput label={'Maths Score'} value={maths} onChangeText={setMaths} />
      <TextInput label={'Physics Score'} value={physics} onChangeText={setPhysics} />
      <TextInput label={'Life Science Score'} value={lifeSceince} onChangeText={setLifeSceince} />
      <Button onPress={() => addCourse()}>Add TODO</Button>
    </>
  )
}

export default App;
