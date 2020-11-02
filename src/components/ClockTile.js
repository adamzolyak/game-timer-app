import React from 'react'
import { Alert, TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  LongPressGestureHandler,
  ScrollView,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler'

import TimeDisplay from './TimeDisplay'

const ClockTile = ({ timerActive, intervalElapsedSeconds, onPress, onLongPress }) => {
  const resetGame = () => {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity style={styles.background} onPress={onPress}>
      <LongPressGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            Alert.alert(
              'New Timer',
              'Do you want to start a new timer?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                { text: 'Yes', onPress: onLongPress },
              ],
              { cancelable: false }
            )
          }
        }}
        minDurationMs={800}
      >
        <View style={styles.container}>
          <Text style={styles.labelText}>Current Interval</Text>
          <TimeDisplay
            seconds={intervalElapsedSeconds}
            styleTime={styles.timerTime}
            styleLabel={styles.timerLabel}
          />
          <MaterialCommunityIcons
            style={styles.timerIcon}
            name={timerActive ? 'pause-circle-outline' : 'play-circle-outline'}
            size={75}
            color="white"
          />
        </View>
      </LongPressGestureHandler>
    </TouchableOpacity>
  )
}

export default ClockTile

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: 'black' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: { color: 'white', fontSize: 25, paddingBottom: 20, paddingHorizontal: 10 },
  timerTime: { color: 'white', fontSize: 50 },
  timerLabel: { color: 'white', fontSize: 20 },
  timerIcon: { paddingTop: 50 },
})
