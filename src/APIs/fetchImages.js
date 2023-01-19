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


async function fetchURL(name) {
    let starsRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images/${name}`);
    const url = await getDownloadURL(starsRef);
    // console.log(url);
    return url;
}

export async function fetchImages() {
    let images = [];
    const res = await listAll(listRef);
    for await (let itemRef of res.items) {
        const url = await fetchURL(itemRef.name);
        images.push(url);
    };
    return images;
}



// export async function fetchImages() {
//     const itemData = [
//         'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//         'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     ];
//     await console.log(itemData);
//     return itemData;
// }