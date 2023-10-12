"use client"

import { Store } from "tauri-plugin-store-api";
import { invoke } from "@tauri-apps/api/tauri";

export type VRCProject = 
{
    displayName : string,
    projectPath : string,
    projectType : number,
    updateAt? : Date
};

export enum VRCProjectType
{
    Unknown = 0,
    Avatar = 1,
    World = 2
};

export const ProjectData = new Store("project.dat");

export async function RegisterProject(projectPath: string) 
{
    await invoke('register_project', { projectPath: projectPath});    
}

export async function GetRegisteredProjects() : Promise<VRCProject[]>
{
    return await invoke('get_registered_projects');
};

export function GetProjectInfo(projectPath : string | null) : VRCProject | null
{
    if (!projectPath)
        return null;
    return TestProjects.find(x => x.projectPath == projectPath) ?? null;
}

export const TestProjects : VRCProject[] = 
[
    {
        displayName : "Avatar",
        projectPath : "D:\\UnityProjects\\Avatar",
        projectType : VRCProjectType.Avatar,
        updateAt: new Date("2023/10/12"),
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
        updateAt: new Date("2023/10/10"),
    },
    
    {
        displayName : "プロジェクト",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknow2n",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/01"),
    },
    
    {
        displayName : "Unknown2",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknown",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/12 12:21"),
    },
    
    {
        displayName : "Unknown3",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknown",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/11"),
    },
    
    {
        displayName : "Unknown4",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknown",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/11"),
    },
    
    {
        displayName : "Unknown5",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknown",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/11"),
    },
    
    {
        displayName : "Unknown6",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknown",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/11"),
    },
]