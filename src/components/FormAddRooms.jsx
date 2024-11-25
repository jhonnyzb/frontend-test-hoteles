import React, { useContext, useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { HotelsContext } from '../context/HotelsContext';
import useAddRooms from '../hooks/useAddRooms';
import styles from '../styles/form-add-rooms.module.css';

const FormAddRooms = () => {

    const { dataTypes, hotel } = useContext(HotelsContext);
    const { loading, addRooms } = useAddRooms()

    const [formData, setFormData] = useState({
        rooms: '',
        type_accommodation: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        if (formData.type_accommodation === "")
            return
        if (formData.rooms === "")
            return
        const data = {
            rooms_permitted: hotel.rooms_permitted,
            rooms: formData.rooms,
            hotel_id: hotel.hotel_id,
            type_accommodation: formData.type_accommodation
        }
        addRooms(data)
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>N° Habitaciones</Form.Label>
                <Form.Control
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    placeholder="Habitaciones"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Tipo Alojamiento</Form.Label>
                <Form.Select
                    size="xs"
                    name="type_accommodation"
                    value={formData.type_accommodation}
                    onChange={handleSelectChange}>
                    <option value="">Selecciona un tipo de alojamiento</option>
                    {
                        dataTypes.map((item, index) =>
                            <option key={item.id} value={item.id}>{item.type.name} - {item.accommodation.name} </option>
                        )
                    }
                </Form.Select>
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className={styles.btn} type="submit" disabled={loading}>
                    {!loading ? 'Enviar' : <Spinner size='sm' animation="border" />}
                </button>
            </div>
        </Form>
    )
}

export default FormAddRooms