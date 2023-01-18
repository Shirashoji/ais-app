import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Loading() {
    return <p>Loading...</p>;
}

export default function ImageGallery(props) {
    const { urls } = props;
    if (urls == null) {
        return <Loading />;
    }
    else {
        console.log(urls);
        return (
            <Box sx={{ overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {urls.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                src={`${item}?w=124&fit=crop&auto=format`}
                                srcSet={`${item}?w=124&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        );
    }
}
