# Mobile Starter Kit

:rabbit: A boilerplate for Cordova, Material, Parcel, Babel, PostHTML, and PostCSS.

[![Build Status](https://img.shields.io/circleci/project/Shyam-Chen/Mobile-Starter-Kit/master.svg)](https://circleci.com/gh/Shyam-Chen/Mobile-Starter-Kit)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/Mobile-Starter-Kit/master.svg)](https://codecov.io/gh/Shyam-Chen/Mobile-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Cordova-Phonegap-Starter/status.svg)](https://david-dm.org/Shyam-Chen/Cordova-Phonegap-Starter)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Cordova-Phonegap-Starter/dev-status.svg)](https://david-dm.org/Shyam-Chen/Cordova-Phonegap-Starter?type=dev)

Android APK | iOS IPA

This seed repository provides the following features:

* ---------- **Essentials** ----------
* [ ] User interface components with [**Material**](https://material.io/).
* [ ] Scalable state management with [**MobX**](https://mobx.js.org/).
* ---------- **Tools** ----------
* [ ] Module bundler with [**Parcel**](https://parceljs.org/).
* [ ] HTML transformations with [**PostHTML**](https://github.com/posthtml/posthtml).
* [ ] Future CSS features with [**PostCSS**](http://postcss.org/).
* [ ] Next generation JavaScript with [**Babel**](https://babeljs.io/).
* [ ] HTML static code analyzer with [**HTMLHint**](http://htmlhint.com/).
* [ ] CSS static code analyzer with [**StyleLint**](https://stylelint.io/).
* [ ] JavaScript static code analyzer with [**ESLint**](https://eslint.org).
* [ ] Type annotations with [**Flow**](https://flow.org/).
* [ ] Unit Testing with [**Jest**](http://facebook.github.io/jest/).
* [ ] End-to-End testing with [**Appium**](https://github.com/appium/appium).
* [ ] Test coverage integration with [**Codecov**](https://codecov.io/).
* ---------- **Environments** ----------
* [ ] JavaScript runtime with [**Node.js**](https://nodejs.org/).
* [ ] Fast and deterministic builds with [**Yarn**](https://yarnpkg.com/).
* [ ] Version control with [**Git**](https://git-scm.com/).
* [ ] Code repository with [**GitHub**](https://github.com/).
* [ ] Software container with [**Docker**](https://www.docker.com/).
* [ ] Android/iOS continuous integration with [**CircleCI**](https://circleci.com/).

Here are some related seed repositories:

* ---------- **Client-side** ----------
* [Web Starter Kit](https://github.com/Shyam-Chen/Frontend-Starter-Kit) - Make for Progressive Web Apps.
* [Mobile Starter Kit](https://github.com/Shyam-Chen/Mobile-Starter-Kit) - Make for Cross-platform Mobile Apps.
* [Desktop Starter Kit](https://github.com/Shyam-Chen/Desktop-Starter-Kit) - Make for Cross-platform Desktop Apps.
* ---------- **Server-side** ----------
* [Platform Starter Kit](https://github.com/Shyam-Chen/Backend-Starter-Kit) - Make for Flexible Cloud Platform.
* [Functions Starter Kit](https://github.com/Shyam-Chen/Functions-Starter-Kit) - Make for Serverless Cloud Functions.
* [Infrastructure Starter Kit](https://github.com/Shyam-Chen/Infrastructure-Starter-Kit) - Make for Containerized Cloud Infrastructure.

## Getting Started

1. Clone this Boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Cordova-Phonegap-Starter.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install Dependencies

```bash
$ yarn install
```

3. Download PhoneGap

Download [PhoneGap Desktop (Desktop App)](http://phonegap.com/products/#desktop-app-section) and [PhoneGap Developer App (Mobile App)](https://phonegap.com/products/#mobile-app-section)

4. Watch the Application

```bash
$ yarn start
```

5. Open a new terminal

6. Add the Platform

```bash
$ yarn cordova platform add android
$ yarn cordova platform add ios
```

7. Open the PhoneGap Desktop

8. Add the project

9. Open the PhoneGap Developer App

10. Enter the server address and then press the link

11. Build the Application

```bash
$ yarn build

# then

$ yarn cordova build android --debug
$ yarn cordova build ios --debug
# or
$ yarn cordova build android --release
$ yarn cordova build ios --release
```
