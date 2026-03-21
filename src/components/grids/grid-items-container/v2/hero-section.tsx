import { SearchBarContainer } from "@/components/primitives/search-bar/search-bar-container/search-bar-container";
import classes from "./hero-section.module.scss";
import Image from "next/image";
import { IMenuResponse } from "@/interfaces/menu-interface";

export default function HeroSection() {
  const menusData: IMenuResponse[] = [
    {
      id: "1",
      title: "Home",
      targetType: "custom-url",
      customUrl: "/",
      description: "",
      targetId: "",
      isRoot: true,
      sortOrder: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      children: [],
    },
    {
      id: "2",
      title: "Services",
      targetType: "custom-url",
      customUrl: "/services",
      description: "",
      targetId: "",
      isRoot: true,
      sortOrder: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      children: [
        {
          id: "2-1",
          title: "Hair Care",
          targetType: "custom-url",
          customUrl: "/hair-care",
          description: "",
          targetId: "",
          isRoot: false,
          sortOrder: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          children: [],
        },
      ],
    },
  ];

  return (
    <section className={classes.heroWrapper}>
      <div className={classes.bgImage}>
        <Image
          src="/images/group1.png"
          alt="hair Banner"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>

      <div className={classes.container}>
        <div className={classes.searchBox}>
          <SearchBarContainer menusData={menusData} />
        </div>
      </div>
    </section>
  );
}
