# Ionic App Development Workflow

- create ionic app
  ```sh
  ionic start <project-name> blank --type=react
  ```
- ionic android
- installing for android dependency

  ```sh
  npm i @capacitor/android
  ```

- setting project for android

  ```sh
  npx cap add android
  ```

- build ionic app

  ```sh
  ionic build
  ```

- sync ionic to android

  ```sh
  npx cap copy android
  npx cap open android
  ```

- navigate to android project
  ```sh
    cd android
  ```
- build android app
  ```sh
    gradlew build
    gradlew assembleDebug
  ```
- run the project
  ```sh
    adb install app\build\outputs\apk\debug\app-debug.apk
  ```
