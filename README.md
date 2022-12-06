# ID

Create a random ID using the characters you prefer and in the format you want.

## Installation

```bash
npm install @sil/id
```

## Usage

As a composable

```js
import { useId } from "@sil/id";

const id = useId();

// id() can be used anywhere and will create a unique key
```

Or directly

```js
import { createId } from "@sil/id";

const id = createId();

// id is now a string with a key.
```

## Settings

### Alphabet

The alphabet defines the characters which can be used to create any ID. By default an ID can use all letters in upper and lowercase plus the numbers. But you can change this by settings the alphabet.

```js
import { useId, IdAlphabet } from "@sil/id";

const id = useId({
  alphabet: IdAlphabet["A-Z"],
});
```

Options:

| Option   | Value                                                                  | Description                                                          |
| -------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `a-z`    | `abcdefghijklmnopqrstuvwxyz`                                           | All 26 letters in lowercase                                          |
| `A-Z`    | `ABCDEFGHIJKLMNOPQRSTUVWXYZ`                                           | All 26 letters in uppercase                                          |
| `0-9`    | `0123456789`                                                           | All numbers from 0 to 9                                              |
| `a-Z`    | `abcdefghijklmnopqrstuvwxyz` `ABCDEFGHIJKLMNOPQRSTUVWXYZ`              | All 26 letters in uppercase + lowercase                              |
| `a-Z0-9` | `abcdefghijklmnopqrstuvwxyz` `ABCDEFGHIJKLMNOPQRSTUVWXYZ` `0123456789` | All 26 letters in uppercase + lowercase + all numbers                |
| `a-z0-9` | `abcdefghijklmnopqrstuvwxy` `0123456789`                               | All 26 letters in lowercase + all numbers                            |
| `A-Z0-9` | `ABCDEFGHIJKLMNOPQRSTUVWXY` `0123456789`                               | All 26 letters in uppercase + all numbers                            |
| custom   | Any string                                                             | You can give a string of any type of charactesr which can be used ID |

**Custom alphabet sample**

```js
import { useId } from "@sil/id";

const id = useId({
  alphabet: "!@#$%^&*()",
});

// example:  %(%$-&@(@-(@@&-*(*)
```

Or using another alphabet:

```js
import { useId } from "@sil/id";

const id = useId({
  alphabet: "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆուև",
});

// example:  բէպո-ֆտիօ-դոպի-րտռս
```

### Total

You can set the total, in this case it will just create an ID without a format with a random string of characters totalling the total defined.

```js
import { useId } from "@sil/id";

const id = useId({
  total: 10,
});

// example: tzeNNbXTnq
```

### Format

By default a format like `XXXX-XXXX-XXXX-XXXX` is used for an id, you can change this to whatever you like. The `X` in the format will be replaced by the characters defined in alphabet.

**code example:**

```js
import { useId } from "@sil/id";

const id = useId({
  format: "XXXX_XX",
});

// example: pKCM_Lr
```

Custom formats

**X** Will be replaced by a random letter defined in alphabet or by default `a-Z0-9`
**A** Will be replaced by a random uppercase letter from the alphabet
**a** Will be replaced by a random lowercase letter from the alphabet
**0** Will be replaced by a random number

**code example:**

```js
import { useId } from "@sil/id";

const id = useId({
  format: "AAA_aaa_000_XXX",
});

// example: BVR_bcu_629_yc7
```
