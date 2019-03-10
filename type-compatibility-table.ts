// Type compatibility table

function fx(): never { throw Error("Never returns"); }
function fv(): void { }

var x: never = fx();
var u: undefined = undefined;
var v: void = fv();
var n: null = null;
var t: {} = {}; // random type
var a: any = {};

/*
  |x    |
--+-----+
y |x = y| (typeof X "assignable from" typeof Y)
--+-----+
*/

/*         | never        | undefined    | void         | null         | T            | any          |
-----------+--------------+--------------+--------------+--------------+--------------+--------------+
never      |*/  x = x;  /*|*/  u = x;  /*|*/  v = x;  /*|*/  n = x;  /*|*/  t = x;  /*|*/  a = x;  /*|
undefined  |*/  x = u;  /*|*/  u = u;  /*|*/  v = u;  /*|*/  n = u;  /*|*/  t = u;  /*|*/  a = u;  /*|
void       |*/  x = v;  /*|*/  u = v;  /*|*/  v = v;  /*|*/  n = v;  /*|*/  t = v;  /*|*/  a = v;  /*|
null       |*/  x = n;  /*|*/  u = n;  /*|*/  v = n;  /*|*/  n = n;  /*|*/  t = n;  /*|*/  a = n;  /*|
T          |*/  x = t;  /*|*/  u = t;  /*|*/  v = t;  /*|*/  n = t;  /*|*/  t = t;  /*|*/  a = t;  /*|
any        |*/  x = a;  /*|*/  u = a;  /*|*/  v = a;  /*|*/  n = a;  /*|*/  t = a;  /*|*/  a = a;  /*|
-----------+--------------+--------------+--------------+--------------+--------------+--------------+
*/

// Observations (under `strict: true`):
//
//   1. `never` assignable-from only `never`
//   2. `never` assignable-to any type
//   3. `any` assignable-from any type
//   4. `any` assignable-to any type (except for `never`, see p.1)
//   5. `undefined` assignable-to `void`
//   6. `undefined`, `null`, `T` are incompatible
//