"use client";

import { Tabs, Title, Text, Container, rem } from "@mantine/core";
import {
  IconLayoutGrid,
  IconScissors,
  IconMoodSmile,
} from "@tabler/icons-react";
import classes from "./gallery-section.module.scss";

export function GallerySection() {
  const iconStyle = { width: rem(18), height: rem(18) };

  return (
    <Container size="lg" className={classes.container}>
      <Title order={2} className={classes.title}>
        Nhật ký cắt tóc nữ
      </Title>

      <Text className={classes.description}>
        Tiệm tóc nữ quận Tân Phú được chị em truyền miệng vì "Tay nghề giỏi, tận
        tâm & sử dụng sản phẩm nhập khẩu tốt cho sức khỏe". Chuyên chữa trị tóc
        hư tổn, cắt tóc tạo kiểu, tẩy tóc nhuộm màu thời trang..{" "}
        <a href="#" className={classes.link}>
          Xem nhật ký
        </a>
      </Text>

      <Tabs
        defaultValue="all"
        classNames={{
          root: classes.tabsRoot,
          list: classes.tabsList,
          tab: classes.tab,
        }}
      >
        <Tabs.List justify="flex-start">
          <Tabs.Tab
            value="all"
            leftSection={<IconLayoutGrid style={iconStyle} />}
          >
            Tất cả nhật ký
          </Tabs.Tab>

          <Tabs.Tab
            value="hair"
            leftSection={<IconScissors style={iconStyle} />}
          >
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
          <p>Hiển thị grid chứa tất cả nhật ký ở đây...</p>
        </Tabs.Panel>

        <Tabs.Panel value="hair">
          <p>Hiển thị danh sách tạo mẫu tóc...</p>
        </Tabs.Panel>

        <Tabs.Panel value="makeup">
          <p>Hiển thị danh sách trang điểm...</p>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
