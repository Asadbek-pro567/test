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
  const [disable, setDisable] = useState(true)

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
      .then(() => setLoading(false))

    const mapper = (q) => {
      console.log(q);
      let slc = pass.slice(3, 5)
      if (slc == 33 || slc == 90 || slc == 91 || slc == 93 || slc == 94 || slc == 97 || slc == 88 || slc == 99 || slc == 95) {

        if (q.length <= 0) {
          if (userr.length > 3 && pass.length == 12) {
            dispatch({ type: "NAME", payload: { userName: userr, tel: pass } })
            navigate('/test')
          }
          else {
            console.log('error');
          }
        } else {
          for (let i = 0; i < q.length; i++) {
            if (q[i].pass == pass) {
              navigate('/login')
              alert('Siz test topwirib boldingiz')
              e.target.elements.username.value = ''
              e.target.elements.password.value = ''
              e.target.elements.password.style.border = '1px solid #BD00FF'
              break
            }
            else {
              dispatch({ type: "NAME", payload: { userName: userr, tel: pass } })
              navigate('/test')
            }
          }
        }
      }
      else {
        alert("mavjud bo'lmagan raqam")
      }
    }
  }


  const bgcolor = (e) => {
    let val = e.target.value
    let slc = val.slice(3, 5)
    if (val.length == 12) {
      e.target.style.border = '3px solid greenyellow'
      e.target.style.color = 'greenyellow'
      setDisable(false)
    }
    else if (val.length > 12) {
      e.target.style.border = '1px solid red'
      e.target.style.color = 'red'
      setDisable(true)
    }
    else {
      e.target.style.color = ''
      e.target.style.border = '1px solid #BD00FF'
      setDisable(true)

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
                <input type="text" name='username' placeholder='F.I.Sh' />
                <input onChange={bgcolor} type="number" name='password' defaultValue={998} />
                <label htmlFor="" style={{ color: '#b8b8b8' }}>Telefon raqam: 12 ta sondan iborat bolsin</label>
                <button type='submit' className={disable ? 'btn' : 'button'} disabled={disable ? true : false}>Next step</button>
              </form>
            </div>
          </div>
      }
    </div>
  )
}

export default Login