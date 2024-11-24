import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {
    const [state,setState] = useState(false);
    
    useEffect(()=>{
        console.log("Componente Montado ")
        return ()=>{
            console.log("Component desmontado")
        }
    },[])

    useEffect(()=>{
        console.log(state)
    },[state])
  
    return (
    <div>
            <p>{state ? "Es verdadero" :   "Es falso"}</p>
        <button  onClick={()=>{
            setState(!state)
        }}>Cambiar Estado</button>

    </div>
  )
}
