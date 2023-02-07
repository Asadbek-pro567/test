import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { tests } from '../../dataTest/dataTest'
import { data } from '../../dataTest/users'
import './Tests.scss'

const itemId = []
const questions = []
function Tests() {

    const [que, setQue] = useState([])
    console.log(que);
    const getPadTime = (time) => time.toString().padStart(2, '0')
    const [timeleft, setTimeleft] = useState(10)
    const [tori, setTori] = useState(true)
    const minutes = getPadTime(Math.floor(timeleft / 60))
    const seconds = getPadTime(timeleft - minutes * 60)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimeleft((timeleft) => timeleft >= 1 ? timeleft - 1 : 0)
    //     }, 1000)
    //     if (timeleft === 0) setTori(false)
    //     if (data.map((e) => e.ts) == 'close') {
    //         navigate('/')
    //         alert(`Вы закончили тест. Ваш результат: 30б`)
    //     } else {
    //         setTimeout(() => {
    //             // navigate('/result')
    //         }, timeleft * 1000);
    //     }
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [timeleft, tori])

    const otvet = []
    const otvetlar = []


    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState(0)
    const [colorrr, setColor] = useState(0)
    const dispatch = useDispatch()
    const namee = document.getElementsByTagName('input')
    const labell = document.getElementsByTagName('label')
    const numbers = document.getElementsByClassName('sonlar')

    useEffect(() => {
        for (let i = 0; i < namee.length; i++) {
            if (namee[i].checked) {
                labell[i].style.background = `rgba(0, 24, 244, 0.2)`
                itemId.map((e) => {
                    for (let o = 0; o <= numbers.length; o++) {
                        let u = o + 1
                        if (e == u) {
                            numbers[o].style.background = `rgba(0, 24, 244, 0.2)`
                        }
                    }
                })
            } else {
                labell[i].style.background = 'none'
            }
        }
    }, [colorrr])


    const navigate = useNavigate()
    const [asd, setAsd] = useState(0)
    const done = (e) => {
        e.preventDefault()
        navigate('/result')
        tests?.map((e) => {
            for (let i = 0; i < namee.length; i++) {
                if (namee[i].checked) {
                    const val = namee[i].value
                    setBgColor(val)
                    if (!otvetlar.includes(namee[i].value)) {
                        otvetlar.push(namee[i].value)
                    }
                    setAsd(asd + 1)
                    dispatch({ type: "ADD", payload: { questions } })
                    if (val == e.javob) {
                        otvet.push(val)
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
                    tests?.map((e, i) => (
                        <li key={i} className='sonlar'>{e.id}</li>
                    ))
                }
            </ul>
            <ol>
                <form action="#" onSubmit={done}>
                    {
                        tests?.map((e, i) => (
                            <li key={i}>
                                <h3>{e.savol}</h3>
                                {
                                    e.otvetlar.map((item, k) => (
                                        <h4 key={k}>
                                            <input onClick={() => {
                                                !itemId.includes(e.id) ? itemId.push(e.id) : itemId.push()
                                                setColor(colorrr + 1)
                                                
                                                !questions.includes(questions[(e.id) - 1]) ? 
                                                questions.push({
                                                        quest: e.id,
                                                        answer: item.testId
                                                    }):
                                                questions?
                                                 questions.map((w)=>{
                                                    if(w.quest == e.id){
                                                        w.answer = item.testId
                                                    }
                                                })
                                                : questions.push()
                                                setQue(questions)
                                            }} type="radio" id={item.testId} name={e.id} value={item.otvet} />
                                            <label htmlFor={item.testId}>{item.userId}) {item.otvet}</label>
                                        </h4>
                                    ))
                                }
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