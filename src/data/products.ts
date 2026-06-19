export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: "New" | "Sale" | "Bestseller" | "Limited";
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Minimalist Essential Tee",
    price: 35,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller"
  },
  {
    id: "p2",
    name: "Premium Wireless Over-Ear Headphones",
    price: 249,
    originalPrice: 299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 312,
    badge: "Sale"
  },
  {
    id: "p3",
    name: "Signature Mechanical Keyboard",
    price: 159,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 89,
    badge: "New"
  },
  {
    id: "p4",
    name: "Classic Ceramic Coffee Mug",
    price: 24,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 45
  },
  {
    id: "p5",
    name: "Urban Everyday Backpack",
    price: 89,
    originalPrice: 120,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 210,
    badge: "Sale"
  },
  {
    id: "p6",
    name: "Matte Black Smartwatch Pro",
    price: 199,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 178,
    badge: "New"
  },
  {
    id: "p7",
    name: "Textured Knit Sweater",
    price: 75,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 92
  },
  {
    id: "p8",
    name: "Nordic Minimalist Chair",
    price: 145,
    originalPrice: 180,
    category: "Home",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 56,
    badge: "Limited"
  },
  {
    id: "p9",
    name: "Genuine Leather Wallet",
    price: 45,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 112
  },
  {
    id: "p10",
    name: "Noise-Cancelling Earbuds",
    price: 129,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 420,
    badge: "Bestseller"
  },
  {
    id: "p11",
    name: "Organic Cotton Lounge Pants",
    price: 55,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 38
  },
  {
    id: "p12",
    name: "Modern Table Lamp",
    price: 85,
    originalPrice: 110,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 64,
    badge: "Sale"
  },
  {
    id: "p13",
    name: "Classic White Sneakers",
    price: 110,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 512,
    badge: "Bestseller"
  },
  {
    id: "p14",
    name: "Slim Fit Denim Jeans",
    price: 65,
    originalPrice: 90,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 218,
    badge: "Sale"
  },
  {
    id: "p15",
    name: "Oxford Button-Down Shirt",
    price: 45,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 145
  },
  {
    id: "p16",
    name: "Vintage Graphic T-Shirt",
    price: 28,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 320,
    badge: "New"
  },
  {
    id: "p17",
    name: "Tailored Chino Pants",
    price: 55,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 89
  },
  {
    id: "p18",
    name: "Premium Leather Boots",
    price: 185,
    originalPrice: 220,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 167,
    badge: "Sale"
  },
  {
    id: "p19",
    name: "Classic Polo Shirt",
    price: 40,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 230
  },
  {
    id: "p20",
    name: "Athletic Running Shoes",
    price: 135,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 384,
    badge: "New"
  }
];
