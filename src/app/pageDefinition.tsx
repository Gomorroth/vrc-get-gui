import ProjectsComponent from "./projects"

type Page = {
    name: string,
    displayName? : string,
    iconName : string,
    content : React.ReactNode,
};

export const Projects : Page = {
    name: "projects",
    displayName: "プロジェクト",
    iconName: "deployed_code",
    content: <ProjectsComponent/>
};

export const Settings : Page = {
    name: "settings",
    displayName : "設定",
    iconName: "settings",
    content: <>せってー</>
};

export const Pages = [Projects, Settings];