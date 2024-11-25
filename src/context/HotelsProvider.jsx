import React, { useState } from 'react'
import { HotelsContext } from './HotelsContext'



const HotelsProvider = ({ children }) => {

    const [hotels, setHotels] = useState([])
    const [error, setError] = useState(true)
    const [show, setShow] = useState(false)
    const [titleDialog, setTitleDialog] = useState('Crear hotel')
    const [hotel, setHotel] = useState(null)
    const [dataTypes, setDataTypes] = useState([])

    const HotelsSet = (hotels) => {
        setHotels(hotels);
    };

    const ErrorSet = (error) => {
        setError(error);
    };

    const ShowSet = (flag) => {
        setShow(flag);
    };

    const TitleDialogSet = (text) => {
        setTitleDialog(text);
    };

    const HotelSet = (hotel) => {
        setHotel(hotel);
    };

    const TypesSet = (types) => {
        setDataTypes(types);
    };

    return (
        <HotelsContext.Provider value={{ hotels, HotelsSet, error, ErrorSet, show, ShowSet, titleDialog, TitleDialogSet, hotel, HotelSet, dataTypes, TypesSet }}>
            {children}
        </HotelsContext.Provider>
    )
}

export default HotelsProvider