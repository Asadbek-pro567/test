import React from 'react'
import './Glavniy.scss'
import Header__logo from '../../assets/image/logo__header.png'
import { useNavigate } from 'react-router-dom'

function Glavniy() {
    const navigate = useNavigate()

    const done = ()=>{
      navigate('/put')
    }
  return (
    <div>
        <div className="containeer">
            <div className="glavniy__inner">
                <img src={Header__logo} alt="" />
                <h1>Digital Girls 2</h1>
                <button onClick={done}>Boshlash</button>
            </div>
        </div>
    </div>
  )
}

export default Glavniy