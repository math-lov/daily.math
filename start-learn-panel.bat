@echo off
setlocal
chcp 65001 >nul
set "PYTHONUTF8=1"
set "PYTHONIOENCODING=utf-8"
cd /d "%~dp0"
set "PY=%USERPROFILE%\.workbuddy\binaries\python\envs\default\Scripts\python.exe"
if not exist "%PY%" set "PY=python"
echo Starting Learn site (self-study) panel ... browser will open http://127.0.0.1:8788/
echo This panel is separate from the Daily Three panel (8787).
echo Keep this window open while you use the panel. Press Ctrl+C to stop.
"%PY%" "tools\learn_panel.py" --port 8788
echo.
echo Panel stopped. Press any key to close this window.
pause >nul
