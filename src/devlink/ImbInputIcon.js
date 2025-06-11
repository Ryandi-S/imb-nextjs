"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbInputIcon.module.css";

export function ImbInputIcon({
  as: _Component = _Builtin.Block,
  label = "Placeholder",
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/683e75c8d7f0f4f9036d68d8_user.svg",
  id = "",
  type = "text",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "imb-input", "imb-input-icon")}
      tag="div"
      id={id}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-input-container")}
        tag="div"
      >
        <_Builtin.FormBlockLabel
          className={_utils.cx(
            _styles,
            "imb-input-label",
            "imb-input-icon-label"
          )}
          htmlFor="field-3"
        >
          {label}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          className={_utils.cx(
            _styles,
            "imb-input-field",
            "imb-input-icon-field"
          )}
          name="field-3"
          maxLength={256}
          data-name="Field 3"
          disabled={false}
          type="text"
          required={false}
          autoFocus={false}
          data-type={type}
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "imb-input-field-icon-image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-input-error-message")}
        tag="div"
      >
        {"* Email field is required"}
      </_Builtin.Block>
    </_Component>
  );
}
