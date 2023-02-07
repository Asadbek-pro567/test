import { createContext, useState } from "react";


const Context = createContext()
function Provider2({children}){
    const [result, setResult] = useState(0)
    const [nik, setNik] = useState()
    const [res, setRes] = useState(0)
    
    return(
        <Context.Provider value={{result, setResult, nik, setNik, res, setRes}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider2}