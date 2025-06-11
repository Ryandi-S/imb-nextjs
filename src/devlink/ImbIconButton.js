"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbIconButton.module.css";

export function ImbIconButton({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682c3197dce3ea417ee80df8_notif.svg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "imb-icon-button")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "imb-icon-button-icon")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
    </_Component>
  );
}
