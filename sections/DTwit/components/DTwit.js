import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../../../components/Button'
import useUser from '../../../hooks/useUser'
import btnStyles from '../../../styles/Buttons.module.css'
import txtStyles from '../../../styles/DTwit.module.css'
import RowBack from '../../../components/icons/RowBack'
import { addDTwit, uploadImage } from '../../../firebase/client'
import Options from '../../../components/Options'
import clsx from 'clsx'
import { getDownloadURL } from 'firebase/storage'
import { AvatarContain } from '../../../components/avatar'

export default function Dtwit() {
  const [message, setMessage] = useState('')
  const [onDrag, setOnDrag] = useState(false)
  const [task, setTask] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)
  const [avatarUser, setAvatarUser] = useState('')

  const user = useUser()
  const router = useRouter()

console.log(user)

useEffect(() => {
  if(!user) return
  setAvatarUser(user.avatar)
}, [user])

  useEffect(() => {
    if(task) {
      const onUpdating = () => {}
      const onError = () => {}
      const onComplete = () => {
        getDownloadURL(task.snapshot.ref).then((downloadUrl) => {
          setImgUrl(downloadUrl)
        })
      }

      task.on('state_changed', onUpdating, onError, onComplete)
    }

  }, [task])


  const handleChange = ({ target }) => {
    setMessage(target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addDTwit({
      img: imgUrl,
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      email: user.email,
      userName: user.userName
    }).then(router.push('/homePage'))
  }

  const handleDragEnter = () => {
    setOnDrag(true)
  }

  const handleDragLeave = () => {
    setOnDrag(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setOnDrag(false)
    const imageToUpload = e.dataTransfer.files[0]

    const task = uploadImage(imageToUpload)
    setTask(task)

  }

  useEffect(() => {
    user === null && router.push('/')
  }, [user])

  const buttonDisabled = !message.length

  return (
    <div className='appContainer'>
      <form onSubmit={handleSubmit}>
        <div className={txtStyles.container}>
          <div style={{marginTop: '10px'}}>
            <AvatarContain src={avatarUser}/>
          </div>
        <div className={txtStyles.sectionDTwit}>     
          <textarea
            value={message}
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            placeholder='¿Que estas pensando?'
            className={clsx(
              txtStyles.textAreaDtwit,
              onDrag && txtStyles.borderActive
            )}
          ></textarea>
          
            {imgUrl && (
            <div className={txtStyles.imageContainer}>
              <img src={imgUrl} className={txtStyles.image}/>
              <button onClick={() => setImgUrl(null)} className={txtStyles.closeImage}>X</button>
            </div>
            )}
          
          <Button disabled={buttonDisabled} className={clsx(btnStyles.dtwitearBtn, txtStyles.btn)}>
            Dtwitear
          </Button>
        </div>
        </div>
      </form>
      <Options />
    </div>
  )
}
