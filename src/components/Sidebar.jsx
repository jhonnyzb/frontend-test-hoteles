import { useEffect, useState } from 'react';
import styles from '../styles/sidebar.module.css';
import { Link, useNavigate } from 'react-router-dom';


const Sidebar = ({ children }) => {

    const navigate = useNavigate();

    // Estado para almacenar el control del sidebar
    const [isToggled, setIsToggled] = useState(true);

    // Cierra el sidebar de la ventana cuando cambia el tamaño a mobiles
    useEffect(() => {
        const handleResize = () => {
            window.innerWidth < 768 ? setIsToggled(false) : setIsToggled(true);
        };

        // Añadir el event listener para el redimensionamiento de la ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleClick = (e) => {
        e.preventDefault();
        setIsToggled(!isToggled);
    };

    return (
        <div className={`${styles.wrapper} ${isToggled ? styles.toggled : ''}`}>
            <div className={styles.sidebar_wrapper}>
                <ul className={styles.sidebar_nav}>
                    <li className={styles.sidebar_brand}>
                        <span> Administrador hoteles</span>
                    </li>
                    <li>
                        <span>Crear Hoteles</span>
                    </li>
                    <li>
                        <span onClick={() => navigate('/')} >Cerrar Sesión</span>
                    </li>
                </ul>
            </div>

            <div className={styles.page_content_wrapper}>
                <div className="container-fluid">
                    {children}
                    <button className={styles.btn_toggle} onClick={handleClick}>Menu Lateral</button>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
