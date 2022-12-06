import { useId } from "./id";
import { IdAlphabet } from "./types";

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
    console.log(myId)
    expect(myId.length).toBe(19);
  });

  it("Should return as string in the right format", () => {
    const id = useId();
    const myIdArray = id().split("");
    expect(myIdArray[4]).toBe("-");
    expect(myIdArray[9]).toBe("-");
    expect(myIdArray[14]).toBe("-");
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
});
