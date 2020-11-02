import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import TimeDisplay from './TimeDisplay'

const PlayerTile = ({ playerId, currentPlayerId, elapsedSeconds, onPress }) => {
  return (
    <TouchableOpacity style={styles.background} onPress={onPress}>
      <View style={styles.container}>
        <View>
          <View style={styles.activePlayerIcon}>
            {currentPlayerId === playerId && (
              <MaterialCommunityIcons name="star-box" size={30} color="black" />
            )}
          </View>

          <Text style={styles.playerName}>{`Player ${playerId}`}</Text>
          <TimeDisplay
            seconds={elapsedSeconds}
            styleTime={styles.timerTime}
            styleLabel={styles.timerLabel}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PlayerTile

const styles = StyleSheet.create({
  background: { flex: 2, backgroundColor: 'white' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerName: { color: 'black', fontSize: 30, textAlign: 'center', paddingBottom: 30 },
  timerTime: { color: 'black', fontSize: 40 },
  timerLabel: { color: 'black', fontSize: 20 },
  activePlayerIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
})
