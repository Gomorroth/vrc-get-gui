// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;



fn main() {
  tauri::Builder::default()
    .plugin(tauri_plugin_store::Builder::default().build())
    .invoke_handler(tauri::generate_handler![
      command::show_folder,
      command::register_project,
      command::get_registered_projects
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
