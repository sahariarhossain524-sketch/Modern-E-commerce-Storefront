const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://ybrsxebdyjtfwcopsbtn.supabase.co";
const supabaseKey = "sb_publishable_ltzhCmzYfPHthY3g2w1FJw_BfRXM6aE";
const supabase = createClient(supabaseUrl, supabaseKey);

const newProducts = [
  { name: "Classic Cotton T-Shirt", price: 25, category: "Clothing", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", badge: "New" },
  { name: "Vintage Leather Watch", price: 120, original_price: 150, category: "Accessories", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80", badge: "Sale" },
  { name: "Polarized Aviator Sunglasses", price: 45, category: "Accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", badge: "Bestseller" },
  { name: "Luxury Designer Handbag", price: 299, category: "Accessories", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80" },
  { name: "Slim Fit Denim Jeans", price: 65, category: "Clothing", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80" },
  { name: "Smart Fitness Watch", price: 85, category: "Electronics", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?auto=format&fit=crop&w=800&q=80", badge: "New" },
  { name: "Wireless Noise Cancelling Headphones", price: 199, original_price: 250, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", badge: "Sale" },
  { name: "Ceramic Minimalist Vase", price: 35, category: "Home", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80" },
  { name: "Gold Plated Minimalist Necklace", price: 85, category: "Accessories", image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?auto=format&fit=crop&w=800&q=80", badge: "Limited" },
  { name: "Waterproof Hiking Boots", price: 145, category: "Clothing", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80" }
];

async function insert() {
  const { data, error } = await supabase.from('products').insert(newProducts);
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Successfully inserted 10 products!");
  }
}
insert();
