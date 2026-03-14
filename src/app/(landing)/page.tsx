import SearchBar from "@/components/primitives/search-bar/search-bar";
import classes from "./page.module.scss";
import { Container, Loader, Stack, Text } from "@mantine/core";
import VideoSection from "@/components/primitives/video-section/video-section";
import GridItemsContainerV2 from "@/components/grids/grid-items-container/v2/grid-items-container-v2";
import Link from "next/link";

import { Suspense } from "react";
import BrandIdentity from "@/components/BrandIdentity/brand-identity";
import PartnerSlider from "@/components/PartnerSlider/partner-slider";
import GallerySection from "@/components/GallerySection/gallery-section";
import SingleColumnGallery from "@/components/GallerySection/gallery-section";
import LandingFooterV2 from "@/components/footers/landing-footerV2/landing-footerV2";
import Header from "@/components/headers/landing-header/landing-headerV2";
import { HeroSection } from "@/components/grids/grid-items-container/v2/hero-section";
import { IntroCardSection } from "@/components/IntroCardSection/intro-card-section";
export default async function LandingPage() {
  return (
    <>
      {/* <HeroSection />
      <BrandIdentity />
      <PartnerSlider />
      <IntroCardSection />
      <SingleColumnGallery />
      <LandingFooterV2 /> */}
      <Header />
      <HeroSection />
      <IntroCardSection />

      <Container size="xl" classNames={{ root: classes.landingContainer }}>
        <Suspense fallback={<Loader size={48} />}>
          {/* <SearchBar /> */}
        </Suspense>
        {/* <GridItemsContainerV2 /> */}
        {/* <Stack gap="lg" mb={"xl"}>
          <h1 className={classes.pageTitle}>Smash & Travel Vietnam (STV)</h1>
          <Text lh={1.5} pl={54} pr={54} className={classes.pageSubtitle}>
            Warm greetings from Smash & Travel Vietnam (STV) – a specialized
            travel brand under Vietnam Incredible Land Tours (VIL), part of Viet
            Han Trading Co., Ltd, proudly established since 2011...{" "}
            <Link
              className={classes.seeMoreLink}
              href="https://jenahair.com/about"
            >
              See more
            </Link>
          </Text>
        </Stack>
        <Stack gap={6} mb={"xl"} mt={56}>
          <h2 className={classes.sectionTitle}>Our locations for you</h2>
          <h3 className={classes.sectionSubTitle}>
            Vietnam has many beautiful landscapes
          </h3>
        </Stack>

         <GridItemsContainerV2 />

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
