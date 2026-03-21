import classes from "./partner-slider.module.scss";
import { Text } from "@mantine/core";
import Marquee from "react-fast-marquee";
const PARTNERS = ["Milbon", "ATS", "Slider", "Abc", "Schwarzkopf", "JenaHair"];

export default function PartnerSlider() {
  const displayPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className={classes.sliderContainer}>
      <Marquee direction="right" speed={100}>
        {displayPartners.map((item, index) => (
          <div key={`${item}-${index}`} className={classes.partnerItem}>
            <Text className={classes.partnerText}>{item}</Text>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
