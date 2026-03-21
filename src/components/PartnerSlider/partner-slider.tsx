import React from "react";
import { Box, Container, Stack, Title, Text, Group } from "@mantine/core";
import Marquee from "react-fast-marquee";
import classes from "./partner-slider.module.scss";

const PARTNERS = [
  { name: "MILBON", sub: "JAPAN ELITE" },
  { name: "ATS", sub: "ORGANIC CARE" },
  { name: "GOLDWELL", sub: "COLOR EXPERT" },
  { name: "Schwarzkopf", sub: "PROFESSIONAL" },
];

export default function PartnerSlider() {
  const displayPartners = [...PARTNERS, ...PARTNERS];

  return (
    <Box component="section" className={classes.sectionWrapper}>
      <Container size="lg">
        <Stack align="center" gap="md" className={classes.headerContent}>
          <Group gap="sm" className={classes.subtitleGroup}>
            <div className={classes.line} />
            <Text className={classes.subtitle}>PREMIUM PRODUCTS</Text>
            <div className={classes.line} />
          </Group>

          <Title order={2} className={classes.title}>
            Sản phẩm cao cấp đồng hành
          </Title>

          {/* <Text className={classes.description}>
            Chúng tôi chỉ sử dụng các dòng sản phẩm chính hãng, an toàn và
            chuyên nghiệp nhất cho mái tóc của bạn.
          </Text> */}
        </Stack>
      </Container>

      <div className={classes.sliderContainer}>
        <Marquee
          direction="left"
          speed={60}
          gradient={true}
          gradientColor="#faf9f6"
          gradientWidth={100}
        >
          {displayPartners.map((item, index) => (
            <div key={`${item.name}-${index}`} className={classes.partnerItem}>
              <Text className={classes.partnerName}>{item.name}</Text>
              <Text className={classes.partnerSub}>{item.sub}</Text>
            </div>
          ))}
        </Marquee>
      </div>
    </Box>
  );
}
