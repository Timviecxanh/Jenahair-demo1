import classes from "./partner-slider.module.scss";
import { Text } from "@mantine/core";
import Marquee from "react-fast-marquee";
const PARTNERS = ["Milbon", "ATS", "Slider", "Abc", "Schwarzkopf", "JenaHair"];

export default function PartnerSlider() {
  // Nhân đôi danh sách để tạo hiệu ứng lặp vô tận mượt mà
  const displayPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className={classes.sliderContainer}>
      <Marquee direction="right" speed={80}>
        {displayPartners.map((item, index) => (
          <div key={`${item}-${index}`} className={classes.partnerItem}>
            <Text className={classes.partnerText}>{item}</Text>
            <Text className={classes.divider}>•</Text>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
