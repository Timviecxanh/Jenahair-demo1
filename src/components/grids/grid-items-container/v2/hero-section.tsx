import React from "react";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import classes from "./hero-section.module.scss";

export function HeroSection() {
  return (
    <section className={classes.hero}>
      <div className={classes.overlay}></div>
      <div className={classes.heroImage}></div>
      <Container size="xl" className={classes.container}>
        <div className={classes.content}>
          <div className={classes.badge}>PROFESSIONAL HAIR SALON</div>

          <Title className={classes.title}>
            <span>
              <span className={classes.jena}>Jena</span>
              <span className={classes.hair}> hair </span>
            </span>
            <span className={classes.titleTop}>sứ mệnh làm bạn</span>
            <span className={classes.break}>lộng lẫy</span>
          </Title>

          <Text className={classes.description}>
            Jenahair là salon tóc quận Tân Phú, xuất thân từ nhà tạo mẫu tóc
            được cấp bằng chứng nhận bởi thầy Iwata nhà tạo mẫu tóc Nhật Bản.
            Với tình yêu đam mê tóc & sắc đẹp, Jena Hair sẽ làm bạn lộng lẫy là
            sứ mệnh từng thành viên của salon.
          </Text>

          <Group gap="md" mt={32} wrap="wrap">
            <Button size="lg" className={classes.primaryButton} radius="md">
              Khám phá dịch vụ
            </Button>
          </Group>
        </div>
      </Container>
    </section>
  );
}
