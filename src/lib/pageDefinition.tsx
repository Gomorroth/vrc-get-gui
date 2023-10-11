"use client"

import { ReactNode } from "react";
import ProjectsComponent from "../app/components/projects"
import SettingsComponent from "../app/components/settings"

import ProjectIcon from "../icons/deployed_code.svg"
import SettingIcon from "../icons/settings.svg"


type Page = {
    name: string,
    displayName? : string,
    icon : ReactNode,
    content : React.ReactNode,
};

export const Projects : Page = {
    name: "projects",
    displayName: "プロジェクト",
    icon: <ProjectIcon/>,
    content: <ProjectsComponent/>
};

export const Settings : Page = {
    name: "settings",
    displayName : "設定",
    icon: <SettingIcon/>,
    content: <SettingsComponent/>
}

export const Pages = [Projects, Settings];