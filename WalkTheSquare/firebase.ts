import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { REACT_APP_APIKEY, REACT_APP_AUTHDOMAIN, REACT_APP_DB, REACT_APP_PID, REACT_APP_SB, REACT_APP_SID, REACT_APP_APPID, REACT_APP_MID } from "@env";



const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  databaseURL: REACT_APP_DB,
  projectId:  REACT_APP_PID,
  storageBucket:  REACT_APP_SB,
  messagingSenderId:  REACT_APP_SID,
  appId:  REACT_APP_APPID,
  measurementId: REACT_APP_MID 
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth };