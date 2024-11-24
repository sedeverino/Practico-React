import { useState } from "react"
import { ComponentCounter } from "./componentss/componentCounter/componentCounter"
import { FirstComponent } from "./componentss/firstComponent/firstComponent"
import { ComponentUseEffect } from "./componentss/ComponentUseEffect/componentUseEffect";
import { FormComponent } from "./componentss/FormComponent/FormComponent";
import { AppProduct } from "./componentss/AppProduct/AppProduct";


export const App = () => {
    const [enableCounter,setEnableCounter] = useState(false);
  
    return (
    <div style={{display: "flex",flexDirection: "column", gap: "2vh"}}> 
        {/* <FirstComponent text = {"Texto desde propiedades"} color = "red" fontSize={6}/>
        { enableCounter && <ComponentCounter/>}
        <button onClick={() =>{
            setEnableCounter(!enableCounter);
        }}>Mostrar u ocultar Counter</button>
        <ComponentUseEffect/>
        <FormComponent/>     */
        <AppProduct/>
        }
    </div>
  )
}
