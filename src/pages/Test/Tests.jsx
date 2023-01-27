import React, { useState } from 'react'
import { tests } from '../../dataTest/dataTest'

function Tests() {
    const otvet = []
    const [count, setCount] = useState(0)

    const done = (e)=>{
        e.preventDefault()
        tests?.map((e)=>{
            const namee = document.getElementsByName(e.id)
            for (let i = 0; i < namee.length; i++){
                if(namee[i].checked){
                    const val = namee[i].value
                    if(val == e.javob){
                        otvet.push(val)
                        for(let o = 1; o <= otvet.length; o++){
                            setCount(o)
                        }
                    }
                }
            }
        })
    }

  return (
    <div>
        <h1>Test</h1>
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
                                <label htmlFor={item.testId}>{item.otvet}</label>
                                </>
                            ))    
                        }</h4>
                    </li>
                ))
            }
            <button type='submit'>Done!</button>
            </form>
        </ol>
        <h2>Test yakunlandi togri javoblar soni: {count}</h2>
    </div>
  )
}

export default Tests