import { invoke } from "@tauri-apps/api/tauri";

export async function ShowFolderInExploler(path: string)
{
    await invoke("show_folder", {path: path});
}