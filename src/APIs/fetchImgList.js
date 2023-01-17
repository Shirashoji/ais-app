// Import the functions you need from the SDKs you need
import "firebase/app";
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

import "firebase/auth";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQB6yz7yuYt0Bi0z-TvVh9hmFPYNw_5Mc",
    authDomain: "anonymous-images-sharing-app.firebaseapp.com",
    projectId: "anonymous-images-sharing-app",
    storageBucket: "anonymous-images-sharing-app.appspot.com",
    messagingSenderId: "894002184874",
    appId: "1:894002184874:web:8c0ad47a0e9bb11ca6c6d3",
    measurementId: "G-5FG4DZ0L4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export async function fetchImgList() {
    let images = [];
    const storage = getStorage(app);
    const storageRef = ref(storage);
    // images.push("fetchImgList");
    // console.log(images);
    console.log(storageRef.listAll());
    storageRef.listAll().then(function (result) {
        result.items.forEach(function (ref) {
            images.push(ref.name);
            console.log(ref.name);
        });
    }).catch(function (error) {
        console.error(error);
    });
    console.log(images);
    return images;
}
