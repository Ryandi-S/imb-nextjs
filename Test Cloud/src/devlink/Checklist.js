"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Checklist.module.css";

export function Checklist({
  as: _Component = _Builtin.Block,
  text = "Checklist Item",
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-5")} tag="div">
      <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-6")}>
        {text}
      </_Builtin.Paragraph>
      <_Builtin.Image
        className={_utils.cx(_styles, "image-3")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682ae1a92c04847a975ca857_user-check.svg"
      />
    </_Component>
  );
}
