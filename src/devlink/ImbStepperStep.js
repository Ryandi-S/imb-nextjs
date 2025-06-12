"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImbStepperStep.module.css";

export function ImbStepperStep({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "imb-stepper-step")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-stepper-tm")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-img-block")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-stepper-1")}
            loading="lazy"
            width="8"
            height="8"
            alt=""
            src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/683eda2d146fb15c6a4e92f6_verify.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-text")}
          tag="div"
        >
          {"Verify ID"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-stepper-step-block")}
        tag="div"
      />
    </_Component>
  );
}
