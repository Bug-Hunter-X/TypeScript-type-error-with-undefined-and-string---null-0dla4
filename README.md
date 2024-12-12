# TypeScript Type Error with undefined and string | null

This repository demonstrates a common TypeScript type error that occurs when using the `string | null` type and passing `undefined` as an argument.  The issue arises because `undefined` is not assignable to `string | null` even though it might seem logically consistent in certain contexts. The solution involves using a type that can accept either `string`, `null`, or `undefined`. 

## How to reproduce

1. Clone this repository.
2. Navigate to the directory using your terminal.
3. Run `tsc bug.ts` to compile the code.
4. Observe the compilation error.

## How to solve the issue

The solution involves using the union type `string | null | undefined`.