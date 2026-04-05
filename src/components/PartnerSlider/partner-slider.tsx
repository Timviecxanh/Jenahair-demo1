import classes from "./partner-slider.module.scss";
import { Text } from "@mantine/core";
import Marquee from "react-fast-marquee";
import Link from "next/link";
interface Partner {
  name: string;
  url: string;
}
const PARTNERS: Partner[] = [
  { name: "Milbon", url: "#" },
  { name: "ATS", url: "#" },
  { name: "Slider", url: "#" },
  { name: "Abc", url: "#" },
  { name: "Schwarzkopf", url: "#" },
  { name: "JenaHair", url: "#" },
];

export default function PartnerSlider() {
  const displayPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className={classes.sliderContainer}>
      <Marquee direction="right" speed={100}>
        {displayPartners.map((item, index) => (
          <Link
            key={`${item.name}-${index}`}
            href={item.url as any}
            className={classes.partnerItem}
            target={item.url.startsWith("http") ? "_blank" : "_self"}
          >
            <Text className={classes.partnerText}>{item.name}</Text>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
