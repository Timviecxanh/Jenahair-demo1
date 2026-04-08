"use client";

import { Carousel } from "@mantine/carousel";
import { useRef, useState } from "react";
import classes from "./landing-carousel.module.scss";
import { Container, Group } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import ImageCard from "../image-card/image-card";
import { SearchBarContainer } from "../search-bar/search-bar-container/search-bar-container";

export function LandingCarousel({
  slides = [],
  showText = true,
  loop = true,
  orientation = "horizontal",
}: any) {
  const [active, setActive] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const validSlides = Array.isArray(slides) ? slides.filter((s) => s) : [];
  if (validSlides.length === 0) return null;

  const currentSlide = validSlides[active];
  const showTextBox =
    showText && (currentSlide?.titleMain || currentSlide?.subTitle);

  return (
    <div className={classes.landingCarouselWrapper}>
      <div className={classes.searchBarTopCenter}>
        <SearchBarContainer logoText="JenaHair" menusData={[]} />
      </div>

      <Carousel
        withIndicators
        slideSize="100%"
        emblaOptions={{ loop, align: "center" }}
        onSlideChange={setActive}
        classNames={{
          root: classes.landingCarousel,
          indicators: classes.indicators,
          indicator: classes.indicator,
          slide: classes.cleanSlide,
        }}
        withControls={false}
        orientation={orientation}
        plugins={[autoplay.current]}
      >
        {validSlides.map((slide, index) => (
          <Carousel.Slide key={index}>
            <div className={classes.slideInner}>
              <ImageCard
                title={slide.titleMain || ""}
                imageUrl={slide.imageUrl}
                href={slide.href}
                variant="floating"
                priority={index === 0}
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>

      {showTextBox && (
        <div className={classes.textBoxWrapper}>
          <Container className={classes.textBoxContainer} size="xl">
            <Group
              justify="space-between"
              align="center"
              className={classes.textBoxGroup}
            >
              <div>
                {currentSlide?.titleMain && (
                  <Group gap={8}>
                    <span className={classes.title}>
                      {currentSlide.titleMain}
                    </span>
                    {currentSlide.titleHighlight && (
                      <span className={classes.highlight}>
                        {currentSlide.titleHighlight}
                      </span>
                    )}
                  </Group>
                )}
                {currentSlide?.subTitle && (
                  <p className={classes.subTitleText}>
                    {currentSlide.subTitle}
                  </p>
                )}
              </div>
            </Group>
          </Container>
        </div>
      )}
    </div>
  );
}
