import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

interface IData {
  id: number
  value: string
}

export function useGetData(id: number | null = null) {
  const [data, setData] = useState<IData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchData() {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.post<IData[]>('/data/getData', {
        id,
      })
      setData(response.data)
      setLoading(false)
    } catch (e) {
      const error = e as AxiosError
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error }
}
