import ImageGallery from '../components/ImageGallery';
import fetchImages from '../APIs/images';

const itemData = fetchImages();

export default function Gallery() {
    return (
        <div>
            <h2>Gallery</h2>
            <ImageGallery itemData={itemData} />
        </div>
    );
}
