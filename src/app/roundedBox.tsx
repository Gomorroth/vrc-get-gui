import React from "react";

export default function RoundedBox({className, children} : {className? : string, children? : React.ReactNode})
{
    return (
        <div className={`${className} p-5`}>
            <div className="p-2 h-full bg-white rounded-xl">
                {children}
            </div>
        </div>
    )
}