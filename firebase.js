const firebaseConfig = {
  apiKey: "AIzaSyBYqvy0J1-UCAak3OpEBKftnWo-DBsK7SA",
  authDomain: "tofaa-quiz.firebaseapp.com",
  projectId: "tofaa-quiz",
  storageBucket: "tofaa-quiz.firebasestorage.app",
  messagingSenderId: "637895046016",
  appId: "1:637895046016:web:3deff6ae57a5d74cb08765"
};firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();