import { useGetData } from '../hooks/getData.hook'

export function ItemsPage() {
  const { data: items, loading, error } = useGetData()

  return (
    <>
      <h1>Items</h1>
      <div>
        {loading
          ? 'Loading...'
          : error
          ? `Error: ${error}`
          : items.length
          ? items.map((x) => <p>{`${x.id}. ${x.value}`}</p>)
          : 'No data'}
      </div>
    </>
  )
}
