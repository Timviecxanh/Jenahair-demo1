import classes from "./intro-card-section.module.scss";
import { SimpleGrid, Stack, Title, Text, Box } from "@mantine/core";
import Image from "next/image";

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
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={{ base: 40, md: 80 }}
        className={classes.container}
      >
        <Box className={classes.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            className={classes.image}
            priority
            width={500}
            height={300}
          />
        </Box>

        <Stack justify="center" className={classes.content}>
          <div className={classes.topContent}>
            <Title order={2} className={classes.title}>
              {title}
            </Title>

            <Text className={classes.subtitle}>{subtitle}</Text>
          </div>
          <Box className={classes.serviceGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${classes.serviceItem} ${service.highlight ? classes.tagHighlight : classes.tagNormal}`}
              >
                {service.label}
              </div>
            ))}
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
