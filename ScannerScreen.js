import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera'

class ScannerScreen extends Component {
    constructor(props) {
      super(props)
    }

    onSuccess = e => {
      console.log('Scanned ', e.data)
    //   this.props.navigation.navigate('Donation', {data: e.data})
    }
  
    render() {

      return (
          <>
        <View>
        <QRCodeScanner
          onRead={this.onSuccess}
          topContent={
              <Text style={styles.textBold}>Scan a QRCode to donate</Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
        </View>
        <View>
          <Text>Hello</Text>
        </View>
        </>
      )
    }
  }

  const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  })

export default ScannerScreen