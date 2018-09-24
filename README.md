# react-gmaps-firebase
React Google Maps to display locations from Google Cloud Firestore.

## Getting Started

### Prerequisites
*[Install Node.js]
*[Firebase Account]
*[Create Application]
*[Go to Application, Create database in Firestore]
*[Get API Key for FireStore and Application Id to use to connect to Firestore]

### Setup
Clone this repository.
```
git clone https://github.com/ashokdamacharla/react-gmaps-firebase.git
```
Go to "react-gmaps-firebase" folder to deploy to Firebase.

#### Tweaks to config (in Firebase.js)
*[Go to Firebase.js]
*[Change apiKey to the value that you get from Firebase]
*[Change ApplicationId, to the value that you get from Firebase, where ever the place holder found]

### Run Application locally
```
npm start
```

### Build Application to package to deploy to Firebase
```
npm build
```

### Deploy to Firebase

Install twitter-node-client library.
```
npm install twitter-node-client
```

Install Firebase tools.
```
npm install -g firebase-tools
```

Login to Firebase.
```
firebase login
```

Intitialize Firebase.
```
firebase init
```

Deploy.
```
firebase deploy
```







