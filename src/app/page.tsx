"use client"

import SideBar from './components/sidebar'
import * as PageDefinition from "../lib/pageDefinition"
import { useSearchParams } from 'next/navigation'

export default function Home() {

  const searchParams = useSearchParams();

  const page = PageDefinition.Pages.find(x => x.name === searchParams.get("page")) ?? PageDefinition.Projects;

  return (
    <div className='flex flex-row'>
        <SideBar/>
        <div className='w-full h-screen'>
          {page.content}
        </div>
    </div>
  )
}
