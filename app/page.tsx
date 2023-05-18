import Link from 'next/link'
import styles from './page.module.css'
import MockDesign from './MockDesign'
import Button from './components/Button'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        EduStipend Task Solution by - Emmanuel ADESOKAN
        <h3>Task 1</h3>
        <p>Given the user interface mock below, identify the core components that make up the user interface.</p>
        <hr />
        <MockDesign />
        <hr />
        <ul>
          <li>Button</li>
          <li>Navigation Bar (Nav Bar)</li>
          <li>List Componet</li>
        </ul>
        <hr /><hr /><br />
        <h3>Task 2</h3>
        <p>Write React code for two of the components you identified in the UI mockup above.</p>
        <hr />
        <h5>Button</h5>
        <Button text='Button Text' />
        <h5>Nav Bar</h5>
        <Navbar />
        <hr />
        <hr />
        <h4>Task 3</h4>
        <p>Push your code to GitHub and provide us with the link to the code, so we can review it.</p>
        <hr />
        <ul>
          <Link href={"https://github.com/DrFemzy/Edustipend-prework.git"}>GitHub </Link> <br />
          <Link href={"https://edustipend-prework-eight.vercel.app/"}>Live Link</Link>
        </ul>
      </div>
    </>
  )
}
