import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { addDTwit, fetchLatestDTwits } from '../../../firebase/client'
import useUser from '../../../hooks/useUser'
import styles from '../../../styles/HomePage.module.css'

import Options from '../../../components/Options'
import Timeline from '../../../components/Timeline'

export default function Home() {
  const [timeline, setTimeline] = useState([])

  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user === null && router.push('/Login')
  }, [user])

  useEffect(() => {
    fetchLatestDTwits()
      .then(setTimeline)
      .then((res) => console.log(res))
  }, [])

  console.log(timeline)
  return (
    <div className='appContainer'>
      <header className={styles.header}>
        <h1 className='devterTitle'>Home</h1>
      </header>
      <section className='DtwitSection'>
        {timeline.map((dtwit) => (
          <Timeline
            key={dtwit.docId}
            id={dtwit.docId}
            avatar={dtwit.data.avatar}
            img={dtwit.data.img}
            content={dtwit.data.content}
            createdAt={dtwit.createdAt}
            email={dtwit.data.email}
            userName={dtwit.data.userName}
          />
        ))}
        <Options />
      </section>
    </div>
  )
}
