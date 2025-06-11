"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbButtonOutlineLarge.module.css";

export function ImbButtonOutlineLarge({
  as: _Component = _Builtin.Block,
  text = (
    <>
      {"Button"}
      <br />
    </>
  ),
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "imb-button",
        "imb-button-outline",
        "imb-button-large"
      )}
      tag="div"
    >
      <_Builtin.Paragraph className={_utils.cx(_styles, "imb-button-text")}>
        {text}
      </_Builtin.Paragraph>
    </_Component>
  );
}
