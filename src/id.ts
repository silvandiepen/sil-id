import { IdAlphabet, IdSettings } from "./types";

const randomBetween = (min = 0, max = 1) => {
  return Math.round(Math.random() * (max - min) + min);
};

const defaultSettings = {
  total: 0,
  alphabet: IdAlphabet["a-Z0-9"],
  format: "XXXX-XXXX-XXXX-XXXX",
};

export const useId = (args: IdSettings = {}): Function => {
  return (): string => {
    const settings = { ...defaultSettings, ...args };

    const chars: string[] = [];
    const alphabetLength = settings.alphabet.length;
    const alpha = settings.alphabet.split("");
    const format = settings.format.split("");

    let charLength = settings.total ? settings.total : settings.format.length;

    for (let i = 0; i < charLength; i++) {
      chars.push(alpha[randomBetween(0, alphabetLength - 1)]);
    }

    return settings.total
      ? chars.join("")
      : format
          .map((c, index) => {
            return c == "X" ? chars[index] : c;
          })
          .join("");
  };
};
