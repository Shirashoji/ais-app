import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MainPage() {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h3" gutterBottom>
                Home
            </Typography>

            <Typography variant="h4" gutterBottom>
                最低限のモラルを持って使用してください．
            </Typography>

            <Typography variant="body1" gutterBottom>
                このサイトは日本大学文理学部情報科学科 Webプログラミングの授業の課題として
                5421551 白庄司拓真が制作しました．
            </Typography>
        </Box>
    );
}
