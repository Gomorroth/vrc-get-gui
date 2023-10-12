"use client"

import { ReactNode } from "react";

import ProjectIcon from "../icons/deployed_code.svg"
import SettingIcon from "../icons/settings.svg"
import LogIcon from "../icons/description.svg"

type Page = {
    name: string,
    group? : string,
    displayName? : string,
    icon? : ReactNode,
    hidden? : boolean
};

export const Projects : Page = {
    name: "projects",
    displayName: "プロジェクト",
    icon: <ProjectIcon/>,
};

export const Settings : Page = {
    name: "settings",
    displayName : "設定",
    icon: <SettingIcon/>,
}

export const Log : Page = {
    name: "log",
    displayName: "ログ",
    icon: <LogIcon/>
}

export const Manage : Page = {
    name: "manage",
    group: "projects",
    hidden: true,
}

export const Pages = [Projects, Settings, Log, Manage];