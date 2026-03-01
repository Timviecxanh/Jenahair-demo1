import { SearchBarContainer } from "@/components/primitives/search-bar/search-bar-container/search-bar-container";
import classes from "./hero-section.module.scss";
import Image from "next/image";
import GruopImage from "@/components/image/group1.png";
export default function HeroSection() {
  return (
    <section className={classes.heroWrapper}>
      <div className={classes.bgImage}>
        <Image
          src={GruopImage}
          alt="hair Banner"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        {/* <div className={classes.overlay} /> */}
      </div>

      <div className={classes.container}>
        <div className={classes.searchBox}>
          <SearchBarContainer />
        </div>
      </div>
    </section>
  );
}
