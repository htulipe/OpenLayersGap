OpenLayersGap
=============

A simple example of an Openlayers usage with PhoneGap. The application has been tested with PhoneGap 3.0.0 and OpenLayers 2.14 on Android SDK 7.

Build
-----

    cd <repo>

Add android platform (or whatever platform you wish) :

    cordova platform add android

Compile :

    phonegap build android

Running on device    
-----------------

With your device properly plugged in and driver installed:

    phonegap install android

Running on emulator
-------------------

With an emulator running (called emulator-5554 in this case)

    phonegap install --emulator=emulator-5554 android

  
Running on desktop
------------------

As many more PhoneGap app, you can open `index.html` in your browser to see the application running. You will have to manually dispatch the `deviceready` event:

        document.dispatchEvent(new Event('deviceready'))

