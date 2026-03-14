// NavMenu.tsx
import React from "react";
import classes from "./landing-headerV2.module.scss";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#" },
  { label: "Dịch vụ", href: "#" },
  { label: "Nhật ký", href: "#" },
  { label: "Cam kết", href: "#" },
  { label: "Liên hệ", href: "#" },
];

const NavMenu: React.FC = () => {
  return (
    <nav className={classes.navSection}>
      {NAV_LINKS.map((link, index) => (
        <a key={index} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;
