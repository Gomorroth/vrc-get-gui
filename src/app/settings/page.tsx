"use client"

import Link from "next/link"
import Content from "../components/content"
import { Tooltip } from 'react-tooltip'

export default function Page() 
{
    return (
        <Content title="設定">
            <Link href={"/manage"}>あｄｄ</Link>
        </Content>
    )
  }
  