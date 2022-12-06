const alphabets: { [key: string]: string } = {
  az: "abcdefghijklmnopqrstuvwxyz",
  AZ: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "09": "0123456789",
};

export const IdAlphabet = {
  "a-z": alphabets.az,
  "A-Z": alphabets.AZ,
  "0-9": alphabets["09"],
  "a-Z": alphabets.az + alphabets.AZ,
  "a-Z0-9": alphabets.az + alphabets.AZ + alphabets["09"],
};

export type IdAlphabet = typeof IdAlphabet[keyof typeof IdAlphabet];
export interface IdSettings {
    total?: number;
    alphabet?: IdAlphabet;
    format?: String;
  }
  