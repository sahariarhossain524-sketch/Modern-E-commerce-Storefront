"use client";

import { Product } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div 
      className="group flex flex-col gap-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {/* Badges */}
        {product.badge && (
          <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            product.badge === 'Sale' ? 'bg-red-500 text-white' : 
            product.badge === 'New' ? 'bg-foreground text-background' : 
            'bg-blue-600 text-white'
          }`}>
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-4 right-4 z-10 p-2.5 bg-background/90 backdrop-blur rounded-full hover:bg-background transition-all shadow-sm"
        >
          <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-foreground'}`} />
        </button>

        {/* Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Add to Cart Overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={(e) => { e.stopPropagation(); addItem(product); }}
            className="w-full bg-foreground text-background font-semibold py-4 flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all shadow-xl"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Bag
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{product.category}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg text-foreground leading-tight mt-1">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <p className="font-bold text-lg">${product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">${product.originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}
