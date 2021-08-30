const LoginForm = ({ handleLogin, username, password, handlechangeUsername, handleChangePassword }) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type='text'
          value={username}
          name='Username'
          placeholder='Nombre usuario'
          onChange={handlechangeUsername}
        />
      </div>
      <div>
        <input
          type='password'
          value={password}
          name='Password'
          placeholder=''
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
export default LoginForm