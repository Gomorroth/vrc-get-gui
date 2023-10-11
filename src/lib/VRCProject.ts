export type VRCProject = 
{
    displayName : string,
    projectType : VRCProjectType,
    projectPath : string,
    updateAt? : Date
};

export enum VRCProjectType
{
    Unknown,
    Avatar,
    World
};

export function GetProjectInfos() : VRCProject[]
{
    return TestProjects;
};

export function GetProjectInfo(projectPath : string | null) : VRCProject | null
{
    if (!projectPath)
        return null;
    return TestProjects.find(x => x.projectPath == projectPath) ?? null;
}

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
    
    {
        displayName : "プロジェクト",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknow2n",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/11"),
    },
    
    {
        displayName : "Unknown2",
        projectPath : "D:\\UnityProjects\\aaaaaaaaaaaaaaaa\\Unknown",
        projectType : VRCProjectType.Unknown,
        updateAt: new Date("2023/10/11"),
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