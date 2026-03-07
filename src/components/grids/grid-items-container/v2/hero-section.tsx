import { SearchBarContainer } from "@/components/primitives/search-bar/search-bar-container/search-bar-container";
import { getAppConfigAction } from "@/actions/app-config-action";
import { getAllPublicMenusAction } from "@/actions/menu-action";
import classes from "./hero-section.module.scss";
import Image from "next/image";
import Group1 from "@/components/image/group1.png";

export default async function HeroSection() {
  const [configResponse, menusResponse] = await Promise.all([
    getAppConfigAction(),
    getAllPublicMenusAction(),
  ]);

  const logoUrl = configResponse.data?.logoUrl;
  const menusData = menusResponse.data ?? [];

  return (
    <section className={classes.heroWrapper}>
      <div className={classes.bgImage}>
        <Image
          src={Group1}
          alt="hair Banner"
          fill
          priority
          className={classes.heroImage}
        />
        <div className={classes.overlay} />
      </div>

      <div className={classes.container}>
        <div className={classes.searchBox}>
          <SearchBarContainer
            logoUrl={logoUrl || undefined}
            menusData={menusData}
          />
        </div>
      </div>
    </section>
  );
}
