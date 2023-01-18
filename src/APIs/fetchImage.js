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
const listRef = ref(storage, 'gs://anonymous-images-sharing-app.appspot.com/images');


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
        const starsRef = ref(storage, `gs://anonymous-images-sharing-app.appspot.com/images/${item}`);
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


// export function fetchImages() {
//     const itemData = [
//         'https://firebasestorage.googleapis.com/v0/b/anonymous-images-sharing-app.appspot.com/o/images%2Fchofu.jpeg?alt=media&token=19ed07a2-7d6e-4302-9211-824b4988f15b',
//         'https://firebasestorage.googleapis.com/v0/b/anonymous-images-sharing-app.appspot.com/o/images%2Fhokkaido1.jpeg?alt=media&token=3dcadbb0-3623-41d6-a035-544614d664ac',
//         'https://firebasestorage.googleapis.com/v0/b/anonymous-images-sharing-app.appspot.com/o/images%2Fhokkaido2.jpeg?alt=media&token=c3a919be-ea7c-4e1a-843d-0c1c754068b5',
//         'https://firebasestorage.googleapis.com/v0/b/anonymous-images-sharing-app.appspot.com/o/images%2Fhokkaido3.jpeg?alt=media&token=43180b88-05a1-44c3-a44c-e42e1842dda1',
//         'https://firebasestorage.googleapis.com/v0/b/anonymous-images-sharing-app.appspot.com/o/images%2Fodaiba.jpeg?alt=media&token=41ff8356-1163-487c-8330-b3772d061247',
//         // 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//         // 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         // 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         // 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         // 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         // 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         // 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         // 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         // 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         // 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         // 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         // 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     ];
//     return itemData;
// }

// // export async function fetchImages() {
// //     const response = await fetch(
// //         `https://dog.ceo/api/breed/shiba/images/random/10`
// //     );
// //     const data = await response.json();
// //     return data.message;
// // }