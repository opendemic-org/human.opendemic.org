import strings from "./strings";

export const en = buildLocaleMessages("en");
export const fr = buildLocaleMessages("fr");

function buildLocaleMessages(locale) {
  const messages = {};
  Object.keys(strings).forEach((key) => {
    messages[key] = strings[key][locale];
  });
  return messages;
}
