// Sample Cart Data
export const sampleCartItems = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 89.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
        category: "Electronics",
        description: "Premium noise-canceling headphones with 30-hour battery life"
    },
    {
        id: 2,
        name: "Organic Cotton T-Shirt",
        price: 24.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
        category: "Clothing",
        description: "Comfortable 100% organic cotton t-shirt"
    },
    {
        id: 3,
        name: "Stainless Steel Water Bottle",
        price: 19.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&h=200&fit=crop",
        category: "Home & Garden",
        description: "32oz insulated water bottle, keeps drinks cold for 24 hours"
    },
    {
        id: 4,
        name: "Wireless Charging Pad",
        price: 34.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop",
        category: "Electronics",
        description: "Fast wireless charging pad compatible with all Qi-enabled devices"
    },
    {
        id: 5,
        name: "Yoga Mat",
        price: 29.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop",
        category: "Sports & Fitness",
        description: "Non-slip yoga mat with carrying strap"
    }
];

// Product categories for filtering
export const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports & Fitness",
    "Books",
    "Beauty & Health"
];

// Calculate cart totals
export const calculateCartTotals = (items) => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax rate
    const total = subtotal + tax;

    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2),
        itemCount: items.reduce((count, item) => count + item.quantity, 0)
    };
}; 