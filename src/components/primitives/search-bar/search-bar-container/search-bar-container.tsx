"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  ActionIcon,
  Group,
  TextInput,
  Drawer,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState, useMemo } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaListCheck } from "react-icons/fa6";
import { Route } from "next";
import Link from "next/link";
import Image from "next/image";

import classes from "./search-bar-container.module.scss";
import { IMenuResponse } from "@/interfaces/menu-interface";
import { TreeManager } from "@/helpers/tree-manager-helper";
import HomeIcon from "@/components/icons/vinaup-home-icon";

import TiktokIcon from "@/components/icons/tiktok.svg";
import InstagramIcon from "@/components/icons/instagram-icon.svg";
import FaceBookIcon from "@/components/icons/facebook-icon.svg";
import GoogleMapIcon from "@/components/icons/google-map.svg";
import MenuIcon from "@/components/icons/menu-icon";
interface SearchBarProps {
  logoUrl?: string;
  menusData: IMenuResponse[];
}

export function SearchBarContainer({ logoUrl, menusData }: SearchBarProps) {
  const router = useRouter();
  const params = useSearchParams();
  const [opened, { open, close }] = useDisclosure(false);
  const [searchQuery, setSearchQuery] = useState(params.get("q") || "");

  const menuTreeManager = useMemo(() => {
    return menusData.length > 0 ? new TreeManager(menusData) : null;
  }, [menusData]);

  const getMenuUrl = (menu: IMenuResponse): string => {
    if (menu.targetType === "custom-url" && menu.customUrl) {
      if (menu.customUrl === "") return "/";
      if (!menu.customUrl.startsWith("http"))
        return `https://${menu.customUrl}`;
      return menu.customUrl;
    }
    return "/";
  };

  const renderMenuItem = (
    menu: IMenuResponse,
    depth: number = 0,
    isRootChildren: boolean,
  ): React.ReactNode => {
    const url = getMenuUrl(menu);
    const hasChildren = menu.children && menu.children.length > 0;
    const isExternal =
      menu.targetType === "custom-url" && menu.customUrl !== "";

    const content = (
      <span
        className={
          !hasChildren && !isRootChildren
            ? classes.menuLabel
            : classes.menuLabelParent
        }
      >
        {menu.title}
      </span>
    );

    return (
      <div key={menu.id}>
        {isExternal ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className={classes.menuItem}
            style={{ paddingLeft: `${depth * 16 + 12}px` }}
          >
            {content}
          </a>
        ) : (
          <Link
            href={url as Route}
            onClick={close}
            className={classes.menuItem}
            style={{ paddingLeft: `${depth * 16 + 12}px` }}
          >
            {content}
          </Link>
        )}
        {hasChildren && (
          <Stack gap={0}>
            {menu.children?.map((child) =>
              renderMenuItem(child, depth + 1, false),
            )}
          </Stack>
        )}
      </div>
    );
  };

  const renderMenuTree = () => {
    const root = menuTreeManager?.getRoot();
    return root?.children?.map((menu) => renderMenuItem(menu, 0, true));
  };

  const handleSearch = () => {
    const newParams = new URLSearchParams();
    if (searchQuery) newParams.set("q", searchQuery);
    router.push(
      `/blogs${newParams.toString() ? `?${newParams.toString()}` : ""}` as Route,
    );
  };

  return (
    <>
      <div className={classes.searchWrapper}>
        <div className={classes.customSearchBar}>
          <div className={classes.logoSection}>
            {logoUrl ? (
              <Image src={logoUrl} alt="Logo" width={40} height={40} />
            ) : (
              <span className={classes.logoText}>Jenahair</span>
            )}
          </div>

          <TextInput
            id="search-input-unique-id"
            variant="unstyled"
            classNames={{
              input: classes.searchBarInput,
              root: classes.searchBarRoot,
            }}
            placeholder="Nhập Tìm Kiếm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <div className={classes.actionSection}>
            <Group gap={12} wrap="nowrap">
              <div className={classes.socialIcons}>
                <a href="#" className={classes.socialLink}>
                  <GoogleMapIcon width={35} height={35} />
                </a>
                <a href="#" className={classes.socialLink}>
                  <TiktokIcon width={35} height={35} />
                </a>
                <a href="#" className={classes.socialLink}>
                  <InstagramIcon width={35} height={35} />
                </a>
                <a href="#" className={classes.socialLink}>
                  <FaceBookIcon width={35} height={35} />
                </a>
              </div>

              <div className={classes.verticalDivider} />

              <ActionIcon variant="transparent" onClick={open}>
                <MenuIcon size={30} color="#F16406" />
              </ActionIcon>
            </Group>
          </div>
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        title={
          <Group gap={8} className={classes.homeLink} onClick={close}>
            <HomeIcon size={20} stroke="black" />
            <Text fw={600} size="sm">
              Home
            </Text>
          </Group>
        }
      >
        <div className={classes.drawerDivider} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 100px)",
            justifyContent: "space-between",
          }}
        >
          <Stack gap={0}>{renderMenuTree()}</Stack>

          <div className={classes.drawerSocials}>
            <Text size="sm" c="dimmed" mb="md" ta="center">
              Kết nối với chúng tôi
            </Text>
            <Group justify="center" gap={20}>
              <a href="#" className={classes.socialLink}>
                <GoogleMapIcon width={28} height={28} />
              </a>
              <a href="#" className={classes.socialLink}>
                <TiktokIcon width={28} height={28} />
              </a>
              <a href="#" className={classes.socialLink}>
                <InstagramIcon width={28} height={28} />
              </a>
              <a href="#" className={classes.socialLink}>
                <FaceBookIcon width={28} height={28} />
              </a>
            </Group>
          </div>
        </div>
      </Drawer>
    </>
  );
}
