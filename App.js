import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import PlayerCard from './src/components/PlayerTile'
import ClockTile from './src/components/ClockTile'

export default function App() {
  const [timerActive, setTimerActive] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [intervalElapsedSeconds, setIntervalElapsedSeconds] = useState(0)
  const [p1ElapsedSeconds, setP1ElapsedSeconds] = useState(0)
  const [p2ElapsedSeconds, setP2ElapsedSeconds] = useState(0)

  useEffect(() => {
    if (timerActive) {
      let interval = null
      interval = setInterval(() => {
        incrementInterval()
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timerActive, intervalElapsedSeconds])

  const createNewTimer = () => {
    setTimerActive(false)
    setCurrentPlayer(0)
    setIntervalElapsedSeconds(0)
    setP1ElapsedSeconds(0)
    setP2ElapsedSeconds(0)
  }

  const startTimer = () => {
    setTimerActive(true)
  }

  const pauseTimer = () => {
    setTimerActive(false)
  }

  const incrementInterval = () => {
    setIntervalElapsedSeconds(intervalElapsedSeconds + 1)
  }

  const resetInterval = () => {
    setIntervalElapsedSeconds(0)
  }

  const switchPlayer = (player) => {
    let newPlayer

    if (currentPlayer === 0) {
      newPlayer = player
    } else if (currentPlayer === 1) {
      newPlayer = 2
    } else if (currentPlayer === 2) {
      newPlayer = 1
    }

    setCurrentPlayer(newPlayer)
  }

  const handleTimerTap = () => {
    if (currentPlayer === 0) {
      setCurrentPlayer(1)
      startTimer()
    }

    if (timerActive) {
      setTimerActive(false)
    } else {
      setTimerActive(true)
    }
  }

  const handleTimerLongTap = () => {
    createNewTimer()
  }

  const handlePlayerTap = (player) => {
    console.log('player tap: ', player)

    if (currentPlayer === 0) {
      startTimer()
      switchPlayer(player)
    } else if (currentPlayer === 1) {
      setP1ElapsedSeconds(p1ElapsedSeconds + intervalElapsedSeconds)
      setIntervalElapsedSeconds(0)
      switchPlayer()
      resetInterval()
    } else if (currentPlayer === 2) {
      setP2ElapsedSeconds(p2ElapsedSeconds + intervalElapsedSeconds)
      setIntervalElapsedSeconds(0)
      switchPlayer()
      resetInterval()
    }
  }

  return (
    <View style={styles.container}>
      <PlayerCard
        playerId={1}
        currentPlayerId={currentPlayer}
        elapsedSeconds={p1ElapsedSeconds}
        onPress={() => handlePlayerTap(1)}
      />
      <ClockTile
        timerActive={timerActive}
        intervalElapsedSeconds={intervalElapsedSeconds}
        onPress={handleTimerTap}
        onLongPress={handleTimerLongTap}
      />
      <PlayerCard
        playerId={2}
        currentPlayerId={currentPlayer}
        elapsedSeconds={p2ElapsedSeconds}
        onPress={() => handlePlayerTap(2)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  p1container: { flex: 2, backgroundColor: 'green' },
  p1text: { margin: 50 },
  p2container: { flex: 2, backgroundColor: 'red' },
  p2text: { margin: 50 },
  timercontainer: { flex: 1, backgroundColor: 'purple' },
  timertext: { margin: 50 },
})
