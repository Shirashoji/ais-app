import { FC, useEffect, useState } from "react";
import ImageGallery from '../components/ImageGallery';

import { fetchImages } from "../APIs/fetchImages.js";



function Test() {
    // Find all the prefixes and items.
    const [urls, setUrls] = useState(null);

    useEffect(() => {
        fetchImages().then((urls) => {
            setUrls(urls);
            console.log(urls);
        });
    }, []);

    return (
        <div>
            <h2>Gallery</h2>
            <ImageGallery urls={urls} />
        </div>
    );
}

export default Test;