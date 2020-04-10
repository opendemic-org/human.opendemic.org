import strings from "./strings";

export const en = buildLocaleMessages("en");
export const es = buildLocaleMessages("es");
export const fr = buildLocaleMessages("fr");
export const it = buildLocaleMessages("it");
export const pt = buildLocaleMessages("pt");

function buildLocaleMessages(locale) {
  const messages = {};
  Object.keys(strings).forEach((key) => {
    messages[key] = strings[key][locale];
  });
  return messages;
}
