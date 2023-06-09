import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Main() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/Login')
  }, [])

  return (
    <div className='appContainer'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main></main>
    </div>
  )
}
