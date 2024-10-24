import { useEffect, useRef, useState } from 'react'

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

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
  const [inputTime, setInputTime] = useState('96:59:58:43')

  const parseTimeInput = (input: string) => {
    const [days, hours, minutes, seconds] = input.split(':').map(Number)
    return { days, hours, minutes, seconds }
  }

  const timerRef = useRef<NodeJS.Timeout | null>(null)

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
        // @ts-expect-error  Don't increment further after target time
        clearInterval(timerRef.current)
        return prevTime 
      }

      return { days, hours, minutes, seconds }
    })
  }

  const formatTime = (time: Time) => {
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
      timerRef.current = setInterval(tick, 1000) // Tick every second
    }
  }

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false)
      // @ts-expect-error Don't increment further after target time
      clearInterval(timerRef.current)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(e.target.value)
  }

  const setStartTime = () => {
    const parsedTime = parseTimeInput(inputTime)
    setTime(parsedTime)
  }

  useEffect(() => {
    return () => {
      // @ts-expect-error Don't increment further after target time
      clearInterval(timerRef.current) // Clean up on component unmount
    }
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div className="w-full flex justify-center">
          <input
            type="text"
            value={inputTime}
            onChange={handleInputChange}
            placeholder="Enter time as DD:HH:MM:SS"
            className="text-[30px] mx-4 px-4 border-2 border-[#ccc text-center"
          />
          <button
            className="text-[20px] border-2 border-[#ccc] rounded-xl p-4"
            onClick={setStartTime}
          >
            Set Start Time
          </button>
        </div>

        <h1 className="text-[200px]">{formatTime(time)}</h1>

        <div className="flex justify-center items-center space-x-56">
          <button
            className="text-[80px] bg-green-400 border-3 rounded-xl px-10"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="text-[80px] bg-red-400 border-3 rounded-xl py- px-10"
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
