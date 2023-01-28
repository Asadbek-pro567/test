import { createContext, useState } from "react";


const Context = createContext()
function Provider({children}){
    const [result, setResult] = useState(0)
    
    return(
        <Context.Provider value={{result, setResult}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}