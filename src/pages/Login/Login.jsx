import React, { useContext } from 'react'
import './Login.scss'
import Login__logo from '../../assets/image/Frame.svg'
import { useNavigate } from 'react-router-dom'
import { data } from '../../dataTest/users'
import { useDispatch } from 'react-redux'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sign = (e) => {
    e.preventDefault()
    let userr = e.target.elements.username.value
    let pass = e.target.elements.password.value
    let elInp = document.getElementsByTagName('input')
    for (let i = 0; i < data.length; i++) {
      if (data[i].user === userr && data[i].pass == pass) {
        window.sessionStorage.setItem('key', `${userr}`)
        dispatch({ type: "NAME", payload: {userName: userr, tel: pass}})
        break
      } else {
        window.sessionStorage.setItem('key', 'error')
      }
    }
    for (let i = 0; i < elInp.length; i++) {
      if (window.sessionStorage.getItem('key') == 'error') {
        elInp[i].style.border = '2px solid red'

      }
    }
    data.find((e)=>{
      if(e.user == window.sessionStorage.getItem('key')){
        navigate('/test')
        e.ts = 'close'
      }
    })
  }


  return (
    <div className='containerrr'>
      <div className='login'>
        <div className='login__right'>
          <h2>Руйхатдан утиш</h2>
          <form className='div' action='#' onSubmit={sign}>
            <input type="text" name='username' placeholder='Email' />
            <input type="password" name='password' placeholder='Password' />
            <button type='submit'>Next step</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login