import { Clock } from '../components/clock/Clock'

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Clock delay={1000} />
      <Clock delay={2000} />
      <Clock delay={3000} />
    </>
  )
}
