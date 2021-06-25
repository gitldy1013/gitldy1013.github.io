::此批处理用来批量重命令文件
::当无匹配的文件时会显示“找不到文件”

@echo off
setlocal enabledelayedexpansion
for /f "delims=" %%i in ('dir /b *_*') do (
echo %%i
set var=%%i
set var=!var:_=!
echo %%i !var!
ren "%%i" "!var!"
)
pause