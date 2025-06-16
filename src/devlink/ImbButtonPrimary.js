"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbButtonPrimary.module.css";

export function ImbButtonPrimary({
  as: _Component = _Builtin.Block,
  buttonText = "Button",
  id = "",
  variant = "Base",
  runtimeProps = {},
  children = "",
  children2 = "",
}) {
  const _styleVariantMap = {
    Base: "",
    secondary: "w-variant-4638f536-2f69-99c4-07f0-0dd395532f38",
    tertier: "w-variant-9ddb0cbd-b4db-df36-39ad-7e33a2cdac6e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "imb-button", _activeStyleVariant)}
      tag="div"
      id={id}
      {...runtimeProps}
    >
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "imb-button-text", _activeStyleVariant)}
      >
        {buttonText}
      </_Builtin.Paragraph>
    </_Component>
  );
}
