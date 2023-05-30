import { useEffect, useState } from 'react'
import { onAuthStateChange } from '../firebase/client'

const USER_STATE = {
  KNOWN: undefined,
  NOTLOGGED: null
}
const useUser = () => {
  const [user, setUser] = useState(USER_STATE.KNOWN)

  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  return user
}

export default useUser
