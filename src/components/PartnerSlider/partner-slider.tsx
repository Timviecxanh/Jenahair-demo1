import classes from "./partner-slider.module.scss";
import { Text } from "@mantine/core";
import Marquee from "react-fast-marquee";
import Link from "next/link";

interface Partner {
  img: string;
  url: string;
}
const PARTNERS: Partner[] = [
  { img: "Milbon", url: "#" },
  { img: "neo-liscio", url: "#" },
  { img: "Ordeve", url: "#" },
  { img: "Davines", url: "#" },
  { img: "ATS", url: "#" },
  { img: "Ats salon special", url: "#" },
  { img: "O.Clinic plus", url: "#" },
  { img: "Wella Blondor Multi ", url: "#" },
];

export default function PartnerSlider() {
  const displayPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className={classes.sliderContainer}>
      <Marquee direction="right" speed={100}>
        {displayPartners.map((item, index) => (
          <Link
            key={`${item.img}-${index}`}
            href={item.url as any}
            className={classes.partnerItem}
            target={item.url.startsWith("http") ? "_blank" : "_self"}
          >
            <Text className={classes.partnerText}>{item.img}</Text>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
