"use client"

import Link from "next/link"
import Content from "../components/content"
import { Tooltip } from 'react-tooltip'

export default function Page() 
{
    return (
        <Content header={<Header/>}>
            
        </Content>
    )
}
  
function Header()
{
    return (
        <>
            <p className="ml-10 mb-5">設定</p>
        </>
    )
}