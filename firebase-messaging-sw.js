// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgG2R2WWLxB1q02ZuicLfnj94tK80IiE0",
    authDomain: "learning-fff3e.firebaseapp.com",
    databaseURL: "https://learning-fff3e-default-rtdb.firebaseio.com",
    projectId: "learning-fff3e",
    storageBucket: "learning-fff3e.appspot.com",
    messagingSenderId: "798480131148",
    appId: "1:798480131148:web:de6ed6bb3683d6563e00e9",
    measurementId: "G-EGWEJLP7EJ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



