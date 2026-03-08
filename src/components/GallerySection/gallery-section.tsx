import type { ImageItem } from "./gallery-column";
import classes from "./gallery-section.module.scss";
import { Box, Text, Title } from "@mantine/core";
import GalleryColumn from "./gallery-column";

export default function GallerySection() {
  const columnOne: ImageItem[] = [
    { src: "/images/IntroImage.png", ratio: "short" },
    { src: "/images/IntroImage.png", ratio: "medium" },
    { src: "/images/IntroImage.png", ratio: "tall" },
    { src: "/images/IntroImage.png", ratio: "short" },
  ];

  const columnTwo: ImageItem[] = [
    { src: "/images/IntroImage.png", ratio: "tallest" },
    { src: "/images/IntroImage.png", ratio: "short" },
    { src: "/images/IntroImage.png", ratio: "tall" },
  ];

  const columnThree: ImageItem[] = [
    { src: "/images/IntroImage.png", ratio: "medium" },
    { src: "/images/IntroImage.png", ratio: "short" },
    { src: "/images/IntroImage.png", ratio: "medium" },
    { src: "/images/IntroImage.png", ratio: "tallest" },
  ];

  const allImages = [...columnOne, ...columnTwo, ...columnThree];

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Title order={2}>Nhật ký cắt tóc nữ</Title>
        <Text className={classes.description}>
          <span>
            Tiệm tóc nữ quận Tân Phú được chị em truyền miệng vì “Tay nghề giỏi,
            tận tâm & sử dụng sản phẩm nhập khẩu tốt cho sức khỏe”.
          </span>
          <br />{" "}
          <span>
            Chuyên chữa trị tóc hư tổn, cắt tóc tạo kiểu, tẩy tóc nhuộm màu thời
            trang.. Xem <a href="#">nhật ký</a>
          </span>
        </Text>
      </Box>

      <Box className={classes.desktopGrid}>
        <GalleryColumn images={columnOne} />
        <GalleryColumn images={columnTwo} />
        <GalleryColumn images={columnThree} />
      </Box>

      <Box className={classes.mobileSlider}>
        {allImages.map((img, index) => (
          <Box key={index} className={classes.sliderItem}>
            <img src={img.src} alt={`Hair diary ${index}`} />
          </Box>
        ))}
      </Box>

      <Text className={classes.footerBtn} component="a" href="#">
        Xem tiếp
      </Text>

      <Title order={3} className={classes.footerTitle}>
        Salon cam kết với khách hàng
      </Title>

      <Box className={classes.footerSubtitle} ta="center">
        <Text>
          Salon phục vụ làm đẹp cho khách hàng, đến khi hài lòng mà không phụ
          thu thêm chi phí phát sinh.
        </Text>
        <Text>Sản phẩm phục vụ khách hàng là hàng chính hãng</Text>
      </Box>
    </Box>
  );
}
