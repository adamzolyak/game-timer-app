import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TimeDisplay = ({ seconds, styleTime, styleLabel }) => {
  const getMinutes = () => {
    return Math.floor(seconds / 60)
  }

  const getSeconds = () => {
    return seconds % 60
  }

  return (
    <View>
      <View style={styles.conatiner}>
        <Text style={styleTime}>{getMinutes()}</Text>
        <Text style={styleLabel}>min</Text>
      </View>
      <View style={styles.conatiner}>
        <Text style={styleTime}>{getSeconds()}</Text>
        <Text style={styleLabel}>sec</Text>
      </View>
    </View>
  )
}

export default TimeDisplay

const styles = StyleSheet.create({
  conatiner: { flexDirection: 'column', alignItems: 'center', paddingBottom: 10 },
})
