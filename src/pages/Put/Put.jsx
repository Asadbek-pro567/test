import React from 'react'
import './Put.scss'
import list from '../../assets/image/list.png'
import { Outlet, useNavigate } from 'react-router-dom'

function Put() {
    const navigate = useNavigate()

    const done = ()=>{
        navigate('/login')
    }

  return (
    <div>
        <div className="my__container">
            <div className="put__inner">
                <h2>Йуналишни танланг</h2>
                <div onClick={done}>
                    <div>
                        <img src={list} alt="" />
                        <h4>Frontend</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Backend</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>SMM Marketing</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>3D MAX</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Dizayner</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Logistics</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Frontend</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Frontend</h4>
                    </div>
                </div>
            </div>
        </div>
      <Outlet/>
    </div>
  )
}

export default Put