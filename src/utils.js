import { useEffect } from 'react'

export const refreshList = (list, func) => {
  useEffect(() => {
    async function fetchData () {
      await func()
    }
    fetchData()
  }, list)
}
