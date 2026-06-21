import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-background border border-border rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-extrabold tracking-tight">Payment Successful!</h1>
        <p className="text-muted-foreground">
          Thank you for your purchase. Your order has been received and is currently being processed. You will receive an email confirmation shortly.
        </p>

        <div className="pt-6 border-t border-border mt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full py-3 px-4 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
