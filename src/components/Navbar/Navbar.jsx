import React, { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuIcon = menuOpen ? 'assets/nav/closeIcon.png' : 'assets/nav/menuIcon.png';

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Punnarun</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuIcon}
                    alt='menu-button'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`} onClick={() => setMenuOpen(false)}>
                    <li><a href='#about' onClick={handleSmoothScroll}>About</a></li>
                    <li><a href='#projects' onClick={handleSmoothScroll}>Projects</a></li>
                    <li><a href='#contact' onClick={handleSmoothScroll}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
