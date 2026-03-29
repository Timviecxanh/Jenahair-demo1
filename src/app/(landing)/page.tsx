import SearchBar from "@/components/primitives/search-bar/search-bar";
import classes from "./page.module.scss";
import { Container, Loader, Stack, Text } from "@mantine/core";
import VideoSection from "@/components/primitives/video-section/video-section";
import GridItemsContainerV2 from "@/components/grids/grid-items-container/v2/grid-items-container-v2";
import Link from "next/link";

import { Suspense } from "react";
import BrandIdentity from "@/components/BrandIdentity/brand-identity";
import LandingFooterV2 from "@/components/footers/landing-footerV2/landing-footerV2";
import Header from "@/components/headers/landing-header/landing-headerV2";
import HeroSection from "@/components/grids/grid-items-container/v2/hero-section";
import PartnerSlider from "@/components/PartnerSlider/partner-slider";
import IntroCardSection from "@/components/IntroCardSection/intro-card-section";
import GallerySection from "@/components/GallerySection/gallery-section";
import type { ImageItem } from "@/components/GallerySection/gallery-column";
import { LandingCarousel } from "@/components/primitives/landing-carousel/landing-carousel";
import IMG1 from "../../../public/images/group1.png";
export default async function LandingPage() {
  // const ALL_GALLERY_IMAGES: ImageItem[] = [
  //   { src: "/images/IntroImage.png", ratio: "short" },
  //   { src: "/images/IntroImage.png", ratio: "medium" },
  //   { src: "/images/IntroImage.png", ratio: "medium" },
  //   { src: "/images/IntroImage.png", ratio: "tallest" },
  //   { src: "/images/IntroImage.png", ratio: "short" },
  //   { src: "/images/IntroImage.png", ratio: "medium" },
  //   { src: "/images/IntroImage.png", ratio: "medium" },
  //   { src: "/images/IntroImage.png", ratio: "short" },
  //   { src: "/images/IntroImage.png", ratio: "medium" },
  // ];

  const mySlides = [
    {
      imageUrl: "/images/group1.png",
    },
    {
      imageUrl: "/images/group1.png",
    },
    {
      imageUrl: "/images/group1.png",
    },
  ];

  return (
    <>
      <LandingCarousel slides={mySlides} height={900} />;
      {/* <HeroSection />
      <BrandIdentity />
      <PartnerSlider />
      <IntroCardSection
        title="Tiệm tóc Jena Hair"
        subtitle=" Jena phục vụ cắt tóc làm đầu trang điểm bằng tình yêu nghề"
        imageSrc="/images/IntroImage.png"
        services={[
          { label: "Cắt tóc nữ theo khuôn mặt" },
          { label: "Uốn tóc Xù Hippi" },
          { label: "Tẩy tóc", highlight: true },
          { label: "Makeup Trang điểm", highlight: true },
          { label: "Uốn tóc sóng lơi" },
          { label: "Cắt tóc Tomboy" },
          { label: "Phục hồi tóc hư tổn" },
          { label: "Nhuộm tóc nữ", highlight: true },
          { label: "Nhuộm tóc không tẩy" },
          { label: "Cắt tóc ngắn" },
          { label: "Duỗi tóc hơi nước" },
          { label: "Uốn tóc Xù Hippi" },
        ]}
      />
      {/* <IntroCardSection /> */}
      {/* <GallerySection images={ALL_GALLERY_IMAGES} />
      <LandingFooterV2 /> */}
      <Container size="xl" classNames={{ root: classes.landingContainer }}>
        <Suspense fallback={<Loader size={48} />}>
          {/* <SearchBar /> */}
        </Suspense>
        {/* <GridItemsContainerV2 /> */}
        <Stack gap="lg" mb={"xl"}>
          <div className={classes.wrapper}>
            <h1 className={classes.mainLogo}>
              <span className={classes.jena}>Jena</span>
              <span className={classes.hair}>hair</span>
            </h1>

            <p className={classes.slogan}>
              Jenahair là salon tóc quận Tân Phú, xuất thân từ nhà tạo mẫu tóc
              được cấp bằng chứng nhận bởi thầy Iwata nhà tạo mẫu
              <br className={classes.desktopBr} />
              tóc Nhật Bản & với tình yêu đam mê tóc & sắc đẹp, Jena Hair sẽ làm
              bạn lộng lẫy là sứ mệnh từng thành viên của salon
            </p>
          </div>
        </Stack>
        {/* <Stack gap={6} mb={"xl"} mt={56}>
          <h2 className={classes.sectionTitle}>Our locations for you</h2>
          <h3 className={classes.sectionSubTitle}>
            Vietnam has many beautiful landscapes
          </h3>
        </Stack> */}

        {/* <GridItemsContainerV2 />
      </Container>
      <Container size="xl" classNames={{ root: classes.landingContainer }}>
        <Stack gap={6} mb={"xl"}>
          <h2 className={classes.sectionTitle}>Our services</h2>
        </Stack>
        <Stack gap={6} mb={"xl"}>
          <h2 className={classes.sectionTitle}>We have the best partners</h2>
          <h3 className={classes.sectionSubTitle}>We have the best partners</h3>
        </Stack> */}
      </Container>
      {/* <VideoSection url="https://www.youtube.com/watch?v=iVIbnK94x4Y" /> */}
    </>
  );
}
