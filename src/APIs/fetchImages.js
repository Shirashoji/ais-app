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

// 画像のURLを取得する関数
async function fetchURL(name) {
    let imgRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images/${name}`);
    const url = await getDownloadURL(imgRef);
    return url;
}

// 画像のファイル名のリストを取得する関数
export async function fetchImages() {
    let images = [];
    const listRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images`);
    const res = await listAll(listRef);
    for await (let itemRef of res.items) {
        const url = await fetchURL(itemRef.name);
        images.push(url);
    };
    return images;
}