// Type compatibility table

function fx(): never { throw Error("Never returns"); }
function fv(): void { }

var x: never = fx();
var u: undefined = undefined;
var v: void = fv();
var n: null = null;
var t: {} = {}; // random type
var k: unknown = {};
var a: any = {};

/*
  |x    |
--+-----+
y |x = y| (typeof X "assignable from" typeof Y)
--+-----+
*/

/*         | never        | undefined    | void         | null         | T            | unknown      | any          |
-----------+--------------+--------------+--------------+--------------+--------------+--------------+--------------+
never      |*/  x = x;  /*|*/  u = x;  /*|*/  v = x;  /*|*/  n = x;  /*|*/  t = x;  /*|*/  k = x;  /*|*/  a = x;  /*|
undefined  |*/  x = u;  /*|*/  u = u;  /*|*/  v = u;  /*|*/  n = u;  /*|*/  t = u;  /*|*/  k = u;  /*|*/  a = u;  /*|
void       |*/  x = v;  /*|*/  u = v;  /*|*/  v = v;  /*|*/  n = v;  /*|*/  t = v;  /*|*/  k = v;  /*|*/  a = v;  /*|
null       |*/  x = n;  /*|*/  u = n;  /*|*/  v = n;  /*|*/  n = n;  /*|*/  t = n;  /*|*/  k = n;  /*|*/  a = n;  /*|
T          |*/  x = t;  /*|*/  u = t;  /*|*/  v = t;  /*|*/  n = t;  /*|*/  t = t;  /*|*/  k = t;  /*|*/  a = t;  /*|
unknown    |*/  x = k;  /*|*/  u = k;  /*|*/  v = k;  /*|*/  n = k;  /*|*/  t = k;  /*|*/  k = k;  /*|*/  a = k;  /*|
any        |*/  x = a;  /*|*/  u = a;  /*|*/  v = a;  /*|*/  n = a;  /*|*/  t = a;  /*|*/  k = a;  /*|*/  a = a;  /*|
-----------+--------------+--------------+--------------+--------------+--------------+--------------+--------------+
*/

// Observations (under `strict: true`):
//
//   1. `never` is assignable-from only `never`
//   2. `never` is assignable-to any type
//   3. `any` and `unknown` are assignable-from any type
//   4. `unknown` is assignable-to only `any` and `unknown`
//   5. `any` is assignable-to any type (except for `never`, see p.1)
//   6. `undefined` is assignable-to `void`
//   7. `undefined`, `null`, `T` are incompatible
//
