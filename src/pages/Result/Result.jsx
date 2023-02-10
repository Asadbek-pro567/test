import React, { useContext, useEffect } from 'react'
import './Result.scss'
import { tests } from '../../dataTest/dataTest';
import { useNavigate } from 'react-router-dom';
import { data } from '../../dataTest/users';
import { Context } from '../../Context/Context';

function Result() {
  const {result,setResult} = useContext(Context)
  const number = []
  tests?.map(e => {
    number.push(e.id)
  })

  const foiz = number.pop()
  const fir = result.length * 100 / foiz
  const circle = document.getElementsByClassName('circle')
  useEffect(() => {
    for (let i = 0; i < circle.length; i++) {
      circle[i].style.background = `conic-gradient(#BD00FF 0%, #BD00FF ${fir}%, rgb(220, 238, 255) ${fir}%, rgb(220, 238, 255) 100%)`
    }
  }, [])

  const natija = result.length * 3.1
  let obj  = {
    quer: '<p>sadasdas</p>'
  }
  return (
    <div className='containerr'>
      <p  dangerouslySetInnerHTML = {{ __html:`<b>1</b>`+ obj?.quer }}></p>
      <div  className="result">
        <div className="flex">
          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{result.length} / {foiz}</h3>
            </div>
          </div>
          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{result.length} / {foiz}</h3>
            </div>
          </div>
          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{result.length} / {foiz}</h3>
            </div>
          </div>
        </div>
        <h5><span>{natija}</span> Общий результат</h5>

      </div>
    </div>
  )
}

export default Result