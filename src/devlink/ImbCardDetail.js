"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ImbCardDetail.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46e4f82b-05e8-57a1-c60f-767589ad00d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46e4f82b-05e8-57a1-c60f-767589ad00d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749534658816}},"actionLists":{"a-2":{"id":"a-2","title":"accordion open","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"46e4f82b-05e8-57a1-c60f-767589ad00d2"},"heightValue":59,"widthUnit":"AUTO","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749599063289}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ImbCardDetail({
  as: _Component = _Builtin.Block,
  headerIcon = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682ae1a82f6cc8419c06e1fd_receipt.svg",
  subheaderText = "Subheader Text",
  headerMainText = "Main Text",
  headerSecondaryText = "Secondary",
  description = "Main Description",
  descriptionSecondary = "Desc 2nd",
  footerText = "Footer Text",
  footerIcon1 = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682ae1a92c04847a975ca857_user-check.svg",
  footerIcon2 = "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682ae1a829f88ae54c8af7f8_user-up.svg",
  hasLink = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "imb-card-detail", "imb-card-basic")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-card-subheader")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "imb-display-inline",
            "imb-card-subheader-icon"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={headerIcon}
        />
      </_Builtin.Block>
      <_Builtin.Layout
        className={_utils.cx(
          _styles,
          "imb-card-detail-data",
          "imb-padding-none"
        )}
        id={_utils.cx(
          _styles,
          "w-node-c3027de2-6840-2667-9def-e77f4774bda1-4774bd9c"
        )}
      >
        <_Builtin.Cell
          id={_utils.cx(
            _styles,
            "w-node-c3027de2-6840-2667-9def-e77f4774bda2-4774bd9c"
          )}
        >
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "accordion")}
            data-w-id="46e4f82b-05e8-57a1-c60f-767589ad00d2"
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "accordion-toggle-bottom")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "imb-margin-none")}
                tag="h3"
              >
                {headerMainText}
              </_Builtin.Heading>
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "accordion-dropdown")}
              tag="nav"
            >
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"Test 123"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
        </_Builtin.Cell>
        <_Builtin.Cell
          id={_utils.cx(
            _styles,
            "w-node-c3027de2-6840-2667-9def-e77f4774bda8-4774bd9c"
          )}
        />
      </_Builtin.Layout>
      {hasLink ? (
        <_Builtin.Link
          className={_utils.cx(_styles, "imb-card-link")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        />
      ) : null}
    </_Component>
  );
}
