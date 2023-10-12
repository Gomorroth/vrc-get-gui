"use client"

import { GetRegisteredProjects, RegisterProject } from "@/lib/VRCProject"
import Content from "../components/content"
import { ReactNode, Suspense, useEffect, useState } from "react"
import LoadingSpinner from "../components/loadingSpinner"
import OpenFolderIcon from "@/icons/folder_open.svg"
import { open } from '@tauri-apps/api/dialog';
import VRCProjectItem from "./components/VRCProjectItem"

export default function Page() 
{
    const [projects, setProjects] = useState<ReactNode | undefined>();

    useEffect(() => 
    {
        (async () => 
        {
            const projects = await GetRegisteredProjects();
            setProjects(projects.map((x, i) => <VRCProjectItem key={i} project={x}/>));
        })();
    }, []);

    return (
        <Content header={<Header/>}>
            <Suspense fallback={<Loading/>}>
                {projects ?? <Loading/>}
            </Suspense>
        </Content>
    )
}

function Header()
{
    return (
        <div className="flex flex-row w-full  h-8  mb-5 items-center">
            <p className="ml-10">プロジェクト</p>

            <div role="searchBox" className="ml-8 w-10 text-base">
                <input type="text" className="rounded-md p-1"/>
            </div>

            <button className="h-8 ml-auto text-sm border rounded-3xl py-1 px-8 text-center font-extrabold border-primary text-white bg-primary" onClick={() => alert("ade")}>新しいプロジェクト</button>

            <button className="ml-2 h-8 items-center" data-tooltip-id="tooltip" data-tooltip-content="既存のプロジェクトを開く" data-tooltip-place="bottom"
                    onClick={() => OpenExistProject()}>
                <OpenFolderIcon width={32}/>
            </button>
        </div>
    )
}

async function OpenExistProject()
{
    const selected = await open({
        directory: true,
    });
    
    if (!selected || typeof selected !== "string" )
        return;

    await RegisterProject(selected);
    window.location.reload();
}

function Loading()
{
    return (
        <div className="flex h-full justify-center items-center">
            <LoadingSpinner/>
        </div>
    )
}
