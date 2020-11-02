import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TimeDisplay = ({ seconds, styleTime, styleLabel }) => {
  console.log('break 1')

  const getMinutes = () => {
    return Math.floor(seconds / 60)
  }

  const getSeconds = () => {
    return seconds % 60
  }

  return (
    <View>
      <View style={styles.conatiner}>
        <Text style={[styles.numberText, styleTime]}>{getMinutes()}</Text>
        <Text style={[styles.labelText, styleLabel]}>min</Text>
      </View>
      <View style={styles.conatiner}>
        <Text style={[styles.numberText, styleTime]}>{getSeconds()}</Text>
        <Text style={[styles.labelText, styleLabel]}>sec</Text>
      </View>
    </View>
  )
}

export default TimeDisplay

const styles = StyleSheet.create({
  conatiner: { flexDirection: 'row', alignItems: 'center' },
  numberText: {
    paddingHorizontal: 10,
    textAlign: 'center',
    width: 120,
    textAlign: 'right',
  },
  labelText: {
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    width: 60,
    textAlign: 'left',
  },
})
