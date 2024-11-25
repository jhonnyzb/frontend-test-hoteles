import React, { useContext } from 'react'
import { HotelsContext } from '../context/HotelsContext'
import { Button, Modal } from 'react-bootstrap'
import styles from '../styles/dialog.module.css'

const Dialog = ({ children, title = 'Crear Hotel' }) => {


    const { show, ShowSet } = useContext(HotelsContext)

    return (
        <Modal
            size='lg'
            show={show}
            onHide={() => ShowSet(false)}
            centered
        >
            <Modal.Header closeButton style={{backgroundColor:'#082032'}}>
                <Modal.Title className={styles.title}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default Dialog