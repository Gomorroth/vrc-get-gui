"use client"

import { VRCProject, VRCProjectType } from "@/lib/VRCProject"
import Content from "./content"
import VRCProjectItem from "./VRCProjectItem"
import { Tooltip } from 'react-tooltip'

const TestProjects : VRCProject[] = 
[
    {
        displayName : "Avatar",
        projectPath : "D:\\UnityProjects\\Avatar",
        projectType : VRCProjectType.Avatar,
        updateAt: new Date("2023/10/11"),
    },
    
    {
        displayName : "World",
        projectPath : "D:\\UnityProjects\\World",
        projectType : VRCProjectType.World,
        updateAt: new Date("2023/10/11"),
    },
    
    {
        displayName : "Unknown",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknown",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/11"),
    },
]

export default function Projects() 
{
    return (
        <Content title="プロジェクト">
            <div className="mt-6 pr-7">
                <li className="w-full flex flex-row justify-between">
                    <div className="grow">
                    <p className="ml-16 text-xl font-bold">名前</p>
                    </div>
                    <div className="ml-auto mr-8 shrink-0 self-center">
                    <p className="ml-32 text-xl font-bold">最後に開いた日時</p>
                    </div>
                    <div className="ml-auto shrink-0 w-[443.69px]">
                    </div>
                </li>
            </div>

            <div className="pt-5 pb-5 pr-5 h-full">
                <ul className="p-2 h-full bg-white rounded-xl">
                    {TestProjects.map((x, i) => <VRCProjectItem key={i} project={x}/>)}
                </ul>
            </div>

            <Tooltip id="vrcprojectitem"/>
        </Content>
    )
  }
  