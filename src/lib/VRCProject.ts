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