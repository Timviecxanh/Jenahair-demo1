"use client";

import { Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Route } from "next";
import classes from "./image-card.module.scss";

interface ImageCardProps {
  title: string;
  imageUrl: string;
  href?: string;
  priority?: boolean;
  variant?: "floating" | "banner";
}

export default function ImageCard({
  title,
  imageUrl,
  href,
  priority = false,
  variant = "floating",
}: ImageCardProps) {
  const content = (
    <div className={classes.imageWrapper}>
      <Image
        src={imageUrl}
        alt={title}
        className={classes.image}
        width={0}
        height={0}
        sizes="100vw"
        priority={priority}
      />

      {variant === "floating" ? (
        <Text className={classes.titleFloating}>{title}</Text>
      ) : (
        <div className={classes.titleBannerWrapper}>
          <Text className={classes.titleBanner}>{title}</Text>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href as Route} className={classes.linkWrapper}>
        {content}
      </Link>
    );
  }

  return content;
}
