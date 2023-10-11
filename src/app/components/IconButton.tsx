import React, { MouseEventHandler } from "react";
import SVGIcon, { Props as SVGIconProps } from "./SVGIcon";

export type Props = {
    onClick? : MouseEventHandler<HTMLButtonElement>
    children? : React.ReactNode
};

export default function IconButton(props: Props & SVGIconProps)
{
    return (
        <button className={`${props.className} flex`} onClick={props.onClick}>
            <SVGIcon name={props.name}/>
            <span className=" ml-2">
                {props.children}
            </span>
        </button>
    );    
}