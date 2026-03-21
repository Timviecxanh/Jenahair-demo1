import classes from "./intro-card-section.module.scss";
import { SimpleGrid, Stack, Title, Text, Box } from "@mantine/core";
import Image from "next/image";

const SERVICES = [
  { label: "Cắt tóc nữ theo khuôn mặt" },
  { label: "Uốn tóc Xù Hippi" },
  { label: "Tẩy tóc", highlight: true },
  { label: "Make up trang điểm", highlight: true },
  { label: "Uốn tóc sóng lơi" },
  { label: "Cắt tóc Tomboy" },
  { label: "Phục hồi tóc hư tổn" },
  { label: "Nhuộm tóc nữ", highlight: true },
  { label: "Nhuộm tóc không tẩy" },
  { label: "Cắt tóc ngắn" },
  { label: "Uốn tóc Xù Hippi" },
  { label: "Duỗi tóc hơi nước" },
];

export default function IntroCardSection() {
  return (
    <Box className={classes.section}>
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={{ base: 40, md: 80 }}
        className={classes.container}
      >
        <Box className={classes.imageWrapper}>
          <Image
            src={"/images/IntroImage.png"}
            alt="Jena Hair"
            className={classes.image}
            priority
            width={500}
            height={300}
          />
        </Box>

        <Stack justify="center" className={classes.content}>
          <Title order={2} className={classes.title}>
            Tiệm cắt tóc nữ Jena Hair
          </Title>

          <Text className={classes.subtitle}>
            Jena phục vụ cắt tóc làm đầu trang điểm bằng tình yêu nghề
          </Text>

          <Box className={classes.serviceGrid}>
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className={`${classes.serviceItem} ${service.highlight ? classes.tagHighlight : classes.tagNormal}`}
              >
                {service.label}
              </div>
            ))}
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
