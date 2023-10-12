"use client"

import { VRCProject, VRCProjectType } from "@/lib/VRCProject";
import { MouseEventHandler, ReactNode } from "react";
import { useRouter } from "next/navigation";

import AvatarIcon from "@/icons/account_circle.svg"
import WorldIcon from "@/icons/language.svg"
import MenuIcon from "@/icons/menu.svg"
import OpenFolderIcon from "@/icons/folder_open.svg"
import UnknownIcon from "@/icons/help.svg"
import IconButton from "../../components/IconButton"

import "./VRCProjectItem.css"

type Props = {
    project: VRCProject,
    onManageClick? : MouseEventHandler,
    onBackupClick? : MouseEventHandler,
}

const icons = [
    <UnknownIcon width={40} height={40} className="shrink-0"/>,
    <AvatarIcon width={40} height={40} className="shrink-0"/>,
    <WorldIcon width={40} height={40} className="shrink-0"/>,
]

export default function VRCProjectItem(props: Props)
{
    const router = useRouter();
    const {project} = props;
    return (
        <li className="w-full p-2 flex flex-row justify-between">
            <div className="inline-flex items-center shrink grow min-w-0">
                {icons[project.projectType]}
                <span className="w-full ml-2 flex flex-col truncate">
                    <p className="truncate w-full  text-3xl font-extrabold">{project.displayName}</p>
                    <span className="flex items-center">
                        <p 
                        className="truncate text-xs font-bold"
                        data-tooltip-id="vrcprojectitem"
                        data-tooltip-content={project.projectPath}
                        data-tooltip-place="bottom">
                            {project.projectPath}
                        </p>
                        <IconButton icon={<OpenFolderIcon width={16}/>} className="ml-2"/>
                    </span>
                </span>
            </div>
            <div className="ml-auto mr-8 shrink-0 self-center min-w-[130px] text-base">
                <DateComponent date={project.updateAt}/>
            </div>
            <div className="ml-auto shrink-0 self-center">
                <button className=" border rounded-3xl py-1 px-8 text-center font-extrabold border-primary text-white bg-primary " onClick={() => router.push(`/manage?path=${project.projectPath}`)}>パッケージを管理</button>
                <button className=" border rounded-3xl py-1 px-7 text-center font-extrabold border-black ml-2">バックアップを作成</button>
            </div>
            <div className="ml-2 shrink-0 self-center">
                <button><MenuIcon width={32} height={32}/></button>
            </div>
        </li>
    );
}

function DateComponent({date} : {date? : Date})
{
    if (!date)
        return <p>不明</p>;
    
    const OneSecond = 1000;
    const OneMinute = OneSecond * 60;
    const OneHour = OneMinute * 60;
    const OneDay = OneHour * 24;
    const diff = Date.now() - date.getTime();

    const dayDiff = Math.floor(diff / OneDay);
    if (dayDiff == 0)
    {
        const hourDiff = Math.floor(diff / OneHour);
        if (hourDiff == 0)
        {
            const minuteDiff = Math.floor(diff / OneMinute);
            if (minuteDiff == 0)
                return <p>現在</p>;
            return <p><b>{minuteDiff}</b>分前</p>;
        }
        return <p><b>{hourDiff}</b>時間前</p>;
        
    }
    else if (dayDiff <= 7)
    {
        return  <p><b>{dayDiff}</b>日前</p>;
    }
    return <p>
        <b>{date.getFullYear()}</b>年
        <b>{date.getMonth() + 1}</b>月
        <b>{date.getDate()}</b>日
        </p>;
}