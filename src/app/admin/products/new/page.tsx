"use client";

import { addProduct } from "@/app/actions/product";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewProductPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/products"
          className="p-2 bg-background border border-border rounded-md hover:bg-muted transition-colors text-muted-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
          <p className="text-muted-foreground mt-1">Create a new product to display on your store.</p>
        </div>
      </div>

      <form 
        action={async (formData) => {
          setIsSubmitting(true);
          try {
            await addProduct(formData);
          } catch (error) {
            console.error(error);
            alert("Failed to add product. Please try again.");
            setIsSubmitting(false);
          }
        }} 
        className="space-y-8"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Details */}
          <div className="md:col-span-2 space-y-6 bg-background p-6 rounded-xl border border-border shadow-sm">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Product Name *</label>
              <input 
                id="name" 
                name="name" 
                required 
                className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="e.g. Minimalist Essential Tee"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium">Image URL *</label>
              <input 
                id="image" 
                name="image" 
                required 
                type="url"
                className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="https://images.unsplash.com/photo-..."
              />
              <p className="text-xs text-muted-foreground mt-1">Paste an image link from Unsplash or any hosted image.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium">Selling Price ($) *</label>
                <input 
                  id="price" 
                  name="price" 
                  type="number"
                  step="0.01"
                  required 
                  className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="35.00"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="originalPrice" className="text-sm font-medium">Original Price ($) (Optional)</label>
                <input 
                  id="originalPrice" 
                  name="originalPrice" 
                  type="number"
                  step="0.01"
                  className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="50.00"
                />
                <p className="text-xs text-muted-foreground mt-1">If on sale, enter the old price here.</p>
              </div>
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm space-y-6">
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">Category *</label>
                <select 
                  id="category" 
                  name="category"
                  className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home">Home</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="badge" className="text-sm font-medium">Badge (Optional)</label>
                <select 
                  id="badge" 
                  name="badge"
                  className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="None">No Badge</option>
                  <option value="New">New</option>
                  <option value="Sale">Sale</option>
                  <option value="Bestseller">Bestseller</option>
                  <option value="Limited">Limited</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-all font-medium flex items-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Saving Product...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                Publish Product
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
