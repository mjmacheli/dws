import React from 'react'
import { Button } from 'react-native-paper'

const HomeScreen = ({ navigation }) => {

    return (
        <>
        <Button 
            icon="camera" 
            mode="contained" 
            onPress={() => navigation.navigate('Search')}>
            Find Courses
        </Button>

        <Button 
            icon="camera" 
            mode="contained" 
            onPress={() => navigation.navigate('Search')}>
            More Services
        </Button>
        
        </>
    )
}

export default HomeScreen