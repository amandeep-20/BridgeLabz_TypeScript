let readnumbers: readonly number[] = [1, 2, 3];

// Error: Cannot push to a readonly array
// readnumbers.push(4);

let readstrings: ReadonlyArray<string> = ["a", "b", "c"];

// Error: Cannot modify a readonly array
// readstrings[0] = "z";