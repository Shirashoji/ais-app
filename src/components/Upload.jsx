import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



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
        const { name, files } = event.target;
        setImage(files[0]);
        console.log(image);
        try {
            const imageRef = ref(storage, `gs://${import.meta.env.VITE_FIREBASE_STORE_BUCKET}/images/${image.name}`);
            uploadBytes(imageRef, image).then(() => {
                console.log("Uploaded a file!");
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            {(() => {
                if (image) {
                    <img src={URL.createObjectURL(image)} alt="upload" />
                }
            })()}

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
}