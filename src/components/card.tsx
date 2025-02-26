import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface ICard {
  imageData: any;
}

export const VideoCard: React.FC<ICard> = ({ imageData }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageData?.snippet?.thumbnails?.default?.url}
        title={imageData?.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {imageData?.snippet?.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {imageData?.snippet?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play</Button>
      </CardActions>
    </Card>
  );
};
