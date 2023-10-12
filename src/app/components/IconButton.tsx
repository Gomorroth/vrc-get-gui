import React, { MouseEventHandler, ReactNode } from "react";

export type Props = {
    icon : ReactNode
    className? : string
    onClick? : MouseEventHandler<HTMLButtonElement>
    children? : React.ReactNode
};

export default function IconButton(props: Props)
{
    return (
        <button className={`${props.className} flex`} onClick={props.onClick}>
            {props.icon}
            <span className="ml-2">
                {props.children}
            </span>
        </button>
    );    
}