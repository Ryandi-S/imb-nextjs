"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbCardBasic.module.css";

export function ImbCardBasic({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682aaaafdb51ed34d18cec09_loans.svg",
  title = "Card Title",
  text = "Card description",

  link = {
    href: "#",
  },

  closable,
  hasLink = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "imb-card-basic")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-card-image-container")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "imb-card-image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "imb-card-text")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "imb-card-text-heading")}
          tag="h3"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "imb-card-text-description")}
        >
          {text}
        </_Builtin.Paragraph>
      </_Builtin.Block>
      {hasLink ? (
        <_Builtin.Link
          className={_utils.cx(_styles, "imb-card-link")}
          button={false}
          block=""
          options={link}
        />
      ) : null}
      {closable ? (
        <_Builtin.Image
          className={_utils.cx(_styles, "imb-card-close")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682ab1bdad8829907fce670c_close.svg"
        />
      ) : null}
    </_Component>
  );
}
