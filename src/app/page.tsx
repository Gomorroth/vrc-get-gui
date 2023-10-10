import Image from 'next/image'
import { PageIDContext } from './contexts'
import { useState } from 'react'

export default function Home() {

  const PageIDState = useState(0)

  return (
    <PageIDContext.Provider value={PageIDState}>

    </PageIDContext.Provider>
  )
}
