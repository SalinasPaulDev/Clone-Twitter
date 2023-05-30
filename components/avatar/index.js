import React from 'react'
import styles from '../../styles/Avatar.module.css'
export const AvatarContain = (props) => {
  return (
    <div className='avatarContainer'>
      <img {...props} className={styles.avatar} />
    </div>
  )
}
