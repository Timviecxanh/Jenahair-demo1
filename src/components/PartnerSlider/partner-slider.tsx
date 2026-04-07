import classes from "./partner-slider.module.scss";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";

interface Partner {
  img: string;
  name: string;
  url: string;
}

const PARTNERS: Partner[] = [
  { img: "/images/malasia.webp", name: "Group 1", url: "#" },
  { img: "/images/malasia.webp", name: "ATS", url: "#" },
  { img: "/images/malasia.webp", name: "Slider", url: "#" },
  { img: "/images/malasia.webp", name: "Abc", url: "#" },
  { img: "/images/malasia.webp", name: "Schwarzkopf", url: "#" },
  { img: "/images/malasia.webp", name: "JenaHair", url: "#" },
];

export default function PartnerSlider() {
  const displayPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className={classes.sliderContainer}>
      <Marquee direction="right" speed={80} gradient={false}>
        {displayPartners.map((item, index) => (
          <Link
            key={`${item.name}-${index}`}
            href={item.url as any}
            className={classes.partnerItem}
            target={item.url.startsWith("http") ? "_blank" : "_self"}
          >
            <div className={classes.imageWrapper}>
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={200}
                sizes="(max-width: 768px) 100px, 150px"
                className={classes.partnerImage}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
