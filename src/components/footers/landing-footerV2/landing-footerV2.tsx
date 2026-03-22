import { Box, Group, Text, Anchor } from "@mantine/core";
import classes from "./landing-footerV2.module.scss";

export default function LandingFooterV2() {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.card}>
        <Group
          justify="space-between"
          align="flex-start"
          className={classes.content}
        >
          <Box className={classes.leftCol}>
            <Text className={classes.label}>Nhận làm tóc theo lịch hẹn</Text>
            <Text className={classes.highlightText}>Booking: 0928278292</Text>
            <Group gap="md" className={classes.linkGroup}>
              <Anchor href="#" className={classes.link}>
                Zalo
              </Anchor>
              <Anchor href="#" className={classes.link}>
                Messenger
              </Anchor>
            </Group>
          </Box>

          <Box className={classes.rightCol}>
            <Text className={classes.label} ta="right">
              Thời gian phục vụ
            </Text>
            <Text className={classes.highlightText} ta="right">
              9h - 19h30
            </Text>
            <Text className={classes.subText} ta="right">
              Tất cả các ngày trong tuần
            </Text>
          </Box>
        </Group>
      </Box>

      <Text className={classes.copyright}>
        <span className={classes.brand}>Jenahair</span> © 2026 by VinaUp
      </Text>
    </Box>
  );
}
