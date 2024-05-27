//Type: any
//disables type checking and effectively allows all types to be used
let v: any = true;
v = "string";  // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

//Type: unknown
// similar but safer alternative to any.
// prevents unknown types from being used

//Type: never
//effectively throws an error whenever it's defined
// rarely used but is used in advanced generics
let x: never = true;

//Type: undefined and null
let y: undefined = undefined;
let z: null = null;

