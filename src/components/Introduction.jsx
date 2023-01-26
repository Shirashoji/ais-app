import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Introduction() {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h4" gutterBottom>
                AIS
            </Typography>

            <Typography variant="body1" gutterBottom>
                AISは，Anonymous Images Sharing serviceの略であり，このサイトは匿名版のInstagramとか，Pinterestといったところです．
            </Typography>
            <Typography variant="body1" gutterBottom>
                このサービスはアップロードした人に関する情報を一切保持しません．
                このサイトは使用者の善意のもとでのみ使用されることを期待しています．
            </Typography>
            <Typography variant="body1" gutterBottom>
                また，このサイトは日本大学文理学部情報科学科 Webプログラミングの授業の課題として5421551 白庄司拓真が制作しました．
            </Typography>
        </Box>
    );
}
