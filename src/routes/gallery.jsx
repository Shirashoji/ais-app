// import { useEffect, useState } from "react";
import ImageGallery from '../components/ImageGallery';

import { fetchImages } from '../APIs/fetchImages';
// import { fetchImgList } from '../APIs/fetchImgList';

// const [data, setData] = useState([]);

// fetchImgList();

export default function Gallery() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages().then((urls) => {
            console.log(urls);
            setUrls(urls);
        });
    }, []);
    // const urls = fetchImages();
    return (
        <div>
            <h2>Gallery</h2>
            <ImageGallery urls={urls} />
        </div>
    );
}
