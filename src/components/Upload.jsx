import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";


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
const storageRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images`);


export default function UploadButtons() {
    const [image, setImage] = useState(null);
    const changeUploadImage = async (event) => {
        console.log(event.target.files[0]);
        console.log(event.target.files[0].name);
        const { name, files } = event.target;
        setImage(files[0]);
        try {
            const imageRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images/${files[0]}`);
            uploadBytes(imageRef, image).then(() => {
                console.log("Uploaded a file!");
            });
        } catch (err) {
            console.log(err);
        }
    };
    if (image == null) {
        return (
            <div>
                <Box sx={{ p: 10, border: 'dashed grey' }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" onChange={changeUploadImage} />
                        </Button>
                    </Stack>
                </Box>
            </div>
        );
    } else {
        setTimeout(() => {
            window.location.href = "/Gallery";
        }, 3 * 1000);
        return (
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h4" gutterBottom>
                    Galleryに移動します．
                </Typography>
                <Typography variant="body1" gutterBottom>
                    画像は適切にアップロードされました．
                </Typography>
            </Box >
        );
    }
}