import React, { useContext, useState } from 'react'
import useFetch from './useFetch'
import { NotificacionContext } from '../context/NotificacionContext'
import { HotelsContext } from '../context/HotelsContext'
import useGetHotels from './useGetHotels'

const useCreateHotel = () => {

    const { seeNotificacion } = useContext(NotificacionContext)
    const { ShowSet, HotelsSet } = useContext(HotelsContext)
    const { fetchCreateHotel, fetchData } = useFetch()

    const [loading, setLoading] = useState(false)

    const createHotel = async (hotel) => {
        try {
            setLoading(true)
            const resp = await fetchCreateHotel(hotel)
            if (resp.errors) {
                const messagesOfError = [];
                for (const clave in resp.errors) {
                    if (resp.errors.hasOwnProperty(clave)) {
                        messagesOfError.push(...resp.errors[clave]);
                    }
                }
                const messagesConcat = messagesOfError.join(', ');
                throw new Error(messagesConcat);
            }
            const hotels = await getHotels()
            HotelsSet(hotels)
            setLoading(false)
            ShowSet(false)
            seeNotificacion('Hotel Creado con éxito', 'success')
        } catch (error) {
            setLoading(false)
            seeNotificacion(error.message, 'error')
        }
    }

    const getHotels = async () => {
        const resp = await fetchData()
        return resp
    }

    return {
        loading,
        createHotel
    }
}

export default useCreateHotel