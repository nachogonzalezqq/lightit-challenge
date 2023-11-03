# Lightit Challenge Application

## Running the Application Locally

### Prerequisites

- Node.js and npm/yarn installed.
- React Native CLI installed.
- Android Studio and/or Xcode installed for Android/iOS emulation.

### Steps

1. **Install Dependencies**:

        npm install

        cd ios

        pod install

2. **Run on Android**:

- Open this ./android folder with Android Studio
- Launch an android emulator instance

        npm run android


## To format code:
        npm run lint


## Design Decisions & Libraries Used

### Design Decisions

- **Folder structure**: I've decided to use this folder structure due to the simplicity of this application. If this application were to have, for example, multiple routes, with more complex pages and more components, I'd opt for a more segmentated way to organize my files, probably creating a 'Pages' folder, that will contain page components that handle state management logic, and keep my 'components' folder only to reusable components

### Libraries Used

- **Formik**: I chose Formik to handle form validation because it provides a very straightforward implementation that allows to perform for validation and show custom error messages very easily.

- **react-native-toast-message**: For simplicity, I decided to use this library to show messages to the user. For a more complex application I'd probably try to develop my own toast component to adapt it both visually and it's behaviour to my needs.
-  **Redux**: I decided to use Redux for state management. Although it may be a little 'overkill' for this project, it provides a very easy implementation and allows us to easily handle our application behaviour for API requests.

