import { useEffect, useState } from 'react'

export const HOC = (WrapppedComponent: any, props: any) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 2000)
  }, [])

  return <>{ready ? <WrapppedComponent {...props} /> : <div>Loading...</div>}</>
}
