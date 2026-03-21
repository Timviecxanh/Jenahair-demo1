"use client";

import { Tabs, rem } from "@mantine/core";
import {
  IconLayoutGrid,
  IconScissors,
  IconMoodSmile,
} from "@tabler/icons-react";
import classes from "./gallery-section.module.scss";

export default function GalleryTabs() {
  const iconStyle = { width: rem(18), height: rem(18) };

  return (
    <Tabs
      defaultValue="all"
      classNames={{
        root: classes.tabsRoot,
        list: classes.tabsList,
        tab: classes.tab,
      }}
    >
      <Tabs.List>
        <Tabs.Tab
          value="all"
          leftSection={<IconLayoutGrid style={iconStyle} />}
        >
          Tất cả nhật ký
        </Tabs.Tab>
        <Tabs.Tab value="hair" leftSection={<IconScissors style={iconStyle} />}>
          Tạo mẫu tóc
        </Tabs.Tab>
        <Tabs.Tab
          value="makeup"
          leftSection={<IconMoodSmile style={iconStyle} />}
        >
          Trang điểm chuyên nghiệp
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="all">
        <p>Toàn bộ nhật ký ở đây</p>
      </Tabs.Panel>

      <Tabs.Panel value="hair">
        <p> makeup</p>
      </Tabs.Panel>
    </Tabs>
  );
}
