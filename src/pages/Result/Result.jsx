import React, { useContext, useEffect } from 'react'
import './Result.scss'
import { Doughnut } from 'react-chartjs-2';
import { Context } from '../../Context/Context';
import { tests } from '../../dataTest/dataTest';

function Result() {
  const {result, setResult} = useContext(Context)
  const number = []
  tests?.map(e=>{
    number.push(e.id)
  })
  const foiz = number.pop()
  const fir = result * 100 / foiz
  const circle  = document.getElementsByClassName('circle')
  useEffect(()=>{
    for (let i = 0; i < circle.length; i++){
      circle[i].style.background = `conic-gradient(#BD00FF 0%, #BD00FF ${fir}%, rgb(220, 238, 255) ${fir}%, rgb(220, 238, 255) 100%)`
      console.log(circle[i]);
    }
  }, [result])
  return (
    <div className='containerr'>
      <div className="result">
        <div className="flex">

          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{result} / {foiz}</h3>
            </div>
          </div>
          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{result} / {foiz}</h3>
            </div>
          </div>
          <div className="circle">
            <div className="inner">
              <h2>Matem</h2>
              <h4>{fir}<span>%</span></h4>
              <h3>{result} / {foiz}</h3>
            </div>
          </div>
        </div>
        <h5><span>{result * 3.1}</span> Общий результат</h5>

      </div>
    </div>
  )
}

export default Result