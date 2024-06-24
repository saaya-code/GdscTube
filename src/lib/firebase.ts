// firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import firebaseConfig from "../../firebaseconfig";


let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;
let auth: Auth;
let db: Firestore;

if (!app) {
  app = initializeApp(firebaseConfig);
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
  auth = getAuth(app);
  db = getFirestore(app);
}

export { app, analytics, auth, db };
