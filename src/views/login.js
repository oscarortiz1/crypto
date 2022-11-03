import { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/card'

const Login = ({ form, setForm, setActive }) => {
  const [error, setError] = useState(false)
  const handleChange = (e) => {
    setForm({
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    if (form.user) {
      setError(false)
      setActive(true)
      window.localStorage.setItem('uidPrueba', uuidv4())
    } else {
      setError(true)
    }
  }

  return (
    <LoginStyled error={error}>
      <img
        src='https://uploads.turbologo.com/uploads/design/hq_preview_image/5177957/draw_svg20210705-29907-14wa75u.svg.png'
        alt='logo'
      />
      <Card width={'600px'} height={'300px'}>
        <h1>Login</h1>
        <div className='form'>
          <p>Escribe tu usuario para ingresar</p>
          <input
            name='user'
            placeholder='USERNAME'
            onChange={(e) => handleChange(e)}
            maxLength='30'
          />
          {error && <p className='error'>El usuario es requerido</p>}
          <button onClick={() => onSubmit()}>sign in</button>
        </div>
      </Card>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 600px;
  }
  h1 {
    color: black;
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    p {
      margin-left: 16px;
    }
    .error {
      color: red;
    }
    input {
      margin: 1rem;
      height: 30px;
      border-radius: 5px;
      border: ${(props) => (props.error ? '1px solid red' : '1px solid grey')};
      padding: 5px;
    }
    button {
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 20px;
      height: 50px;
      margin: 16px;
      cursor: pointer;
    }
    button:hover {
      background-color: greenyellow;
    }
  }
`

export default Login
