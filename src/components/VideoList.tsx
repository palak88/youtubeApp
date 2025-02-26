import React from "react";
import { VideoCard } from "./card";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";

interface IVideoList {
  list: any[];
}

export const VideoList: React.FC<IVideoList> = ({ list }) => {
  const router = useRouter();

  const handleClick = (event: any, item: any) => {};

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container spacing={5}>
        {list.map((item) => (
          <div
            key={item?.id?.videoid}
            onClick={(event, item) => handleClick(event, item)}
          >
            <VideoCard imageData={item} />
          </div>
        ))}
      </Grid>
    </div>
  );
};
