"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbCardCopyNumber.module.css";

export function ImbCardCopyNumber({
  as: _Component = _Builtin.Block,
  text = "Title",
  text2 = "Number",
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-15")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-color-deep-green")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-13")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-block-7")}
          tag="div"
        >
          {text2}
        </_Builtin.Block>
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/684a26aa9c7239d01ca3cfb9_Trailing%20Icon.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
