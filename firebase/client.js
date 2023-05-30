import { initializeApp,getApps } from 'firebase/app'
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  getDocs,
  orderBy,
  query
} from 'firebase/firestore'
import {getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, uploadString} from 'firebase/storage'
import { useState } from 'react'

const firebaseConfig = {
  apiKey: 'AIzaSyBqe99njQfVM655Zl4trILqvVyorFHxkBE',
  authDomain: 'devter-5b3cc.firebaseapp.com',
  projectId: 'devter-5b3cc',
  storageBucket: 'devter-5b3cc.appspot.com',
  messagingSenderId: '897200263062',
  appId: '1:897200263062:web:bf8a0fd080977c2d6457b7',
  measurementId: 'G-RKBQQJ6YM2'
}


  const app = !getApps().length && initializeApp(firebaseConfig)
  

const auth = getAuth(app)

const mapUserFromFirebase = (userResponse) => {
  if (userResponse) {
    const { email, photoURL, displayName, uid } = userResponse

    return {
      avatar: photoURL,
      userName: displayName,
      email,
      uid
    }
  } else {
    return null
  }
}

const db = getFirestore(app)
const storage = getStorage(app)

export const addDTwit = async ({
  avatar,
  userId,
  userName,
  content,
  email,
  img
}) => {
  try {
    await addDoc(collection(db, 'dtwit'), {
      avatar,
      userName,
      content,
      email,
      userId,
      img,
      createdAt: Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharedCount: 0
    })
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}


export const fetchLatestDTwits = async () => {
  return await getDocs(
    query(collection(db, 'dtwit'), orderBy('createdAt', 'desc'))
  ).then((snapshot) => {
    return snapshot.docs.map((doc) => {
      const data = doc.data()
      const { createdAt } = data
      const docId = doc.id

      const normalizeDate = new Date(createdAt.seconds) * 1000
      return {
        data,
        docId,
        createdAt: normalizeDate
      }
    })
  })
}


export const onAuthStateChange = async (onChange) => {
  return await auth.onAuthStateChanged((user) => {
    const normalizeUser = mapUserFromFirebase(user)
    onChange(normalizeUser)
  })
}

const loginWithGitHub = async () => {
  const githubProvider = new GithubAuthProvider()
  return signInWithPopup(auth, githubProvider)
    .then(mapUserFromFirebase)
    .catch((err) => console.log(err))
}

export default loginWithGitHub

export const uploadImage = (file) => {

  const metadata = {
    contentType: 'image/jpeg'
  }
  const storageRef  = ref(storage, `images/${file.name}`, metadata)

  const uploadTask = uploadBytesResumable(storageRef, file)


 return uploadTask
}
