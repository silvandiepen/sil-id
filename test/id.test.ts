import { useId } from "../src/id";
import { IdAlphabet } from "../src/types/index";

describe("useId", () => {
  it("should return a function", () => {
    const id = useId();
    expect(typeof id).toBe("function");
  });
});

describe("ID - default", () => {
  it("Should not return the same template", () => {
    const id = useId();
    expect(id().length).not.toBe("XXXX-XXXX-XXXX-XXXX");
  });

  it("Should return a 15 character string by default", () => {
    const id = useId();
    const myId = id();
    expect(myId.length).toBe(19);
  });

  it("Should return as string in the right format", () => {
    const id = useId();
    const myIdArray = id().split("");

    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[0])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[1])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[2])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[3])).toBe(true);

    expect(myIdArray[4]).toBe("-");

    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[5])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[6])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[7])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[8])).toBe(true);

    expect(myIdArray[9]).toBe("-");

    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[10])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[11])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[12])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[13])).toBe(true);

    expect(myIdArray[14]).toBe("-");

    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[15])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[16])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[17])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[18])).toBe(true);
  });
});

describe("ID - custom", () => {
  it("Should return a string with only valid characters - default", () => {
    const id = useId({
      total: 10,
    });
    const myIdArray = id().split("");

    expect(
      myIdArray.find((c: string) => !IdAlphabet["a-Z0-9"].includes(c))
    ).toBe(undefined);
  });

  it("Should return a string with of the length set by total", () => {
    const id = useId({
      total: 10,
    });
    const myId = id();

    expect(myId.length).toBe(10);
  });
  it("Should return a string with the right format", () => {
    const id = useId({
      format: "XXXX_XX",
    });
    const myIdArray = id().split("");

    expect(myIdArray.length).toBe(7);
    expect(myIdArray[4]).toBe("_");
    expect(
      myIdArray.find((c: string) => !IdAlphabet["a-Z0-9"].includes(c))
    ).toBe("_");
  });

  it("Should return a string with the right format and right characters", () => {
    const id = useId({
      format: "AAA_aaa_000_XXX",
    });
    const myIdArray = id().split("");

    expect(myIdArray.length).toBe(15);

    expect(IdAlphabet["A-Z"].includes(myIdArray[0])).toBe(true);
    expect(IdAlphabet["a-z0-9"].includes(myIdArray[0])).toBe(false);
    expect(IdAlphabet["A-Z"].includes(myIdArray[1])).toBe(true);
    expect(IdAlphabet["a-z0-9"].includes(myIdArray[1])).toBe(false);
    expect(IdAlphabet["A-Z"].includes(myIdArray[2])).toBe(true);
    expect(IdAlphabet["a-z0-9"].includes(myIdArray[2])).toBe(false);

    expect(myIdArray[3]).toBe("_");

    expect(IdAlphabet["a-z"].includes(myIdArray[4])).toBe(true);
    expect(IdAlphabet["A-Z0-9"].includes(myIdArray[4])).toBe(false);
    expect(IdAlphabet["a-z"].includes(myIdArray[5])).toBe(true);
    expect(IdAlphabet["A-Z0-9"].includes(myIdArray[5])).toBe(false);
    expect(IdAlphabet["a-z"].includes(myIdArray[6])).toBe(true);
    expect(IdAlphabet["A-Z0-9"].includes(myIdArray[6])).toBe(false);

    expect(myIdArray[7]).toBe("_");

    expect(IdAlphabet["0-9"].includes(myIdArray[8])).toBe(true);
    expect(IdAlphabet["a-Z"].includes(myIdArray[8])).toBe(false);
    expect(IdAlphabet["0-9"].includes(myIdArray[9])).toBe(true);
    expect(IdAlphabet["a-Z"].includes(myIdArray[9])).toBe(false);
    expect(IdAlphabet["0-9"].includes(myIdArray[10])).toBe(true);
    expect(IdAlphabet["a-Z"].includes(myIdArray[10])).toBe(false);

    expect(myIdArray[11]).toBe("_");

    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[12])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[13])).toBe(true);
    expect(IdAlphabet["a-Z0-9"].includes(myIdArray[14])).toBe(true);
  });

  it("Should return a string with custom characters", () => {
    const customAlphabet = "!@#$%^&*()";

    const id = useId({
      alphabet: customAlphabet,
    });

    const myIdArray = id().split("");

    expect(myIdArray.length).toBe(19);
    expect(myIdArray[4]).toBe("-");
    expect(myIdArray.find((c: string) => !customAlphabet.includes(c))).toBe(
      "-"
    );
  });

  it("Should return a string with Armenian characters", () => {
    const customAlphabet = "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆուև";

    const id = useId({
      alphabet: customAlphabet,
    });

    const myIdArray = id().split("");

    expect(myIdArray.length).toBe(19);
    expect(myIdArray[4]).toBe("-");
    expect(myIdArray.find((c: string) => !customAlphabet.includes(c))).toBe(
      "-"
    );
  });
  it("Should return a string with Armenian characters", () => {
    const customAlphabet = "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆուև";


    const customAlphabets =  [customAlphabet, IdAlphabet["0-9"]].join('')

    const id = useId({
      alphabet: [customAlphabet, IdAlphabet["0-9"]],
    });

    const myIdArray = id().split("");

    expect(myIdArray.length).toBe(19);
    expect(myIdArray[4]).toBe("-");
    expect(myIdArray.find((c: string) => !customAlphabets.includes(c))).toBe(
      "-"
    );
  });
});
