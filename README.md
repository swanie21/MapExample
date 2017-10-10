# React Native Google Map with react-native-maps

![map](http://g.recordit.co/bf0Hsl8LGv.gif)

Project built with `react-native-cli` tools

##### iOS Development

1.) Install React Native command line interface `i -g react-native-cli`

2.) Create project `react-native init MapExample`

3.) Install maps package `npm install react-native-maps --save`

4.) Link your native dependencies with Xcode `react-native link react-native-maps`

5.) Create Podfile in iOS directory `touch ios/Podfile`

6.) Install  cocoapods `gem install cocoapods` or `gem install cocoapods sudo`

7.) Add the code below to the Podfile and make sure to replace "MapExample" with the name of your project

```
platform :ios, '8.0'

target 'MapExample' do

pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga/Yoga.podspec'

pod 'GoogleMaps'

end
```

8.) Install the pods `cd ios` and run `pod install` and `cd ..`

9.) Within your workspace project in Xcode you will drag the **_AirGoogleMaps_** folder into your project and you will be prompted with a pop-up window where you will select `Create groups`

10.) In the **_Build Settings_** in the **_Search Paths_** section double click on the file path in the **_Header Search Paths_** where you will double click the plus sign to add another Header and make it `recursive`

```
$(SRCROOT)/../node_modules/react-native-maps/ios/AirMaps
```

11.) Obtain [Google Maps API key](https://developers.google.com/maps/documentation/ios-sdk/get-api-key)

12.) In the **_AppDelegate.m_** file you will add code for your Google Maps API key

```
@import GoogleMaps

[GMSServices provideAPIKey:@"YOUR_GOOGLE_MAP_API_KEY"];
```

13.) Now you can `import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';` and you should be able to render a map

##### Android Development

`react-native link react-native-maps` does must of the heavy lifting with the Android set-up

1.) In the **_android/app/build.gradle_** file include this dependency

```
dependencies {
   compile project(':react-native-maps')
   ...
}
```

2.) In the **_android/settings.gradle_** file include these lines of code below

```
include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')
```

3.) In the **_android/app/src/main/AndroidManifest.xml_** file insert your Google Maps API key inside the <application>

```
<application>
   <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="INSERT GOOGLE MAPS API KEY HERE!!!!!!!"/>
</application>
```
