import type { ImageItem } from "./gallery-column";
import classes from "./gallery-section.module.scss";
import { Group, Box, Text, Title } from "@mantine/core";
import GalleryColumn from "./gallery-column";
import Link from "next/link";

interface GallerySectionProps {
  images: ImageItem[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  // Cột 1: Lấy từ vị trí số 0 đến sát vị trí số 4 (tức là 0, 1, 2, 3 -> đủ 4 ảnh)
  const columnOne = images.slice(0, 3);

  // Cột 2: Lấy từ vị trí số 4 đến sát vị trí số 7 (tức là 4, 5, 6 -> đủ 3 ảnh)
  const columnTwo = images.slice(3, 6);

  // Cột 3: Lấy từ vị trí số 7 đến hết (tức là 7, 8, 9, 10... -> đủ 4 ảnh nếu mảng có 11 ảnh)
  const columnThree = images.slice(6);

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
      <Link href={"#"} className={classes.footerBtn}>
        Xem tiếp
      </Link>
      <Text className={classes.title}>Salon cam kết với khách hàng</Text>
      <Text className={classes.subtitle}>
        Salon phục vụ làm đẹp cho khách hàng, đến khi hài lòng mà không phụ thu
        thêm chi phí phát sinh.
        <br /> Sản phẩm phục vụ khách hàng là hàng chính hãng
      </Text>
    </Box>
  );
}
