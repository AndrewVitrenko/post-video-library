import React from 'react';
import { CardContent, CardMedia, Card, Typography } from '@mui/material';
import { Video } from './VideoItem.types';

export const VideoItem: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Played: {video.stats.playCount} times!</Typography>
        <CardMedia
          component="video"
          controls
          height="250"
          src={video.video.playAddr}
        />
      </CardContent>
    </Card>
  );
};
