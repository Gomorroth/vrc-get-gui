"use client"

import { GetProjectInfo, VRCProject } from "@/lib/VRCProject";
import Content from "../components/content";
import {useRouter, useSearchParams} from "next/navigation"
import BackIcon from "../../icons/arrow_back.svg"

export default function Page()
{
    const searchParam = useSearchParams();
    const projectPath = searchParam.get("path");
    const project = GetProjectInfo(projectPath);
    const router = useRouter();

    return (
        <Content header={<Header project={project!} onClick={() => router.back()}/>}>
            <div className="pt-5 pb-5 pr-5 h-full overflow-y-auto">
                <ul className="p-2 h-full bg-white rounded-xl overflow-auto">
                    
                </ul>
            </div>
        </Content>
    )
}

function Header({project, onClick} : {project : VRCProject, onClick : () => void})
{
    return (
        <div className="flex flex-row">
            <button onClick={onClick}>
                <BackIcon className="shrink-0" width={32} height={32}/>
            </button>
            <div className="flex flex-col ml-2">
                <p className="">{project?.displayName ?? "aaa"}</p>

                <p className=" text-sm font-normal ">{project?.projectPath ?? "aaa"}</p>
            </div>
        </div>
    )
}