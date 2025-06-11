"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbInputTextIcon.module.css";

export function ImbInputTextIcon({
  as: _Component = _Builtin.HFlex,
  text = "Type something",
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/683e638205e78ed81daad937_handphone.svg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "flex-block")} tag="div">
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "text-field-2")}
        autoFocus={false}
        maxLength={256}
        name="field-2"
        data-name="Field 2"
        type="text"
        disabled={false}
        required={true}
        id="field-2"
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "image")}
        width="16"
        height="16"
        loading="lazy"
        alt=""
        src={image}
      />
      <_Builtin.Block className={_utils.cx(_styles, "text-block-4")} tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
