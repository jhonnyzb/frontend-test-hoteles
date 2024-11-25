import React, { useContext, useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import useCreateHotel from '../hooks/useCreateHotel';
import styles from '../styles/form-hotel.module.css';



const FormHotel = () => {

   
    const { loading, createHotel } = useCreateHotel()

    const [formData, setFormData] = useState({
        name: '',
        city: '',
        address: '',
        nit: '',
        rooms: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        createHotel(formData)
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre Hotel</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre hotel"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Nombre ciudad"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Dirección"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Nit</Form.Label>
                <Form.Control
                    type="text"
                    name="nit"
                    value={formData.nit}
                    onChange={handleInputChange}
                    placeholder="Nit"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Numero Habitaciones</Form.Label>
                <Form.Control 
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    placeholder="Numero de habitaciones" />
            </Form.Group>
           <div style={{display:'flex', justifyContent:'flex-end'}}>
             <button className={styles.btn} type="submit" disabled={loading}>
                 { !loading ? 'Enviar' :  <Spinner size='sm' animation="border" />} 
             </button>
           </div>
        </Form>
    )
}

export default FormHotel