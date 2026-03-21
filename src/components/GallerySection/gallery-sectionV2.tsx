import { Title, Text, Container, rem } from "@mantine/core";

import classes from "./gallery-section.module.scss";
import GalleryTabs from "./gallery-tab";

export function GallerySection() {
  return (
    <Container size="lg" className={classes.container}>
      <Title order={2} className={classes.title}>
        Nhật ký cắt tóc nữ
      </Title>

      <Text className={classes.description}>
        Tiệm tóc nữ quận Tân Phú được chị em truyền miệng vì{" "}
        <span className={classes.highlight}>
          "Tay nghề giỏi, tận tâm & sử dụng sản phẩm nhập khẩu tốt cho sức khỏe"
        </span>
        . Chuyên chữa trị tóc hư tổn, cắt tóc tạo kiểu, tẩy tóc nhuộm màu thời
        trang..{" "}
        <a href="#" className={classes.link}>
          Xem nhật ký
        </a>
      </Text>

      <GalleryTabs />
    </Container>
  );
}
