"use client";

import React, { useState } from "react";
import NavMenu from "./nav-menu";
import styles from "./landing-headerV2.module.scss";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.containerWrapper}>
      <header className={styles.header}>
        <a href="/" className={styles.logoSection}>
          <span>JENA HAIR</span>
        </a>

        <div className={styles.desktopMenu}>
          <NavMenu />
        </div>

        <button className={styles.ctaButton}>Đặt lịch ngay</button>

        <button className={styles.hamburger} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </header>

      {open && (
        <div className={styles.mobileMenu}>
          <a href="/">Trang chủ</a>
          <a href="/">Dịch vụ</a>
          <a href="/">Bảng giá</a>
          <a href="/">Liên hệ</a>
          <a href="/" className={styles.mobileCTA}>
            Đặt lịch
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
