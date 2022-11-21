import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const history = useHistory();

  const login = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/admin/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the admin to local storage
      localStorage.setItem('admin', JSON.stringify(json))
      history.push("/admin-tbn-delivery");

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}