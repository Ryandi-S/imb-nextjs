"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbLabelValue.module.css";

export function ImbLabelValue({
  as: _Component = _Builtin.Block,
  label = "Label",
  value = "Value",
  id = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "imb-lv-display")} tag="div">
      <_Builtin.Heading className={_utils.cx(_styles, "imb-lv-label")} tag="h4">
        {label}
      </_Builtin.Heading>
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "imb-lv-value")}
        id={id}
      >
        {value}
      </_Builtin.Paragraph>
    </_Component>
  );
}
