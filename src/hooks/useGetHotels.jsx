import React, { useContext, useEffect, useState } from 'react'
import useFetch from './useFetch'
import { HotelsContext } from '../context/HotelsContext'
import { NotificacionContext } from '../context/NotificacionContext'

const useGetHotels = () => {

    const [loading, setLoading] = useState(false)
    const { fetchDataInit } = useFetch()
    const { HotelsSet, TypesSet } = useContext(HotelsContext)
    const { seeNotificacion } = useContext(NotificacionContext)

    useEffect(() => {
        const data = async () => {
            try {
                setLoading(true)
                const resp = await fetchDataInit()
                HotelsSet(resp[0])
                TypesSet(resp[1])
                setLoading(false)
                seeNotificacion('Datos obtenidos', 'success')
            } catch (error) {
                HotelsSet([])
                setLoading(false)
                seeNotificacion('Error recopilando la información,', 'error')
            }
        }
        data()
    }, [])

    return {
        loading
    }
}

export default useGetHotels