#!/bin/bash
declare -a simulators=("A439C279-3C64-48FA-9006-4489C1145898" "4E908B3D-C362-43F7-9FE0-DD3072955A41")

for i in "${simulators[@]}"
do
    xcrun instruments -w $i
    xcrun simctl install $i ~/.expo/ios-simulator-app-cache/Exponent-2.17.4.tar.app
    xcrun simctl openurl $i exp://127.0.0.1:19000      
done