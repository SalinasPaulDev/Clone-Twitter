import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  TimeAgo.addDefaultLocale(en)
  return <Component {...pageProps} />
}

export default MyApp
