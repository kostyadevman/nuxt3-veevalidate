import { defineRule } from "vee-validate";
import * as rules from "@vee-validate/rules";



export default defineNuxtPlugin((nuxtApp) => {

  // TODO: replace to helpers
  function makePpural(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return `${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
  }

  Object.keys(rules)
    .filter((k) => k !== "default")
    .forEach((rule) => {
      defineRule(rule, rules[rule]);
    });

    defineRule('custom_rule', (value, [limit, bannedSymbol]) => {

      if (!value || !value.length) {
        return true;
      }

      const indexOfBannedSymbol = value.indexOf(bannedSymbol);
        if (value.length && indexOfBannedSymbol !== -1) {
        return `Вы ввели ${value.length} ${makePpural(value.length, ["символ", "символа", "символов"])} из ${limit} и есть запрещенный символ "*"`;
      }
      return true;
    })
});
