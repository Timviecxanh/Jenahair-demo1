import React from "react";
import styles from "./intro-card-section.module.scss";
import Introimages from "../../../public/images/IntroImage.png";
import Image from "next/image";

interface ServiceType {
  id: string;
  name: string;
  isSpecial?: boolean;
}

const servicesData: ServiceType[] = [
  { id: "1", name: "Cắt tóc nữ theo khuôn mặt", isSpecial: true },
  { id: "2", name: "Uốn tóc Xù Hippi" },
  { id: "3", name: "Tẩy tóc" },
  { id: "4", name: "Duỗi tóc hơi nước" },
  { id: "5", name: "Uốn tóc sóng lơi" },
  { id: "6", name: "Makeup Chuyên Nghiệp", isSpecial: true },
  { id: "7", name: "Phục hồi tóc hư tổn", isSpecial: true },
  { id: "8", name: "Nhuộm tóc thời trang" },
  { id: "9", name: "Nhuộm tóc không tẩy" },
];

const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
);

const IntroCardSection: React.FC = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src={Introimages}
              alt="Jena Hair Studio"
              className={styles.image}
              width={400}
              height={500}
              priority
              placeholder="blur"
            />
          </div>
        </div>

        <div className={styles.contentColumn}>
          <h1 className={styles.title}>
            Tiệm cắt tóc nữ <br />
            <span className={styles.brandName}>Jena Hair</span>
          </h1>
          <p className={styles.subtitle}>
            Jena phục vụ cắt tóc, làm đầu, trang điểm bằng tất cả tình yêu và sự
            tỉ mỉ trong từng đường kéo.
          </p>

          <div className={styles.servicesGrid}>
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`${styles.serviceChip} ${
                  service.isSpecial ? styles.specialChip : ""
                }`}
              >
                <span className={styles.icon}>
                  {service.isSpecial ? <StarIcon /> : <LeafIcon />}
                </span>
                <span className={styles.serviceName}>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCardSection;
