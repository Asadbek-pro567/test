import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { tests } from '../../dataTest/dataTest'
import { data } from '../../dataTest/users'
import './Tests.scss'

const itemId = []
const questions = []
function Tests() {
    const selector = useSelector((state) => { return state })
    const {result, setResult} = useContext(Context)

    
    const [que, setQue] = useState([])
    const [loading, setLoading] = useState(false)
    const getPadTime = (time) => time.toString().padStart(2, '0')
    const [timeleft, setTimeleft] = useState(5*60)
    const [tori, setTori] = useState(true)
    const minutes = getPadTime(Math.floor(timeleft / 60))
    const seconds = getPadTime(timeleft - minutes * 60)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeleft((timeleft) => timeleft >= 1 ? timeleft - 1 : 0)
        }, 1000)
        if (timeleft === 0) setTori(false)
        if (timeleft == 0) {
            navigate('/')
            alert(`Вы закончили тест. Ваш результат: 30б`)
        } else {
            setTimeout(() => {
                // navigate('/result')
            }, timeleft * 1000);
        }
        return () => {
            clearInterval(interval)
        }
    }, [timeleft, tori])

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
        setLoading(true)
        setTimeleft(99999)

        setTimeout(() => {
            navigate('/result')
            setLoading(false)
        }, 2000)
        tests?.map((e) => {
            for (let i = 0; i < namee.length; i++) {
                if (namee[i].checked) {
                    const val = namee[i].value
                    setBgColor(val)
                    if (!otvetlar.includes(namee[i].value)) {
                        otvetlar.push(namee[i].value)
                    }
                    setAsd(asd + 1)
                    if (val == e.javob) {
                        otvet.push(val)
                        setResult(otvet)
                    }
                }
            }
        })
        dispatch({ type: "QUEST", payload: { questions } })

        fetch('https://638208329842ca8d3c9f7558.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', // qysi formatta yuborish
                'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
                'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
            },
            body: JSON.stringify({
                userName: selector.test[0].userName,
                pass: selector.test[0].pass,
                quest: selector.test[0].question
            })
        })
            .then((res) => res.json())
            .then((data) => console.table(data))

    }

    return (
        <div className='container'>
            {
                loading ? 
                <span className='spam'></span> :
                    <>
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
                                                                    answer: item.userId
                                                                }) :
                                                                questions ?
                                                                    questions.map((w) => {
                                                                        if (w.quest == e.id) {
                                                                            w.answer = item.userId
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
                    </>
            }
        </div>
    )
}

export default Tests