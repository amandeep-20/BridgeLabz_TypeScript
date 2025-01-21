class Product{
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    get data(): number {
        return this.price;
    }

    set data (value: number) {
        if (value < 0) throw new Error("Price cannot be negative.");
        this.price = value;
    }
}

const product10 = new Product(100);
product10.data = 500; // Setter
console.log(product10.data); // Getter
