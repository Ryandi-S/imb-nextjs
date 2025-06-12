"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbCardItem.module.css";

export function ImbCardItem({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6847baf4cf55d1cfca353da1_piggy-bank-01%201.svg",
  text = "Reward Saver",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "without-icon": "w-variant-a19472cb-14e1-d074-f7da-519341e3b3e7",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "imb-list-card-item", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image-7", _activeStyleVariant)}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
