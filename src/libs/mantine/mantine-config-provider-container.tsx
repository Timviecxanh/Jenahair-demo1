"use client";

import {
  Container,
  createTheme,
  MantineProvider,
  NavLink,
} from "@mantine/core";
import { ReactNode } from "react";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/vi";
import { Notifications } from "@mantine/notifications";
// 1. Import font Montserrat từ Google Fonts (Next.js)
import { Montserrat } from "next/font/google";

// Cấu hình font Montserrat với các subset cần thiết (có cả Vietnamese)
const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface MantineConfigProviderContainerProps {
  children: ReactNode;
}

export default function MantineConfigProviderContainer({
  children,
}: Readonly<MantineConfigProviderContainerProps>) {
  const theme = createTheme({
    // 2. Thiết lập font cho toàn bộ hệ thống
    fontFamily: montserrat.style.fontFamily,

    // Nếu bạn muốn font cho các thẻ tiêu đề (h1, h2...) cũng là Montserrat
    headings: {
      fontFamily: montserrat.style.fontFamily,
    },

    components: {
      Container: Container.extend({
        vars: (_, { size }) => {
          if (size === "xl") {
            return {
              root: {
                "--container-size": "1440px",
              },
            };
          }
          return { root: {} };
        },
      }),
      NavLink: NavLink.extend({
        vars: () => ({
          root: {},
          children: {
            "--nl-offset": "0",
          },
        }),
        styles: {},
      }),
    },
  });

  return (
    // 3. Truyền theme vào MantineProvider
    <MantineProvider theme={theme} classNamesPrefix="vinaup">
      <Notifications />
      <DatesProvider
        settings={{
          locale: "vi",
          firstDayOfWeek: 1,
          weekendDays: [0, 6],
        }}
      >
        {/* Đảm bảo toàn bộ con cũng nhận class font để tránh lỗi fallback font */}
        <div className={montserrat.className}>{children}</div>
      </DatesProvider>
    </MantineProvider>
  );
}
