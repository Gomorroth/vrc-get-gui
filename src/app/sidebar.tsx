import { useContext } from "react";
import { PageIDContext } from "./contexts";
import RoundedBox from "./roundedBox";
import SVGIcon from "./components/SVGIcon";
import IconButton from "./components/IconButton";
import * as PageDefinition from "./pageDefinition"

export default function SideBar()
{
    const [pageID, setPageID] = useContext(PageIDContext)!;

    return (
        <RoundedBox className="w-auto h-screen shrink-0">
            <h1 className="text-3xl ml-4 mr-16 mt-3 font-extrabold">VRC-GET-GUI</h1>
                <div className="flex flex-col pl-4 items-baseline w-auto text-center">
                    {PageDefinition.Pages.map((x, i) => <IconButton key={i} className="mt-8 text-xl font-bold items-center" name={x.iconName} onClick={() => setPageID(i)}>{x.displayName}</IconButton>)}
                </div>
        </RoundedBox>
    )
}