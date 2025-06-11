"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbHeroBanner.module.css";

export function ImbHeroBanner({
  as: _Component = _Builtin.Block,
  subtitle = "Subtitle",
  title = "Lorem ipsum dolor sit amet",
  description = "Banner description",
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682ed01dd00083ce80ae7ac3_banner.png",
}) {
  return (
    <_Component className={_utils.cx(_styles, "imb-hero-banner")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-hero-banner-image")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "imb-hero-baner-image-src")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-hero-banner-content")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "imb-typography-light")}
          tag="h3"
        >
          {subtitle}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(_styles, "imb-typography-light")}
          tag="h1"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Paragraph>{description}</_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
