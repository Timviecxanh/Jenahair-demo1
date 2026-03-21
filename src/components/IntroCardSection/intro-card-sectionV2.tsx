"use client";

import React from "react";
import { Container, Grid, Title, Text, Group, Box } from "@mantine/core";
import styles from "./intro-card-section.module.scss";

const services = [
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

const IntroCardSection: React.FC = () => {
  return (
    <Box component="section" className={styles.sectionWrapper}>
      <Container size="lg" className={styles.container}>
        <Grid gutter={50} align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <div className={styles.imageWrapper}>
              <img
                src="/images/IntroImage.png"
                alt="Jena Hair Portrait"
                className={styles.portraitImage}
              />
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <div className={styles.contentWrapper}>
              <Title order={1} className={styles.mainTitle}>
                Tiệm cắt tóc nữ <br />
                <span className={styles.highlightText}>JENA HAIR</span>
              </Title>

              <Text className={styles.description} mt="md" mb="xl">
                Jena phục vụ cắt tóc làm đầu trang điểm bằng tình yêu nghề, mang
                đến vẻ đẹp lộng lẫy và sự tự tin cho phái đẹp tại Tân Phú.
              </Text>

              <Group gap="sm" className={styles.tagsGroup}>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`${styles.tag} ${service.highlight ? styles.tagHighlight : styles.tagNormal}`}
                  >
                    {service.label}
                  </div>
                ))}
              </Group>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroCardSection;
