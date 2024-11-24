import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../../../hooks/UseForns';

interface IPropsFormProduct {
    handleAddProduct: Function;
}


export const FormProduct: FC<IPropsFormProduct>= ({handleAddProduct}) => {
  const {handleChange,values,resetForm} = useForm({
    nombre:'',
    imagen:'',
    precio:0,
  })

  const handleSubmitForm = ()=>{
    handleAddProduct(values);
    resetForm;
  }


    return (
    <Form className="mt-4">
      <Form.Group  controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type='text' name='imagen' placeholder='Ingrese imagen del produucto' value={values.imagen} onChange={handleChange}/>
      </Form.Group>
      <Form.Group  controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' name='nombre' placeholder='Ingrese nombre producto' value={values.nombre} onChange={handleChange}/>
      </Form.Group>
      <Form.Group  controlId="formNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control type='number' name='precio' placeholder='Ingrese precio del  producto' value={values.precio} onChange={handleChange}/>
      </Form.Group>
      <div>
        <Button  onClick={handleSubmitForm}  className='d-flex justify-content-center mt-4' variant='primary'>
            Enviar producto 
        </Button>
      </div>
    </Form>
  );
  
}
