import type { ImageItem } from "./gallery-column";
import classes from "./gallery-section.module.scss";
import { Group, Box, Text, Title } from "@mantine/core";
import GalleryColumn from "./gallery-column";
import Img1 from "@/components/image/IntroImage.png";
import Img2 from "@/components/image/IntroImage.png";
import Img3 from "@/components/image/IntroImage.png";
import Img4 from "@/components/image/IntroImage.png";
import Img5 from "@/components/image/group1.png";
export default function GallerySection() {
  const columnOne: ImageItem[] = [
    { src: Img1, ratio: "short" },
    { src: Img2, ratio: "medium" },
    { src: Img3, ratio: "tall" },
    { src: Img1, ratio: "short" },
  ];

  const columnTwo: ImageItem[] = [
    { src: Img5, ratio: "tallest" },
    { src: Img3, ratio: "short" },

    { src: Img2, ratio: "tall" },
  ];

  const columnThree: ImageItem[] = [
    { src: Img3, ratio: "medium" },
    { src: Img2, ratio: "short" },
    { src: Img3, ratio: "medium" },
    { src: Img5, ratio: "tallest" },
  ];

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Title order={2}>Nhật ký cắt tóc nữ</Title>
        <Text className={classes.description}>
          <span>
            Tiệm tóc nữ quận Tân Phú được chị em truyền miệng vì “Tay nghề giỏi,
            tận tâm & sử dụng sản phẩm nhập khẩu tốt cho sức khỏe”.
          </span>

          <span>
            Chuyên chữa trị tóc hư tổn, cắt tóc tạo kiểu, tẩy tóc nhuộm màu thời
            trang.. Xem <a href="#">nhật ký</a>
          </span>
        </Text>
      </Box>
      <Group className={classes.galleryGrid} wrap="nowrap">
        <GalleryColumn images={columnOne} />
        <GalleryColumn images={columnTwo} />
        <GalleryColumn images={columnThree} />
      </Group>

      <Text className={classes.footerBtn}>Xem tiếp</Text>
    </Box>
  );
}
