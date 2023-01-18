import { FC, useEffect, useState } from "react";
import ImageGallery from '../components/ImageGallery';

import { fetchImage } from "../APIs/fetchImage.js";



function Test() {
    // Find all the prefixes and items.
    const [urls, setUrls] = useState(null);

    useEffect(() => {
        fetchImage().then((urls) => {
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