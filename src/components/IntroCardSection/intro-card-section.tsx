import classes from "./intro-card-section.module.scss";
import { SimpleGrid, Stack, Title, Text, Box } from "@mantine/core";
import Image from "next/image";
import IntroImage from "@/components/image/IntroImage.png";

const SERVICES = [
  "Cắt tóc nữ theo khuôn mặt",
  "Uốn tóc Xù Hippi",
  "Tẩy tóc",
  "Duỗi tóc hơi nước",
  "Uốn tóc sóng lơi",
  "Cắt tóc Tomboy",
  "Phục hồi tóc hư tổn",
  "Nhuộm tóc thời trang",
  "Nhuộm tóc không tẩy",
];

export default function IntroCardSection() {
  return (
    <Box className={classes.section}>
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={{ base: 40, md: 80 }}
        className={classes.container}
      >
        {/* IMAGE */}
        <Box className={classes.imageWrapper}>
          <Image
            src={IntroImage}
            alt="Jena Hair"
            className={classes.image}
            priority
          />
        </Box>

        {/* CONTENT */}
        <Stack justify="center" className={classes.content}>
          <Title order={2} className={classes.title}>
            Tiệm cắt tóc nữ Jena Hair
          </Title>

          <Text className={classes.subtitle}>
            Các dịch vụ mà Jena phục vụ cho khách hàng
          </Text>

          <Box className={classes.serviceGrid}>
            {SERVICES.map((item, index) => (
              <Box key={index} className={classes.serviceItem}>
                {item}
              </Box>
            ))}
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
