import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const refreshList = (list, func) => {
  useEffect(() => {
    async function fetchData () {
      await func()
    }
    fetchData()
  }, list)
}

export const pageNav = async (func, route) => {
  const navigate = useNavigate()
  await func
  navigate(route)
}
