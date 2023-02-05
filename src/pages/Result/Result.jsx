import React, { useContext, useEffect } from 'react'
import './Result.scss'
import { tests } from '../../dataTest/dataTest';
import { useNavigate } from 'react-router-dom';
import { data } from '../../dataTest/users';

function Result() {

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json', // qysi formatta yuborish
      'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
      'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
    },
    // body: JSON.stringify({
    //   name: el.namee.value,
    //   tel: parseInt(el.tel.value)
    // })
  })
  .then((res)=> res.json())
  .then((data) => console.log(data))

  const number = []
  tests?.map(e => {
    number.push(e.id)
  })

  const foiz = number.pop()
  const fir = 5 * 100 / foiz
  const circle = document.getElementsByClassName('circle')
  useEffect(() => {
    for (let i = 0; i < circle.length; i++) {
      circle[i].style.background = `conic-gradient(#BD00FF 0%, #BD00FF ${fir}%, rgb(220, 238, 255) ${fir}%, rgb(220, 238, 255) 100%)`
    }
  }, [])

  const natija = 10 * 3.1
  return (
    <div className='containerr'>
      <div className="result">
        <div className="flex">

          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{5} / {foiz}</h3>
            </div>
          </div>
          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{5} / {foiz}</h3>
            </div>
          </div>
          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{5} / {foiz}</h3>
            </div>
          </div>
        </div>
        <h5><span>{natija}</span> Общий результат</h5>

      </div>
    </div>
  )
}

export default Result