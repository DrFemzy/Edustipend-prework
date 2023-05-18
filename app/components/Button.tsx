import React from 'react'
import styles from "./button.module.css"

export interface Props {
    text: string
}

function Button(props: Props) {
  return (
    <button className={styles.button}>
      {props.text}
    </button>
  )
}

export default Button
