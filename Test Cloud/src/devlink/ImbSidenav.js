"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ImbMenuLinkActive } from "./ImbMenuLinkActive";
import { ImbMenuLink } from "./ImbMenuLink";
import * as _utils from "./utils";
import _styles from "./ImbSidenav.module.css";

export function ImbSidenav({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "imb-menu-link-set")} tag="div">
      <ImbMenuLinkActive
        text="Active Page"
        image="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682c3197dce3ea417ee80df8_notif.svg"
      />
      <ImbMenuLink text="Home" />
      <ImbMenuLink
        text="Account"
        image="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eec86c94548a98c68e50_edit-square.svg"
      />
    </_Component>
  );
}
