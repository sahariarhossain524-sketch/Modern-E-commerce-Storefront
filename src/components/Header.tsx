"use client";

import { useCartStore } from "@/store/useCartStore";
import { ShoppingBag, Search, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const getCartCount = useCartStore((state) => state.getCartCount);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 -ml-2 text-foreground">
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/" className="font-bold text-xl tracking-tight">
            NEXA
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium text-muted-foreground">
            <Link href="#products" className="hover:text-foreground transition-colors">Men</Link>
            <Link href="#products" className="hover:text-foreground transition-colors">Women</Link>
            <Link href="#products" className="hover:text-foreground transition-colors">Accessories</Link>
            <Link href="#products" className="hover:text-foreground transition-colors">Journal</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-foreground hover:bg-muted rounded-full transition-colors hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleCart}
            className="p-2 text-foreground hover:bg-muted rounded-full transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {mounted && getCartCount() > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
