import * as React from "react";
import * as Types from "./types";

declare function ImbInputText(props: {
  as?: React.ElementType;
  placeholder?: React.ReactNode;
  errorMessage?: React.ReactNode;
  id?: Types.Basic.IdTextInput;
  type?: Types.Builtin.Text;
}): React.JSX.Element;
