import type { ImageItem } from "./gallery-column"; // Giữ lại type hoặc move sang file này
import classes from "./gallery-section.module.scss";
import { Box, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

interface GallerySectionProps {
  images: ImageItem[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Title order={2}>Nhật ký cắt tóc nữ</Title>
        <Text className={classes.description}>
          <span>
            Tiệm tóc nữ quận Tân Phú được chị em truyền miệng vì “Tay nghề giỏi,
            tận tâm & sử dụng sản phẩm nhập khẩu tốt cho sức khỏe”.{" "}
          </span>
          <span>
            Chuyên chữa trị tóc hư tổn, cắt tóc tạo kiểu, tẩy tóc nhuộm màu thời
            trang.. Xem <a href="#">nhật ký</a>
          </span>
        </Text>
      </Box>

      <div className={classes.masonryGrid}>
        {images.map((item, index) => (
          <div
            key={index}
            className={`${classes.masonryItem} ${classes[`ratio${item.ratio.charAt(0).toUpperCase() + item.ratio.slice(1)}`]}`}
          >
            <Image
              src={item.src}
              alt="Gallery"
              fill
              className={classes.image}
            />
          </div>
        ))}
      </div>

      <Link href={"#"} className={classes.footerBtn}>
        Xem tiếp
      </Link>

      <div className={classes.desc}>
        <Text className={classes.title}>Salon cam kết với khách hàng</Text>
        <Text className={classes.subtitle}>
          Salon phục vụ làm đẹp cho khách hàng, đến khi hài lòng mà không phụ
          thu thêm chi phí phát sinh.
          <br />
          Sản phẩm phục vụ khách hàng là hàng chính hãng
        </Text>
      </div>
    </Box>
  );
}
