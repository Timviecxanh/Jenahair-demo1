"use client";

import { Drawer, Stack, Text, Group } from "@mantine/core";
import { useMemo } from "react";
import Link from "next/link";
import { Route } from "next";
import { IMenuResponse } from "@/interfaces/menu-interface";
import { TreeManager } from "@/helpers/tree-manager-helper";
import HomeIcon from "@/components/icons/vinaup-home-icon";
import TiktokIcon from "@/components/icons/tiktok.svg";
import InstagramIcon from "@/components/icons/instagram-icon.svg";
import FaceBookIcon from "@/components/icons/facebook-icon.svg";
import GoogleMapIcon from "@/components/icons/google-map.svg";

import classes from "./../search-bar/search-bar-container/search-bar-container.module.scss";

interface MenuDrawerProps {
  opened: boolean;
  onClose: () => void;
  menusData: IMenuResponse[];
}

export function MenuDrawer({ opened, onClose, menusData }: MenuDrawerProps) {
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
            onClick={onClose}
            className={classes.menuItem}
            style={{ paddingLeft: `${depth * 16 + 12}px` }}
          >
            {content}
          </a>
        ) : (
          <Link
            href={url as Route}
            onClick={onClose}
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

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      size="xs"
      title={
        <Link onClick={onClose} href="/" className={classes.homeLink}>
          <HomeIcon size={20} stroke="black" />
          <span>Home</span>
        </Link>
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
  );
}
