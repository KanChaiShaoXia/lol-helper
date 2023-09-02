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

// Tauri - src-tauri/src/main.rs

use windows::Win32::Foundation::GetWindowTextW;
use windows::Win32::Foundation::WCHAR;
use windows::Win32::Foundation::{HWND, LPARAM};
use windows::Win32::UI::WindowsAndMessaging::{EnumWindows, SetForegroundWindow};

#[tauri::command]
pub fn focus_other_app() {
    unsafe {
        EnumWindows(Some(enum_windows_callback), LPARAM(0));
    }
}

unsafe extern "system" fn enum_windows_callback(hwnd: HWND, lparam: LPARAM) -> bool {
    let mut buffer = [0 as WCHAR; 512];
    let _ = GetWindowTextW(hwnd, buffer.as_mut_ptr(), buffer.len() as i32);
    let title = String::from_utf16(&buffer).unwrap().to_lowercase();

    if title.contains("target_app") {
        SetForegroundWindow(hwnd);
        return false; // break enumeration
    }

    return true; // continue enumeration
}
