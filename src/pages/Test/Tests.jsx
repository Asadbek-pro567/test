import React, { useEffect, useState } from 'react'
import { tests } from '../../dataTest/dataTest'
import './Tests.scss'

const itemId = []
function Tests() {
    const otvet = []
    
    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState(0)
    const [colorrr, setColor] = useState(0)


    const done = (e)=>{
        e.preventDefault()
        tests?.map((e)=>{
            const namee = document.getElementsByTagName('input')
            for (let i = 0; i < namee.length; i++){
                console.log(namee.id);
                if(namee[i].checked){
                    const val = namee[i].value
                    setBgColor(val)
                    if(val == e.javob){
                        otvet.push(val)
                        console.log(otvet);
                        for(let o = 1; o <= otvet.length; o++){
                            setCount(o)
                        }
                    }
                }
            }
        })
    }

    const pusher = (e)=>{
        itemId.push(e)
        console.log(e.target);
    }
    
    useEffect(()=>{
        console.log();
    }, [colorrr])

    function checkId(chek) {
        return chek == 2
    }

  return (
    <div className='container'>
        <h1>Matem</h1>
        <p>2 : 40 : 50</p>
        <ul>
            <h5>Matem (3.1ball)</h5>
            <h6 id='demo'></h6>
            {
                tests?.map((e,i)=>(
                    <li className={pusher? 'active': ''}>{e.id}</li>
                ))
            }
        </ul>
        <ol>
            <form action="#" onSubmit={done}>
            {
                tests?.map((e,i)=>(
                    <li key={i}>
                        <h3>{e.savol}</h3>
                        <h4 name={`javob${e.id}`}>{
                            e.otvetlar.map((item)=>(
                                <>
                                <input type="radio" id={item.testId} name={e.id} value={item.otvet}/>
                                <label onClick={()=>{
                                    if(!itemId.includes(e.id))
                                    itemId.push(e.id)
                                    setColor(itemId.find((i)=> i == e.id ))
                                    setBgColor(item.testId)
                                    }} className={bgColor == item.testId? 'label__active' : ''} htmlFor={item.testId}>{item.userId}) {item.otvet}</label>
                                </>
                            ))    
                        }</h4>
                    </li>
                ))
            }
            <button type='submit'>Done!</button>
            </form>
        </ol>
        <h2>Test yakunlandi togri javoblar soni: {count * 100 / 5}%</h2>
    </div>
  )
}

export default Tests