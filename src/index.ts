import { IdAlphabet, IdSettings } from "./types/index";

const randomBetween = (min = 0, max = 1) => {
  return Math.round(Math.random() * (max - min) + min);
};

const defaultSettings = {
  total: 0,
  alphabet: IdAlphabet["a-Z0-9"],
  format: "XXXX-XXXX-XXXX-XXXX",
};

const getRandomChar = (chars: IdAlphabet): string => {
  return chars.split("")[randomBetween(0, chars.split("").length - 1)];
};

const getAlphabet = (chars: IdSettings["alphabet"] = ""): string[] => {
  const keysOfIds = Object.keys(IdAlphabet);

  if (typeof chars == "string") {
    if (keysOfIds.includes(chars)) {
      // @ts-ignore
      return IdAlphabet[chars];
    }
    return chars.split("");
  }

  // in case an array of strings is returned
  return chars
    .map((c: string) => {
      return keysOfIds.includes(c)
        ? (keysOfIds as (keyof typeof IdAlphabet)[]).find(
            (key) => IdAlphabet[key] === c
          )
        : c;
    })
    .join("")
    .split("");
};

const getSettings = (args: Partial<IdSettings> = {}): IdSettings => {
  let settings: { [key: string]: any } = {};

  for (const [key, value] of Object.entries(args)) {
    if (value !== null) settings[key] = value;
  }

  return { ...defaultSettings, ...settings };
};

export const createId = (args: Partial<IdSettings> = {}): string => {
  const settings = getSettings(args);

  const chars: string[] = [];
  const alpha = getAlphabet(settings.alphabet);
  const alphabetLength = alpha.length;
  const format = settings.format.split("");

  let charLength = settings.total ? settings.total : settings.format.length;

  for (let i = 0; i < charLength; i++) {
    chars.push(alpha[randomBetween(0, alphabetLength - 1)]);
  }

  const replacer = (c: string, index: number): string => {
    switch (c) {
      case "X":
      case "x":
        return chars[index];
      case "A":
        return getRandomChar(IdAlphabet["A-Z"]);
      case "a":
        return getRandomChar(IdAlphabet["a-z"]);
      case "0":
        return getRandomChar(IdAlphabet["0-9"]);
      default:
        return c;
    }
  };

  return settings.total
    ? chars.join("")
    : format.map((c, index) => replacer(c, index)).join("");
};

export const useId = (args: Partial<IdSettings> = {}): Function => {
  return () => createId(args);
};
