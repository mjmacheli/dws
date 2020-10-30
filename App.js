import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Welcome from './WelcomeScreen'
import HomeScreen from './HomeScreen'
import CourseDetails from './CourseDetailsScreen'
import SearchScreen from './SearchScreen'
import CourseList from './CourseListScreen'

import AddCourse from './AddCourseScreen'
import QualifyScreen from './QualifyScreen'
import Scanner from './ScannerScreen'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {

  bootomNav = () => 
  <Tab.Navigator initialRouteName='Course Check' screenOptions={{ headerShown: false }}>
    <Tab.Screen  name="Find Course" children={this.homeStack}/>
    <Tab.Screen name="Scan Course" component={Scanner} />
    <Tab.Screen name="Add Req" component={AddCourse} />
    <Tab.Screen name="CourseList" component={CourseList} />
  </Tab.Navigator>

  homeStack = () => 
  <Stack.Navigator initialRouteName="Search">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Details" component={CourseDetails} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Qualify" component={QualifyScreen} />
  </Stack.Navigator>

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
      {this.bootomNav()}
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App