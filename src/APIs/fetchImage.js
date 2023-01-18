import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Create a reference under which you want to list
const listRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images`);


export async function fetchImage() {
    let filename = [];
    let images = [];

    await listAll(listRef)
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
            });
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                filename.push(itemRef.name);
                console.log(filename);
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    await filename.forEach((item) => {
        const starsRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images/${item}`);
        getDownloadURL(starsRef)
            .then((url) => {
                // Insert url into an <img> tag to "download"
                images.push(url);
                console.log(images);
            })
            .catch((e) => { console.log(e) });
    });
    return images;
}
