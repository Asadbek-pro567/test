import React, { useContext, useState } from 'react'
import './Login.scss'
import Login__logo from '../../assets/image/Frame.svg'
import { useNavigate } from 'react-router-dom'
import { data } from '../../dataTest/users'
import { useDispatch } from 'react-redux'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const sign = (e) => {
    e.preventDefault()
    let userr = e.target.elements.username.value
    let pass = e.target.elements.password.value
    setLoading(true)
    fetch('https://638208329842ca8d3c9f7558.mockapi.io/users', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json', // qysi formatta yuborish
        'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
        'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
      }
    })
      .then((res) => res.json())
      .then((data) => mapper(data))
      .then(()=> setLoading(false))
    
    const mapper = (q) => {
      console.log(q);
      if(q.length == 0){
        dispatch({ type: "NAME", payload: { userName: userr, tel: pass } })
        navigate('/test')
      }else{
        q?.map((w) => {
          if (w.pass !== pass) {
            dispatch({ type: "NAME", payload: { userName: userr, tel: pass } })
            navigate('/test')
          } else {
            alert('Siz test topwirib boldingiz')
            navigate('/login')
            e.target.elements.username.value = '' 
            e.target.elements.password.value = ''
            e.target.elements.password.style.border = '1px solid #BD00FF'
          }
        })
      }
    }
  }


  const bgcolor = (e) => {
    const val = e.target.value
    if (val.length == 12) {
      e.target.style.border = '3px solid greenyellow'
      e.target.style.color = 'greenyellow'
    }
    else if (val.length > 12) {
      e.target.style.border = '1px solid red'
      e.target.style.color = 'red'
    }
    else {
      e.target.style.color = ''
      e.target.style.border = '1px solid #BD00FF'
    }
  }


  return (
    <div className='containerrr'>
      {
        loading ? 
        <span></span> :
        <div className='login'>
          <div className='login__right'>
            <h2>Руйхатдан утиш</h2>
            <form className='div' action='#' onSubmit={sign}>
              <input type="text" name='username' placeholder='I.F.Sh' />
              <input onChange={bgcolor} type="number" pattern='[0-3]' name='password' defaultValue={998} />
              <button type='submit'>Next step</button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default Login