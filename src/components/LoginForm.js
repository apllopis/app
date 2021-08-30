import Togglable from "./Togglable"

const LoginForm = ({ handleSubmit, username, password, handlechangeUsername, handleChangePassword }) => {

  return (
    <Togglable buttonLabel='LOGIN'>
      <form onSubmit={handleSubmit}>
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
          <button>Acceder</button>
        </div>
      </form>
    </Togglable >
  )
}
export default LoginForm