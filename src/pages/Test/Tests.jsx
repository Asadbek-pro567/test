import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { tests } from '../../dataTest/dataTest'
import './Tests.scss'

const itemId = []
function Tests() {
    const getPadTime = (time) => time.toString().padStart(2,'0')
    const [timeleft ,setTimeleft] = useState(3 * 60)
    const [tori,setTori] = useState(true)
    const {res} = useContext(Context)
    const minutes = getPadTime(Math.floor(timeleft / 60))
    const seconds = getPadTime(timeleft - minutes * 60)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimeleft((timeleft)=> timeleft >= 1? timeleft -1 : 0)
        }, 1000)
        if(timeleft === 0) setTori(false)
        if(window.sessionStorage.getItem('))') == 'close'){
            navigate('/')
            alert(`Вы закончили тест. Ваш результат: ${res}б`)
        }else{
            setTimeout(() => {
                navigate('/result')
            }, timeleft * 1000);
        }
        return ()=>{
            clearInterval(interval)
        }
    }, [timeleft, tori])

    const otvet = []
    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState(0)
    const [colorrr, setColor] = useState(0)
    const {setResult} = useContext(Context)
    const namee = document.getElementsByTagName('input')
    const labell = document.getElementsByTagName('label')
    const numbers = document.getElementsByClassName('sonlar')
    useEffect(()=>{
        for(let i = 0; i < namee.length; i++){
            if(namee[i].checked){
                labell[i].style.background = `rgba(0, 24, 244, 0.2)`    
                itemId.map((e)=>{
                    for (let o = 0; o <= numbers.length; o++) {
                        let u =  o + 1
                        if(e == u){
                            numbers[o].style.background = `rgba(0, 24, 244, 0.2)`
                        }
                    }
                })
            }else{
                labell[i].style.background = 'none'
            }
        }
    }, [colorrr])
    
    const navigate = useNavigate()
    const done = (e)=>{
        e.preventDefault()
        navigate('/result')
        tests?.map((e)=>{
            for (let i = 0; i < namee.length; i++){
                if(namee[i].checked){
                    const val = namee[i].value
                    setBgColor(val)
                    if(val == e.javob){
                        otvet.push(val)
                        setResult(otvet.length)
                    }
                }
            }
        })
    }

  return (
    <div className='container'>
        <h1>Matem</h1>
        <p>{minutes} : {seconds}</p>
        <ul>
            <h5>Matem (3.1ball)</h5>
            {
                tests?.map((e,i)=>(
                    <li key={i} className='sonlar'>{e.id}</li>
                ))
            }
        </ul>
        <ol>
            <form action="#" onSubmit={done}>
            {
                tests?.map((e,i)=>(
                    <li key={i}>
                        <h3>{e.savol}</h3>
                        <h4>{
                            e.otvetlar.map((item)=>(
                                <>
                                <input onClick={()=>{
                                    setBgColor(item.testId)
                                    setColor(colorrr + 1)
                                    !itemId.includes(e.id) ? itemId.push(e.id) : itemId.push()
                                    }} type="radio" id={item.testId} name={e.id} value={item.otvet}/>
                                <label htmlFor={item.testId}>{item.userId}) {item.otvet}</label>
                                </>
                            ))    
                        }</h4>
                    </li>
                ))
            }
            <button type='submit'>Отправить</button>
            </form>
        </ol>
    </div>
  )
}

export default Tests