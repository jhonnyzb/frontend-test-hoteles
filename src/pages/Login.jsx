import React, { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import styles from '../styles/login.module.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <section className={styles.container_main}>
        <button className={styles.btn} onClick={() => navigate('/admin')}>Administrador Hoteles</button>
      </section>
    </Container>
  )
}

export default Login