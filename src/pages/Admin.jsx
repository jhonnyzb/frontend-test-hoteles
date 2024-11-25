import React, { useContext } from 'react'
import TableData from '../components/TableData';
import Dialog from '../components/Dialog';
import { HotelsContext } from '../context/HotelsContext';
import FormHotel from '../components/FormHotel';
import FormAddRooms from '../components/FormAddRooms';
import Sidebar from '../components/Sidebar';


const Admin = () => {

  const { titleDialog } = useContext(HotelsContext)

  return (
    <>
      <Sidebar>
          <TableData/>
      </Sidebar>
      <Dialog title={titleDialog}>
        {
          titleDialog === 'Crear Hotel' ?
            <FormHotel></FormHotel> :
            <FormAddRooms></FormAddRooms>
        }
      </Dialog>
    </>
  )
}

export default Admin