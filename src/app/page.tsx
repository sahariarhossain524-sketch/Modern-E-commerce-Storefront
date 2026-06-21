"use client";

import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { type Product } from "@/data/products";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const categories = ["All", "Clothing", "Electronics", "Accessories", "Home"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (data) setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col">
        {/* Stunning Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] w-full text-white overflow-hidden flex items-center">
          {/* Background Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Subtle Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-white">
                Elevate Your <br /> Everyday Style.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
                Discover our curated collection of premium essentials. Minimalist design meets uncompromising quality.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all flex items-center gap-2 group shadow-xl">
                Shop New Arrivals
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="container mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Featured Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked premium items that define the modern aesthetic.
              </p>
            </motion.div>

            {/* Category Filters */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-foreground text-background shadow-md' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64 w-full col-span-full">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}
