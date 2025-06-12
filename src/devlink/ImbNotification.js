"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbNotification.module.css";

export function ImbNotification({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "imb-notification")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-6")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6849fd0807af32bd1aa14df7_Vector%20(1).svg"
      />
      <_Builtin.Block className={_utils.cx(_styles, "text-block-6")} tag="div">
        {"The link in the SMS will remain active for the next 72 hours."}
      </_Builtin.Block>
    </_Component>
  );
}
