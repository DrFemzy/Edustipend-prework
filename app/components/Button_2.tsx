import React from 'react'
import styles from "./button.module.css"
import Image from 'next/image'

export default function Button_2() {
  return (
    <div className={styles.button_2}>
      <p>Unavailable by <i>Davido</i></p>
      <Image src={"/plus.png"} alt='plus' width={10} height={10} />
    </div>
  )
}
