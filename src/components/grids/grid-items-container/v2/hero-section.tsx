import classes from "./hero-section.module.scss";
import Image from "next/image";

// TẠO GIẢ ĐỊNH HEADER: Bạn hãy thay bằng Component Header thật của bạn nhé!
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
          src="/images/group1.png" // Nhớ thay đúng tên file ảnh của bạn
          alt="Jena Hair Events Banner"
          width={1259} // Khai báo đúng kích thước bạn muốn
          height={786}
          priority
          sizes="100vw"
          className={classes.bannerImage}
        />
      </div>
    </section>
  );
}
