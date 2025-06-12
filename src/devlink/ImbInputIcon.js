"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbInputIcon.module.css";

export function ImbInputIcon({
  as: _Component = _Builtin.Block,
  label = "Placeholder",
  image = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/684a0fd6311dd0331839fe92_tag-01.svg",
  id = "",
  type = "text",
  variant = "Base",
  runtimeProps = {},
}) {
  const _styleVariantMap = {
    Base: "",
    "input-button": "w-variant-e8d85457-56e5-812f-98fb-4f1ce3c4bd91",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "imb-input",
        "imb-input-icon",
        _activeStyleVariant
      )}
      tag="div"
      id={id}
      {...runtimeProps}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "imb-input-container",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.FormBlockLabel
          className={_utils.cx(
            _styles,
            "imb-input-label",
            "imb-input-icon-label",
            _activeStyleVariant
          )}
          htmlFor="field-3"
        >
          {label}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          className={_utils.cx(
            _styles,
            "imb-input-field",
            "imb-input-icon-field",
            _activeStyleVariant
          )}
          name="field-3"
          maxLength={256}
          data-name="Field 3"
          disabled={false}
          type="text"
          required={false}
          autoFocus={false}
          data-type={type}
          {...runtimeProps}
        />
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "imb-input-field-icon-image",
            _activeStyleVariant
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
        <_Builtin.Link
          className={_utils.cx(_styles, "button", _activeStyleVariant)}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Apply"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "imb-input-error-message",
          _activeStyleVariant
        )}
        tag="div"
      >
        {"* Field is required"}
      </_Builtin.Block>
    </_Component>
  );
}
