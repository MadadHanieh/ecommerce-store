export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    categoty: string;
}

export const mockProducts: Product[] = [
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        description: "This is a great product.",
        imageUrl: "/images/product1.jpg",
        categoty: "Category A"
    },
    {
        id: 2,
        name: "Product 2",
        price: 49.99,
        description: "This is another great product.",
        imageUrl: "/images/product2.jpg",
        categoty: "Category B"
    },
    {
        id: 3,
        name: "Product 3",
        price: 19.99,
        description: "You will love this product.",
        imageUrl: "/images/product3.jpg",
        categoty: "Category A"
    },
];  