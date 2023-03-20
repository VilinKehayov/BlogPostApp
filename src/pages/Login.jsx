import React from 'react'

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </div>
  )
}

export default Login