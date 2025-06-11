"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbAccordionItem.module.css";

export function ImbAccordionItem({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6847baf4cf55d1cfca353da1_piggy-bank-01%201.svg",
  text = "Accordion Title",
  text2 = "A flexible everyday account with fee-free banking, fee-free IMB transactions* and secure tap-and-pay options.",

  link = {
    href: "#",
  },

  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Open: "w-variant-3b4909fd-de30-dc8f-e04c-26e7051210cd",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "accordion_item", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion-toggle", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-5", _activeStyleVariant)}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6848e71304589db770eaed20_Vector.svg"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "accordion-toggle-icon",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-6", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-7", _activeStyleVariant)}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion_header", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-4", _activeStyleVariant)}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "imb-typography-bold",
            _activeStyleVariant
          )}
          tag="div"
        >
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion_body", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-7", _activeStyleVariant)}
        >
          {text2}
        </_Builtin.Paragraph>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-3", _activeStyleVariant)}
          button={false}
          block=""
          options={link}
        >
          {"Learn more"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
