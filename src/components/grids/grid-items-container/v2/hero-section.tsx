import classes from "./hero-section.module.scss";
import Image from "next/image";

import Header from "@/components/primitives/search-bar/search-bar";

export default function HeroSection() {
  return (
    <section className={classes.heroWrapper}>
      <div className={classes.headerOverlay}>
        <div className={classes.headerContent}>
          <Header />
        </div>
      </div>

      <div className={classes.bannerContainer}>
        <Image
          src="/images/group1.png"
          alt="Jena Hair Events Banner"
          width={1259}
          height={786}
          priority
          sizes="100vw"
          className={classes.bannerImage}
        />
      </div>
    </section>
  );
}
