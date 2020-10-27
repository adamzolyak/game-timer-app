import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

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

  const startTimer = () => {
    setTimerActive(true)
  }

  const pauseTimer = () => {
    setTimerActive(false)
  }

  const incrementInterval = () => {
    setIntervalElapsedSeconds(intervalElapsedSeconds + 1)
  }

  const switchPlayer = () => {
    let newPlayer

    if (currentPlayer === 0) {
      newPlayer = 1
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

  const handlePlayerTap = (player) => {
    console.log('player tap: ', player)

    if (currentPlayer === 1) {
      setP1ElapsedSeconds(p1ElapsedSeconds + intervalElapsedSeconds)
      setIntervalElapsedSeconds(0)
      switchPlayer()
    } else if (currentPlayer === 2) {
      setP2ElapsedSeconds(p2ElapsedSeconds + intervalElapsedSeconds)
      setIntervalElapsedSeconds(0)
      switchPlayer()
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.p1container} onPress={() => handlePlayerTap(1)}>
        <View>
          <Text style={styles.p1text}>{`Player 1 - ${p1ElapsedSeconds} seconds`}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timercontainer} onPress={handleTimerTap}>
        <View>
          <Text style={styles.timertext}>
            {intervalElapsedSeconds} seconds - timer enabled {timerActive.toString()} - current
            player {currentPlayer}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.p2container} onPress={() => handlePlayerTap(2)}>
        <View>
          <Text style={styles.p2text}>{`Player 2 - ${p2ElapsedSeconds} seconds`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  p1container: { flex: 2, backgroundColor: 'green' },
  p1text: { margin: 50 },
  p2container: { flex: 2, backgroundColor: 'red' },
  p2text: { margin: 50 },
  timercontainer: { flex: 1, backgroundColor: 'purple' },
  timertext: { margin: 50 },
})
