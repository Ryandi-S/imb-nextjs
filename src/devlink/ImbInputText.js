"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbInputText.module.css";

export function ImbInputText({
  as: _Component = _Builtin.Block,
  placeholder = "Label",
  errorMessage = "Error message",
  id = "",
  type = "text",
}) {
  return (
    <_Component className={_utils.cx(_styles, "imb-input")} tag="div" id={id}>
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-input-container")}
        tag="div"
      >
        <_Builtin.FormBlockLabel
          className={_utils.cx(_styles, "imb-input-label")}
          htmlFor="field"
        >
          {placeholder}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "imb-input-field")}
          autoFocus={false}
          maxLength={256}
          name="field"
          type="text"
          disabled={false}
          required={false}
          data-type={type}
          id="field"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-input-error-message")}
        tag="div"
      >
        {errorMessage}
      </_Builtin.Block>
    </_Component>
  );
}
