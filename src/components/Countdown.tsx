import { useEffect, useRef, useState } from 'react'

const Countdown = () => {
  const initialTime = {
    days: 96,
    hours: 59,
    minutes: 58,
    seconds: 43,
  }

  const targetTime = {
    days: 150,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  
  const timerRef = useRef(null)

  const tick = () => {
    setTime((prevTime) => {
      let { days, hours, minutes, seconds } = prevTime
      seconds += 1

      if (seconds >= 60) {
        seconds = 0
        minutes += 1
      }
      if (minutes >= 60) {
        minutes = 0
        hours += 1
      }
      if (hours >= 24) {
        hours = 0
        days += 1
      }

      // Stop when reaching target time
      if (
        days === targetTime.days &&
        hours === targetTime.hours &&
        minutes === targetTime.minutes &&
        seconds === targetTime.seconds
      ) {
        // @ts-ignore
        clearInterval(timerRef.current)
        return prevTime // Don't increment further after target time
      }

      return { days, hours, minutes, seconds }
    })
  }

  const formatTime = (time: any) => {
    return `${String(time.days).padStart(2, '0')}:${String(time.hours).padStart(
      2,
      '0',
    )}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(
      2,
      '0',
    )}`
  }

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true)
      // @ts-ignore
      timerRef.current = setInterval(tick, 1000) // Tick every second
    }
  }

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false)
      // @ts-ignore
      clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    return () => {
      // @ts-ignore
      clearInterval(timerRef.current) // Clean up on component unmount
    }
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="text-[200px]">{formatTime(time)}</h1>

        <div className="flex justify-center items-center space-x-56">
          <button
            className="text-[80px] bg-green-400 border-3 rounded-xl p-10"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="text-[80px] bg-red-400 border-3 rounded-xl p-10"
            onClick={stopTimer}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  )
}

export default Countdown
