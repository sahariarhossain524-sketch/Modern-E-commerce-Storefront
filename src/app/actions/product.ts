"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export async function addProduct(formData: FormData) {
  // 1. Verify user is authenticated (Extra security measure)
  const session = await auth();
  if (!session.userId) {
    throw new Error("Unauthorized");
  }

  // 2. Extract data from formData
  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const originalPriceRaw = formData.get("originalPrice") as string;
  const original_price = originalPriceRaw ? parseFloat(originalPriceRaw) : null;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const badgeRaw = formData.get("badge") as string;
  const badge = badgeRaw === "None" ? null : badgeRaw;

  // Basic validation
  if (!name || !price || !category || !image) {
    throw new Error("Missing required fields");
  }

  // 3. Insert into Supabase
  const { error } = await supabase.from("products").insert([
    {
      name,
      price,
      original_price,
      category,
      image,
      badge,
      // Default values for new products
      rating: 5.0,
      reviews: 0
    }
  ]);

  if (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add product to database");
  }

  // 4. Revalidate the home page and products page so the new product appears instantly
  revalidatePath("/");
  revalidatePath("/admin/products");

  // 5. Redirect back to products table
  redirect("/admin/products");
}
