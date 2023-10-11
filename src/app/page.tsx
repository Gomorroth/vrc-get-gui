"use client"

import Image from 'next/image'
import { PageIDContext } from './contexts'
import { useState } from 'react'
import SideBar from './sidebar'
import * as PageDefinition from "./pageDefinition"

export default function Home() {

  const PageIDState = useState(0)
  const [pageID, setPageID] = PageIDState;

  return (
    <PageIDContext.Provider value={PageIDState}>
      <div className='flex flex-row'>
          <SideBar/>
          {PageDefinition.Pages[pageID].content}
      </div>
    </PageIDContext.Provider>
  )
}
