import React from "react";
import { Container, Title, Text, Grid, GridCol } from "@mantine/core";
import {
  IconUser,
  IconWaveSine,
  IconSparkles,
  IconBrush,
  IconDroplet,
  IconWind,
  IconShieldPlus,
  IconPalette,
} from "@tabler/icons-react";
import classes from "./intro-card-section.module.scss";

const largeCards = [
  {
    id: 1,
    title: "Cắt tóc nữ theo khuôn mặt",
    desc: "Tư vấn kiểu tóc phù hợp tôn vinh vẻ đẹp tự nhiên của bạn. Kỹ thuật cắt tỉa chuyên sâu giúp khuôn mặt thanh thoát hơn.",
    icon: <IconUser stroke={1.5} />,
  },
  {
    id: 2,
    title: "Uốn tóc Xù Hippi",
    desc: "Phong cách cá tính, hiện đại mang hơi thở nghệ thuật. Tạo độ phồng và sự bồng bềnh quyến rũ cho mái tóc.",
    icon: <IconWaveSine stroke={1.5} />,
  },
  {
    id: 3,
    title: "Uốn tóc sóng lơi",
    desc: "Vẻ đẹp dịu dàng, tự nhiên như những cơn sóng nhỏ. Xu hướng uốn tóc thanh lịch được yêu thích nhất.",
    icon: <IconSparkles stroke={1.5} />,
  },
  {
    id: 4,
    title: "Makeup Chuyên Nghiệp",
    desc: "Tỏa sáng rạng ngời trong mọi sự kiện quan trọng với phong cách trang điểm tinh tế, tôn nét đẹp riêng.",
    icon: <IconBrush stroke={1.5} />,
  },
];

const smallCards = [
  {
    id: 5,
    title: "Tẩy tóc",
    desc: "Màu sắc chuẩn chuyên gia, bảo vệ sợi tóc.",
    icon: <IconDroplet stroke={1.5} />,
  },
  {
    id: 6,
    title: "Duỗi tóc hơi nước",
    desc: "Công nghệ hơi nước giúp tóc bóng mượt.",
    icon: <IconWind stroke={1.5} />,
  },
  {
    id: 7,
    title: "Phục hồi tóc hư tổn",
    desc: "Liệu trình chuyên sâu tái sinh mái tóc.",
    icon: <IconShieldPlus stroke={1.5} />,
  },
  {
    id: 8,
    title: "Nhuộm tóc thời trang",
    desc: "Cập nhật xu hướng màu sắc hot nhất.",
    icon: <IconPalette stroke={1.5} />,
  },
];

export function IntroCardSection() {
  return (
    <section className={classes.section}>
      <Container size="lg">
        <div className={classes.header}>
          <Title className={classes.mainTitle}>Tiệm cắt tóc nữ Jena Hair</Title>
          <Text className={classes.subTitle}>
            Jena phục vụ cắt tóc, làm đầu, trang điểm bằng tất cả tình yêu và sự
            tỉ mỉ trong từng đường kéo.
          </Text>
        </div>

        {/* 4 Card lớn: Trên Mobile (span=12), Trên Desktop (md=6 là 2 cột) */}
        <Grid gutter="lg" mb="xl">
          {largeCards.map((card) => (
            /* base: cho mobile, md: cho desktop */
            <GridCol span={{ base: 12, md: 6 }} key={card.id}>
              <div className={classes.largeCard}>
                <div className={classes.iconLarge}>{card.icon}</div>
                <Title order={3} className={classes.cardTitle}>
                  {card.title}
                </Title>
                <Text className={classes.cardDesc}>{card.desc}</Text>
              </div>
            </GridCol>
          ))}
        </Grid>

        {/* 4 Card nhỏ: Mobile (span=12), Tablet (sm=6 là 2 cột), Desktop (md=3 là 4 cột) */}
        <Grid gutter="lg">
          {smallCards.map((card) => (
            <GridCol span={{ base: 12, sm: 6, md: 3 }} key={card.id}>
              <div className={classes.smallCard}>
                <div className={classes.iconSmall}>{card.icon}</div>
                <Title order={4} className={classes.smallCardTitle}>
                  {card.title}
                </Title>
                <Text className={classes.smallCardDesc}>{card.desc}</Text>
              </div>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
