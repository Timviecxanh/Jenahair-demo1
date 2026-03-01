"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ActionIcon, Group, TextInput } from "@mantine/core";
import classes from "./search-bar-container.module.scss";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Route } from "next";
import { IMenuResponse } from "@/interfaces/menu-interface";
import HomeIcon from "@/components/icons/vinaup-home-icon";
import { useDisclosure } from "@mantine/hooks";

import TiktokIcon from "@/components/icons/tiktok.svg";
import InstagramIcon from "@/components/icons/instagram-icon.svg";
import FaceBookIcon from "@/components/icons/facebook-icon.svg";
import GoogleMapIcon from "@/components/icons/google-map.svg";
import MenuIcon from "@/components/icons/menu-icon.svg";
import { FaListCheck } from "react-icons/fa6";
import LandingDrawer from "@/components/sidebars/landing-drawer/landing-drawer";

interface SearchBarProps {
  logoUrl?: string;
}

export function SearchBarContainer({ logoUrl }: SearchBarProps) {
  const router = useRouter();
  const params = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(params.get("q") || "");
  const basePath = "/blogs";
  interface SearchBarProps {
    logoUrl?: string;
    menusData: IMenuResponse[];
  }
  const handleSearch = () => {
    const newParams = new URLSearchParams();
    if (searchQuery) newParams.set("q", searchQuery);
    const queryString = newParams.toString();
    router.push(`${basePath}${queryString ? `?${queryString}` : ""}` as Route);
  };

  return (
    <div className={classes.searchWrapper}>
      <TextInput
        id="stv-search-bar"
        classNames={{
          root: classes.searchBarRoot,
          input: classes.searchBarInput,
          section: classes.searchBarSection,
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        leftSection={<span className={classes.logoText}>Jenahair</span>}
        rightSectionWidth="auto"
        rightSection={
          <Group gap={15} px={15} className={classes.rightSectionIcons}>
            <a href="#" className={classes.socialLink}>
              <GoogleMapIcon width={30} height={30} />
            </a>
            <a href="#" className={classes.socialLink}>
              <TiktokIcon width={30} height={30} />
            </a>
            <a href="#" className={classes.socialLink}>
              <InstagramIcon width={30} height={30} />
            </a>
            <a href="#" className={classes.socialLink}>
              <FaceBookIcon width={30} height={30} />
            </a>

            <div className={classes.divider} />

            {/* <ActionIcon variant="transparent" onClick={handleSearch}>
              <HiOutlineSearch size={30} color="#4b5d3f" />
            </ActionIcon> */}
            {/* <FaListCheck size={30} /> */}
            {/* <LandingDrawer /> */}
          </Group>
        }
      />
    </div>
  );
}
