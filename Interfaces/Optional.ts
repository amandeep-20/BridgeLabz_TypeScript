interface Product1001 {
    id: number;
    name: string;
    description?: string; // Optional property
}

const product: Product1001 = {
    id: 101,
    name: "Laptop",
};

console.log(product.id);
console.log(product.description); // Output: undefined
