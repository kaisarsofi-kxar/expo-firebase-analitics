# Firebase Analytics Demo App

A React Native application built with Expo that demonstrates the implementation and usage of Firebase Analytics in a mobile application.

## Overview

This project showcases how to:
- Set up Firebase Analytics in a React Native application
- Track user events and interactions
- Generate analytics data for reporting

## Technologies Used

- React Native
- Expo
- Firebase Analytics
- TypeScript
- React Navigation

## Prerequisites

- Node.js (14.x or newer)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator for local testing
- Firebase account

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/firebase-analitics.git
   cd firebase-analitics
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn start
   # or 
   npm start
   ```

## Firebase Setup

This project already includes the necessary Firebase configuration files:
- `firebase-data/google-services.json` (for Android)
- `firebase-data/GoogleService-Info.plist` (for iOS)

If you want to use your own Firebase project:

1. Create a new project in the [Firebase Console](https://console.firebase.google.com/)
2. Set up Firebase for your Android and iOS apps
3. Download the configuration files and replace the existing ones

## Running the App

### Development Mode

```bash
# Start the Expo development server
yarn start
# or
npm start

# Run on iOS
yarn ios
# or
npm run ios

# Run on Android
yarn android
# or
npm run android
```

### Production Build

For detailed instructions on creating production builds, refer to the [Expo documentation](https://docs.expo.dev/deploy/build-project/).

## Testing Analytics Events

The app includes a demo button in the home screen that logs a custom event to Firebase Analytics when pressed. You can view these events in your Firebase Console under Analytics.

## Project Structure

```
firebase-analitics/
├── firebase-data/        # Firebase configuration files
├── src/
│   ├── app/              # Main application screens
│   ├── assets/           # Images, fonts, and other static assets
│   ├── components/       # Reusable UI components
│   ├── constants/        # App constants and configuration
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and helpers
│   ├── routes/           # Navigation configuration
│   └── scripts/          # Build and setup scripts
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or support, please open an issue in the repository.
