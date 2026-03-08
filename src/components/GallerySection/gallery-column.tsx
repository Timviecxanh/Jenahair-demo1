import Image from "next/image";
import { Box, Stack } from "@mantine/core";
import classes from "./gallery-column.module.scss";

type RatioType = "short" | "medium" | "tall" | "tallest";

export type ImageItem = {
  src: string;
  ratio: RatioType;
};

type GalleryColumnProps = {
  images: ImageItem[];
};

export default function GalleryColumn({ images }: GalleryColumnProps) {
  return (
    <Box className={classes.columnWrapper}>
      {images.map((item, index) => (
        <Box
          key={index}
          className={`${classes.imageContainer} ${
            classes[`ratio${capitalize(item.ratio)}`]
          }`}
        >
          <Image
            src={item.src}
            alt="Gallery"
            fill
            // priority={item.priority}
            className={classes.image}
          />
        </Box>
      ))}
    </Box>
  );
}
function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
console.log(classes);
