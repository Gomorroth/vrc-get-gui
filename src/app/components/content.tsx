"use client"

import { ReactNode } from "react"

type Props = 
{
    header: ReactNode,
    children: ReactNode,
}

export default function Content(props: Props) 
{
    return (
        <div className="w-full h-screen pt-10 flex flex-col" >
            <div id="header" className="flex items-left flex-row text-2xl font-extrabold ml-2">
                {props.header}
            </div>
            
            <div className="pt-5 pb-5 pr-5 h-full overflow-y-auto">
                <ul className="p-2 h-full bg-white rounded-xl overflow-auto">
                    
                    {props.children}
                </ul>
            </div>
        </div>
    )
    
  }
  