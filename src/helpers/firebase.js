const firebase = require('firebase');
const firebaseui = require('firebaseui');

var firebaseConfig = {
  apiKey: 'AIzaSyCGt2vpHkfC3FiFGD2iaJblE3o021MMOwo',
  authDomain: 'device-manager-8a0a6.firebaseapp.com',
  databaseURL: 'https://device-manager-8a0a6.firebaseio.com',
  projectId: 'device-manager-8a0a6',
  storageBucket: 'device-manager-8a0a6.appspot.com',
  messagingSenderId: '489909393030',
  appId: '1:489909393030:web:f8e5c9452a1bc4679f2307',
  measurementId: 'G-19HQFEHYJX',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/auth/callback',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '/terms-of-service',
  // Privacy policy url.
  privacyPolicyUrl: '/privacy-policy',
};

function wrappedStart() {
  ui.start('#firebaseui-auth-container', uiConfig);
}

// export default wrappedStart;
