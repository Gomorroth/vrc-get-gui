"use client"

import { ReactNode } from "react"
import IconButton from "./IconButton"

import BackIcon from "../../icons/upgrade.svg"

type Props = 
{
    title: string,
    children: ReactNode,
    button? : {content: ReactNode, onClick? : () => void}
    optional? : string | ReactNode
}

export default function Content(props: Props) 
{
    return (
        <div className="w-full h-screen pt-10 flex flex-col" >
            <div id="header" className="flex items-left flex-row">
                {props.button ? <IconButton className="ml-2 self-center w-8" icon={props.button.content} onClick={props.button.onClick}/> : <div className="w-8 ml-2"/>}
                <div className="ml-2 flex flex-col">
                    <h2 className="text-2xl font-extrabold">{props.title}</h2>
                    {
                        typeof props.optional == "string" ?
                        <p className="text-sm">{props.optional}</p> :
                        typeof props.optional == "undefined" ?
                        <div className="mb-5"/> :
                        props.optional
                    }
                </div>
            </div>
            {props.children}
        </div>
    )
  }
  