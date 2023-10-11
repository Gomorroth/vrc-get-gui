"use client"

import { GetProjectInfos, VRCProject, VRCProjectType } from "@/lib/VRCProject"
import Content from "../components/content"
import VRCProjectItem from "../components/VRCProjectItem"
import { Tooltip } from 'react-tooltip'


export default function Projects() 
{
    return (
        <Content title="プロジェクト">
            <div className="pt-5 pb-5 pr-5 h-full overflow-y-auto">
                <ul className="p-2 h-full bg-white rounded-xl overflow-auto">
                    {GetProjectInfos().map((x, i) => <VRCProjectItem key={i} project={x}/>)}
                </ul>
            </div>

            <Tooltip id="vrcprojectitem"/>
        </Content>
    )
  }
  