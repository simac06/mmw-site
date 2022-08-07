import React from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import '../public/images/whiteLogo.png'
import { FaFacebookSquare } from 'react-icons/fa';

function Header() {

    // When the state of the toggler is true, add the active class to the nav
    const [toggled, setIsToggled] = useState(false);

    function handleClick() {
        setIsToggled(toggled => !toggled);
    }

    let togglerState = toggled ? 'toggled' : 'not_toggled';

    let togglerAnimationClass;
    let navToggleClass;

    if (togglerState === 'toggled') {
        togglerAnimationClass = styles.toggled;
        navToggleClass = styles.nav_active;
    } else {
        togglerAnimationClass = styles.not_toggled;
        navToggleClass = styles.nav_inactive;
    };



    return (
        <header className={styles.header}>
            <div className={styles.desktop_logo_container}>
                <Link href="/">
                    <a>
                        <picture className={styles.main_logo_container}>
                            <source srcSet="../images/whiteLogo.png" type="image/png" />
                            <img className={styles.main_logo} src="../images/whiteLogo.png" alt="logo" />
                        </picture>
                    </a>
                </Link>
            </div>
            <nav className={navToggleClass}>



                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link href="/about.js"><a>About</a></Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="../pages/artists.js"><a>Artists</a></Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="../pages/music.js"><a>Music</a></Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="../pages/events.js"><a>Events</a></Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="../pages/shop.js"><a>Shop</a></Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="../pages/contact.js"><a>Contact</a></Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.social_icons_container}>
                <div className={styles.social_icons}> <FaFacebookSquare /> </div>
                <div className={styles.social_icons}> <FaFacebookSquare /> </div>
                <div className={styles.social_icons}> <FaFacebookSquare /> </div>
            </div>
            <div className={styles.toggler_container}>

                <IoCloseSharp
                    onClick={handleClick}
                    className={styles.toggler}
                    id={togglerAnimationClass}
                />
            </div>

        </header>
    )
}

export default Header