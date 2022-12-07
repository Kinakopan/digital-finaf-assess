import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0tchJe7vewO9hAcpTnQqBOcUpqT2Sjz8",
  authDomain: "digital-final-assess.firebaseapp.com",
  projectId: "digital-final-assess",
  storageBucket: "digital-final-assess.appspot.com",
  messagingSenderId: "378414719838",
  appId: "1:378414719838:web:0cecb76b7b8a53cfaa25cf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
