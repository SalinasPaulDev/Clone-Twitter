import React from 'react'

export default function DTwitPage(props) {

  console.log({...props})
  return (
    <div className='appContainer'>
      <div>UnicDTwit</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params

  const apiResponse = await fetch(`http://localhost:3000/api/status/dtwits/${id}`)
  if (apiResponse.ok) {
    const props = await apiResponse.json()

    return { props }
  }
  if (res) {
    res.writeHead(301, { location: '/homePage' }).end()
  }
}
