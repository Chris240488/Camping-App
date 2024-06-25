'use strict';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { collection, getDocs, getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { config, collectionName } from './config.js';

const app = initializeApp(config);
const db = getFirestore(app);
const placesCollection = collection(db, collectionName);

const getCollectionData = async () => {
  try {
    return await getDocs(placesCollection);
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

const firebaseCollection = await getCollectionData();

export default firebaseCollection.docs.map(doc => doc._document.data.value.mapValue.fields);
