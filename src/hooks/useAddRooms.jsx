import React, { useContext, useState } from 'react'
import useFetch from './useFetch'
import { NotificacionContext } from '../context/NotificacionContext'
import { HotelsContext } from '../context/HotelsContext'

const useAddRooms = () => {

    const { seeNotificacion } = useContext(NotificacionContext)
    const { ShowSet, HotelsSet } = useContext(HotelsContext)
    const { fetchData, fetchCreateRooms } = useFetch()
    const [loading, setLoading] = useState(false)

    const addRooms = async (rooms) => {
        try {
            setLoading(true)
            const resp = await fetchCreateRooms(rooms)
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
            seeNotificacion('Habitaciones adicionadas con éxito', 'success')
        } catch (error) {
            setLoading(false)
            seeNotificacion(error.message, 'error')
        }
    }

    const getHotels = async () => {
        const resp = await fetchData()
        return resp
    }

  return{
    loading,
    addRooms
  }
}

export default useAddRooms