"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbButtonOutline.module.css";

export function ImbButtonOutline({
  as: _Component = _Builtin.Block,
  buttonText = "Button",
  id = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "imb-button", "imb-button-outline")}
      tag="div"
      id={id}
    >
      <_Builtin.Paragraph className={_utils.cx(_styles, "imb-button-text")}>
        {buttonText}
      </_Builtin.Paragraph>
    </_Component>
  );
}
