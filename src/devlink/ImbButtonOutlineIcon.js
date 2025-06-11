"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbButtonOutlineIcon.module.css";

export function ImbButtonOutlineIcon({
  as: _Component = _Builtin.Block,
  buttonText = "Button",
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg",
  id = "",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "imb-button",
        "imb-button-outline",
        "imb-button-with-icon"
      )}
      tag="div"
      id={id}
    >
      <_Builtin.Paragraph className={_utils.cx(_styles, "imb-button-text")}>
        {buttonText}
      </_Builtin.Paragraph>
      <_Builtin.Image
        className={_utils.cx(_styles, "imb-button-icon")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
    </_Component>
  );
}
