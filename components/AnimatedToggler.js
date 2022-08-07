import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import styles from '../styles/AnimatedToggler.module.scss';

function AnimatedToggler() {

    const [toggled, setToggled] = useState(false);

    function handleClick() {
        setToggled(toggled => !toggled);
    }

    let togglerClass = toggled ? 'toggled' : 'not_toggled';

    let togglerStylesClass;

    if (togglerClass === 'toggled') {
        togglerStylesClass = styles.toggled;
    } else {
        togglerStylesClass = styles.not_toggled;
    };



    return (
        <IoCloseSharp
            onClick={handleClick}
            className={styles.toggler}
            id={togglerStylesClass}
        />

    )
}


export default AnimatedToggler;