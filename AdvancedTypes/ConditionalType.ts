type isString <T> = T extends string ? true : false;

type test1 = isString<string>;
type test2 = isString<number>;


// Extract: Select types that extend a given type.
type ExtractStringOrNumber = Extract<string | number | boolean, string | number>; // string | number

// Exclude: Exclude types that extend a given type
type ExcludeBoolean = Exclude<string | number | boolean, boolean>; // string | number



// The infer keyword is used to extract parts of a type.
type Return<T> = T extends (...args: any[]) => infer R ? R : never;

type ExampleFn = () => string;
type ExampleReturnType = Return<ExampleFn>; // string
