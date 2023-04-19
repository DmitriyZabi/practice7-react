import React, { useEffect, useState } from 'react'

export function Clock({ delay }: { delay: number }) {
  const [dateNow, setDateNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setDateNow(new Date()), delay)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <>{<p>{dateNow.toLocaleTimeString()}</p>}</>
}
