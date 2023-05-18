import React from 'react'
import styles from "./mockdesign.module.css"
import Navbar from './components/Navbar'
import Button from './components/Button'
import TrendingSongsList from './components/TrendingSongsList'

function MockDesign() {
  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.heroSection}>
            <div className={styles.heroText}>
                <h1>Make your party fun!</h1>
                <p>Create your own custom playlist today.</p>
                <Button text='Create playlist' />
            </div>
            <TrendingSongsList />
        </div>
    </div>
  )
}

export default MockDesign
