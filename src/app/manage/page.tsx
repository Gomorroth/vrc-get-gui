"use client"

import { GetProjectInfo } from "@/lib/VRCProject";
import Content from "../components/content";
import {useRouter, useSearchParams} from "next/navigation"
import BackIcon from "../../icons/arrow_back.svg"

export default function Page()
{
    const searchParam = useSearchParams();
    const projectPath = searchParam.get("path");
    const project = GetProjectInfo(projectPath);
    const router = useRouter();

    return (
        <Content title={project?.displayName ?? "aaa"} button={{content: <BackIcon className="shrink-0" width={32} height={32}/>, onClick: () => router.back()}} optional={project?.projectPath}>
            <div className="pt-5 pb-5 pr-5 h-full overflow-y-auto">
                <ul className="p-2 h-full bg-white rounded-xl overflow-auto">
                    
                </ul>
            </div>
        </Content>
    )
}