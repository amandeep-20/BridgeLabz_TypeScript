// Constant Members:
enum Week {
    Monday = 1,
    Tuesday,  // 2 (auto-incremented)
    Wednesday = 5,
    Thursday, // 6 (auto-incremented)
}

// Computed Members:
enum MathConstants {
    Pi = 3.14,
    SquareRootOfTwo = Math.sqrt(2), // Computed
    Log2 = Math.log2(2)             // Computed
}


// properties
enum Color {
    Red = 1,
    Green,
    Blue
}

console.log(Color.Green);    // Output: 2
console.log(Color[2]);       // Output: Green