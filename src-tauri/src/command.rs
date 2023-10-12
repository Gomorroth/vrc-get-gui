use std::{path::{PathBuf, Path}, process::Command};
use serde_json::json;
use tauri::{Wry};
use tauri_plugin_store::{with_store, StoreCollection};


#[derive(serde::Serialize, serde::Deserialize)]
pub struct VRCProject {
  #[serde(rename = "displayName")]
  display_name: String,
  #[serde(rename = "projectPath")]
  project_path: String,
  
  #[serde(rename = "projectType")]
  project_type: i8,
}


#[tauri::command]
pub async fn show_folder(path: String) -> Result<(), String> {
  return Command::new("explorer")
  .arg(path)
  .spawn()
  .map(|_| ())
  .map_err(|x| x.to_string());
}

#[tauri::command]
pub async fn register_project(app_handle: tauri::AppHandle, stores: tauri::State<'_, StoreCollection<Wry>>, project_path: String) -> Result<(), String> 
{
  return with_store(app_handle, stores, PathBuf::from("project.json"), 
  |store| 
  {
    return match store.insert(project_path, json!(())) {
      Ok(_) => store.save(),
      Err(e) => Err(e)
    };
  }).map_err(|x| x.to_string());
}

#[tauri::command]
pub async fn get_registered_projects(app_handle: tauri::AppHandle, stores: tauri::State<'_, StoreCollection<Wry>>) -> Result<Vec<VRCProject>, String> 
{
  let entries = match with_store(app_handle, stores, PathBuf::from("project.json"), |store| Ok(store.entries().map(|x| x.0.to_owned()).collect::<Vec<String>>()))
  {
    Ok(result) => result,
    Err(e) => return Err(e.to_string())
  };

  let mut list : Vec<VRCProject> = Vec::new();

  for x in entries {
    let path = Path::new(x.as_str());
    
    list.push(VRCProject {
      display_name: path.file_name().unwrap().to_str().unwrap().to_string(),
      project_path: x,
      project_type: 1
    });
  }

  return Ok(list);
}

#[tauri::command]
pub async fn get_project_info(project_path: String) -> Result<VRCProject, String> 
{
    let path = Path::new(project_path.as_str());
    
    return Ok(VRCProject {
      display_name: path.file_name().unwrap().to_str().unwrap().to_string(),
      project_path: project_path,
      project_type: 1
    });
}