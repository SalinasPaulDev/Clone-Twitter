import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Options.module.css'
import House from '../icons/House'
import Search from '../icons/Search'
import Write from '../icons/Write'
const Options = () => {
  return (
    <div className={styles.optionsContainer}>
      <Link href='/homePage'>
        <a>
          <House />
        </a>
      </Link>
      <Link href="/Search">
        <a>
          <Search />
        </a>
      </Link>
      <Link href="/compose/d-twit">
        <a>
          <Write />
        </a>
      </Link>
    </div>
  )
}

export default Options
