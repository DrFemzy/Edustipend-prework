import React from 'react'
import styles from "./trendinglist.module.css"
import Button_2 from './Button_2'
import Button from './Button'

function TrendingSongsList() {
  return (
    <div className={styles.trendingListContainer}>
        <h3>Trending songs</h3>
        <div className={styles.songList}>
            <Button_2 />
            <Button_2 />
            <Button_2 />
            <Button_2 />
            <Button_2 />
        </div>
        <Button text='View more' />
    </div>
  )
}

export default TrendingSongsList
