import classes from "./intro-card-section.module.scss";
import Image from "next/image";
import { Box, Title, Text } from "@mantine/core";

interface ServiceItem {
  label: string;
  highlight?: boolean;
}

interface IntroCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  services: ServiceItem[];
}

export default function IntroCardSection({
  title,
  subtitle,
  imageSrc,
  services,
}: IntroCardProps) {
  return (
    <Box className={classes.section}>
      <div className={classes.container}>
        <div className={classes.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            className={classes.image}
            priority
            width={320}
            height={450}
          />
        </div>

        <div className={classes.content}>
          <Title order={2} className={classes.title}>
            {title}
          </Title>
          <Text className={classes.subtitle}>{subtitle}</Text>

          <div className={classes.serviceGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${classes.serviceItem} ${
                  service.highlight ? classes.tagHighlight : classes.tagNormal
                }`}
              >
                {service.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}
