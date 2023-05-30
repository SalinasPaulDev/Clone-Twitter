import React from 'react'
import styles from '../../styles/Timeline.module.css'
import { AvatarContain } from '../../components/avatar'
import ReactTimeAgo from 'react-time-ago'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Timeline = ({ avatar, userName, email, createdAt, content, img, id }) => {
  const router = useRouter()

  const handleArticleClick = (e) => {
    e.preventDefault()
    router.push('/status/[id]', `/status/${id}`)
  }

  return (
    <article className={styles.bodyHome} onClick={handleArticleClick}>
      <AvatarContain src={avatar} alt={userName} />
      <div style={{ marginBottom: '15px' }}>
        <div className={styles.headContent}>
          <div className={styles.devitHead}>
            <div className={styles.userDevitInfo}>
              <h4>{userName}</h4>
              <Link href={`status/${id}`}>
                <ReactTimeAgo
                  timeStyle='twitter'
                  date={createdAt}
                  className={styles.userDevitDate}
                  locale='en-US'
                />
              </Link>
            </div>
            <p className={styles.userEmail}>{email}</p>
          </div>
        </div>
        <blockquote>
          {content}
          {img && <img src={img} className={styles.img} />}
        </blockquote>
      </div>
    </article>
  )
}

export default Timeline
