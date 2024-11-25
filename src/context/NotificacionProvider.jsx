import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { NotificacionContext } from './NotificacionContext';



const NotificacionProvider = ({ children }) => {

    const seeNotificacion = (mensaje, type='info') => {
        toast[type](mensaje, {
            theme: "dark",
            autoClose: 1500,
        })
    };

    return (
        <NotificacionContext.Provider value={{ seeNotificacion }}>
            {children}
        </NotificacionContext.Provider>
    )
}

export default NotificacionProvider