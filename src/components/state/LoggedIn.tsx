import React, {useState} from 'react'

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <div>User is {isLoggedIn ? "Logged in" : "Logged out"}</div>
    </div>
  )
}
