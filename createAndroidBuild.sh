# It is unlikely this script will work "out of the box" for you. However, it should give you enough of an
# understanding that you can update some of the values to make it work for you.
export ANDROID_HOME=/home/vlchung/Android/Sdk/
export BUILD_TOOL_VERSION=`ls $ANDROID_HOME/build-tools | head -1l`
# Cordova is so far behind the latest, that we need the earliest version on the system.
export PATH=$PATH:/home/vlchung/.gradle/wrapper/dists/gradle-5.4.1-all/3221gyojl5jsh0helicew7rwx/gradle-5.4.1/bin/
ionic cordova prepare --release android
ionic cordova build --release android
ionic cordova compile --release android
~/Android/Sdk/build-tools/$BUILD_TOOL_VERSION/zipalign -v -p 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $$.1.apk
~/Android/Sdk/build-tools/$BUILD_TOOL_VERSION/apksigner sign --ks my-release-key.jks --out `date +"%Y%m%d-%H%M%S"`.apk $$.1.apk
rm $$.1.apk
