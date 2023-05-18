import React from 'react'
import styles from "./navbar.module.css"
import Button from './Button'

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div></div>
      <div className={styles.navLinks}>
        <p>Contact Us</p>
        <Button text='Signup' />
      </div>
    </div>
  )
}
