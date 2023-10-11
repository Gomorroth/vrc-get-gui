"use client"

import { ReactNode } from "react"

export default function Content({title, children} : {title: string, children: ReactNode}) 
{
    return (
        <div className="w-full h-full pt-10 flex flex-col" >
            <div id="header">
                <h2 className="text-2xl font-extrabold ml-4">{title}</h2>
            </div>
            {children}
        </div>
    )
  }
  