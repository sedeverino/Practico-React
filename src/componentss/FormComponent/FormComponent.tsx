import { ChangeEvent, useState } from "react";
import { useForm } from "../../hooks/UseForns";

export const FormComponent = () => {
    
    const {values,handleChange,resetForm} = useForm({
        email:'',
        nombre:'',
        edad: 0,
    })
    
    const {email, nombre ,edad}= values;

    const handleSubmitForm = ()=>{
        console.log(values)
    }
    const handleResetForm = ()=>{
        resetForm();
    }

    return (
    <div>
        <div>
            <h2>
                Formularios
            </h2>
        </div>
        <div style={{display: "flex",flexDirection: "column",gap:"2vh"}}>
            <input name="email" value={email} onChange={handleChange} type="email" placeholder="example@example"/>
            <input name="nombre" value={nombre} onChange={handleChange} type="text" placeholder="Nombre" />
            <input name="edad" value={edad} onChange={handleChange} type="number" placeholder="edad" />
        </div>
        <div> 
            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={handleResetForm}> Resetear </button>
        </div>
    </div>
  )
}
