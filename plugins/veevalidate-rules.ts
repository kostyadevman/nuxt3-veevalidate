import { defineRule } from "vee-validate";
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
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

      if (value && indexOfBannedSymbol > 0) {
        console.log(value)
        console.log(indexOfBannedSymbol)
        return `Вы ввели ${value.length} символов из ${limit} и есть запрещенный символ "*"`;
      }
      return true;
    })
});
