"use client"

import RoundedBox from "./roundedBox";
import IconButton from "./IconButton";
import * as PageDefinition from "../../lib/pageDefinition"
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function SideBar()
{
    const router = useRouter();
    const pathName = usePathname();

    const current = PageDefinition.Pages.find(x => pathName.includes(x.name));

    return (
        <RoundedBox className="w-auto h-screen shrink-0">
            <h1 className="text-3xl ml-4 mr-16 mt-3 font-extrabold">VRC-GET-GUI</h1>
                <div className="flex flex-col px-4 items-baseline w-auto text-center grow">
                    {PageDefinition.Pages.filter(x => !x.hidden).map((x, i) => 
                       {
                        return <IconButton key={i} 
                        className={`mt-8 text-lg font-extrabold items-center w-full pb-2 transition-colors duration-500 ease-in-out border-b-2 
                        ${x.name == (current?.group ?? current?.name) && " border-primary"}`}
                        icon={x.icon} 
                        onClick={() => router.push(`/${x.name}`)}
                        >{x.displayName}</IconButton>
                       }
                    )}
                </div>
        </RoundedBox>
    )
}