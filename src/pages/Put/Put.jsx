import React from 'react'
import './Put.scss'
import list from '../../assets/image/list.png'
import { Outlet } from 'react-router-dom'

function Put() {

  return (
    <div>
        <div className="my__container">
            <div className="put__inner">
                <h2>Йуналишни танланг</h2>
                <div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Frontend</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Frontend</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Frontend</h4>
                    </div>
                    <div>
                        <img src={list} alt="" />
                        <h4>Frontend</h4>
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