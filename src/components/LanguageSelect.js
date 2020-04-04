import React, { useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";

import strings from "../lib/localized/strings";
import UserActions from "../store/user";

export default function LanguageSelect(props) {
  const { locale } = useIntl();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(strings.languages[locale]);

  function renderOption(option, { handleClick }) {
    return (
      <MenuItem
        id={option}
        label={option}
        key={option}
        onClick={handleClick}
        text={strings.languages[option]}
      />
    );
  }

  function handleSelect(item) {
    setSelected(strings.languages[item]);
    dispatch(UserActions.setLocale(item));
  }

  return (
    <Select
      filterable={false}
      items={Object.keys(strings.languages)}
      itemRenderer={renderOption}
      onItemSelect={handleSelect}
      popoverProps={{ minimal: true }}
    >
      <Button rightIcon="caret-down" text={selected} />
    </Select>
  );
}
