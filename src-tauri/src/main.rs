// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
extern crate winapi;
use std::mem::zeroed;
use std::os::windows::prelude::*;
use winapi::shared::minwindef::{BOOL, DWORD, HWND, LPARAM, LPVOID, UINT};
use winapi::um::winuser::{
    FindWindowExA, GetClassNameA, GetWindowTextA, IsWindowVisible, ShowWindow,
};

fn enum_windows_callback() {
    // Find all windows on the system
    let mut hwnd = zeroed();
    while FindWindowExA(None, hwnd, None, None).is_some() {
        hwnd = Some(hwnd.unwrap());
    }

    // Iterate over the found windows and check if they match our criteria
    for hwnd in hwnd {
        let mut class_name = [0u8; 256];
        let mut window_text = [0u8; 256];
        let mut visible = false;

        // Get the class name and window text for the current window
        GetClassNameA(hwnd, &mut class_name);
        GetWindowTextA(hwnd, &mut window_text);

        // Check if the window is visible and has the desired class name and window text
        if IsWindowVisible(hwnd) && class_name == b"kcsx\0" && window_text == b"kcsx\0" {
            visible = true;
        }

        // If the window is visible and matches our criteria, focus it
        if visible {
            ShowWindow(hwnd, SW_SHOWNORMAL);
            break;
        }
    }
}
