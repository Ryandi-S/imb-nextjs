"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbIconButtonSecondary.module.css";

export function ImbIconButtonSecondary({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682d4e9db07b124b856d5076_notif-white.svg",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "imb-icon-button",
        "imb-icon-button-secondary"
      )}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "imb-icon-button-icon")}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src={image}
      />
    </_Component>
  );
}
