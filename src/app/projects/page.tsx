"use client"

import { GetProjectInfos, VRCProject, VRCProjectType } from "@/lib/VRCProject"
import Content from "../components/content"
import VRCProjectItem from "./components/VRCProjectItem"
import { Tooltip } from 'react-tooltip'
import { Suspense } from "react"
import LoadingSpinner from "../components/loadingSpinner"

export default function Page() 
{
    return (
        <Content header={<Header/>}>
            <Suspense fallback={<Loading/>}>
                <Projects/>
            </Suspense>
            <Tooltip id="vrcprojectitem"/>
        </Content>
    )
}
function Header()
{
    return (
        <>
            <p className="ml-10 mb-5">プロジェクト</p>
        </>
    )
}

async function Projects()
{
    const projects = await GetProjectInfos();
    return projects.map((x, i) => <VRCProjectItem key={i} project={x}/>);
}

function Loading()
{
    return (
        <div className="flex h-full justify-center items-center">
            <LoadingSpinner/>
        </div>
    )
}
