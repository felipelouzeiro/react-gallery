import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { Environments } from '../../environments';

const firebaseConfig = {
  apiKey: Environments.API_KEY,
  authDomain: Environments.AUTH_DOMAIN,
  projectId: Environments.PROJECT_ID,
  storageBucket: Environments.STORAGE_BUCKET,
  messagingSenderId: Environments.MESSAGING_SENDER_ID,
  appId: Environments.APP_ID,
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
