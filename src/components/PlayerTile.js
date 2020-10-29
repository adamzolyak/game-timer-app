import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const PlayerTile = ({ playerId, currentPlayerId, elapsedSeconds, onPress }) => {
  return (
    <TouchableOpacity style={styles.background} onPress={onPress}>
      <View style={styles.container}>
        <View>
          {currentPlayerId === playerId && (
            <View style={styles.activePlayerIcon}>
              <MaterialCommunityIcons name="star-box" size={30} color="black" />
            </View>
          )}
          <Text style={styles.playerName}>{`Player ${playerId}`}</Text>
          <Text style={styles.playerElapsedSeconds}>{`${elapsedSeconds} total seconds`}</Text>
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
  playerName: { color: 'black', fontSize: 30, textAlign: 'center' },
  playerElapsedSeconds: { fontSize: 20, textAlign: 'center' },
  activePlayerIcon: { display: 'flex', alignItems: 'center' },
})
