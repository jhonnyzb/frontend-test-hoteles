import React, { useContext } from 'react'
import { Table, Button, Image } from 'react-bootstrap';
import { HotelsContext } from '../context/HotelsContext';
import useGetHotels from '../hooks/useGetHotels';
import Loading from './Loading';
import styles from '../styles/table-data.module.css';


const TableData = () => {

    const { hotels, ShowSet, TitleDialogSet, HotelSet } = useContext(HotelsContext)
    const { loading } = useGetHotels();

    const handle = (title, hotel = {}) => {
        HotelSet(hotel)
        TitleDialogSet(title)
        ShowSet(true)
    }


    return (
        <>
            <div className={styles.contain_btn}>
                <button className={styles.btn_toggle} onClick={() => handle('Crear Hotel')}>Crear Hotel</button>
            </div>
            <br />
            <Table striped hover responsive>
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th className={styles.header_table}>#</th>
                        <th className={styles.header_table}>Imagen</th>
                        <th className={styles.header_table}>Nombre</th>
                        <th className={styles.header_table}>Ciudad</th>
                        <th className={styles.header_table}>Dirección</th>
                        <th className={styles.header_table}>Nit</th>
                        <th className={styles.header_table}>Total Habitaciones</th>
                        <th className={styles.header_table}>Habitaciones Configuradas</th>
                        <th className={styles.header_table}>Agregar Habitaciones</th>
                    </tr>
                </thead>
                {
                    !loading ?
                        <tbody>
                            <tr></tr>
                            {
                                hotels.map((item, index) =>
                                    <tr key={item.id} className={styles.body_row} >
                                        <td className={styles.body_text}>{index + 1}</td>
                                        <td> <Image width='80' height='80' src="https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg" roundedCircle /></td>
                                        <td className={styles.body_text}>{item.name}</td>
                                        <td className={styles.body_text}>{item.city}</td>
                                        <td className={styles.body_text}>{item.address}</td>
                                        <td className={styles.body_text}>{item.nit}</td>
                                        <td className={styles.body_text}>{item.Habitaciones}</td>
                                        <td className={styles.body_text}>{item.hotel_type_accommodation.length}</td>
                                        <td>
                                            <button className={styles.btn_toggle} onClick={() => handle('Crear habitaciones', { hotel_id: item.id, rooms_permitted: item.Habitaciones })}>+</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                        :
                        <tbody>
                            <tr style={{ height: '300px' }}>
                                <td colSpan={9} style={{ textAlign: 'center' }}>
                                    <div className={styles.contain_loading}>
                                        <div>
                                            <Loading/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                }
            </Table>

        </>
    )
}

export default TableData