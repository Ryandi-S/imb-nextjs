"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbMenuLink.module.css";

export function ImbMenuLink({
  as: _Component = _Builtin.Block,
  text = "Link Text",
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682d515df13b90b4941a9333_home.svg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "imb-menu-link")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-menu-link-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-menu-link-image-frame")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "imb-menu-link-image")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={image}
          />
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "imb-menu-link-text")}
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {text}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
