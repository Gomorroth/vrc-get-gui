"use client"

import { VRCProject, VRCProjectType } from "@/lib/VRCProject";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import AvatarIcon from "../../icons/account_circle.svg"
import WorldIcon from "../../icons/language.svg"
import MenuIcon from "../../icons/menu.svg"
import IconButton from "./IconButton"
import OpenFolderIcon from "../../icons/folder_open.svg"

type Props = {
    project: VRCProject,
    onManageClick? : MouseEventHandler,
    onBackupClick? : MouseEventHandler,
}

export default function VRCProjectItem(props: Props)
{
    const router = useRouter();
    const {project} = props;
    return (
        <li className="w-full p-2 flex flex-row justify-between">
            <div className="inline-flex items-center shrink grow min-w-0">
                {project.projectType == VRCProjectType.Avatar ? <AvatarIcon width={40} height={40} className="shrink-0"/> : <WorldIcon width={40} height={40} className="shrink-0"/>}
                <span className="w-full ml-2 flex flex-col truncate">
                    <p className="truncate w-full  text-3xl font-extrabold">{project.displayName}</p>
                    <span className="flex items-center">
                        <p data-tooltip-id="vrcprojectitem" data-tooltip-content={project.projectPath} data-tooltip-place="bottom" className="truncate text-sm font-bold">{project.projectPath}</p>
                        <IconButton icon={<OpenFolderIcon width={16}/>} className="ml-2"/>
                    </span>
                </span>
            </div>
            <div className="ml-auto mr-8 shrink-0 self-center">
                <p>{project.updateAt?.toLocaleDateString()}</p>
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